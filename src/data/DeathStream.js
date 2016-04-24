"use strict";
const THREE = require('three');
const createTree = require("functional-red-black-tree")
const moment = require('moment');
import {getWeaponsTable} from './weapons';

const createTreeFromEvents = events =>
    events.reduce(
        (tree, event) => tree.insert(event.TimeSinceStart.asMilliseconds(), event),
        createTree());
        
const createMapFromEvents = events =>
    events.reduce(
        (map, event) => {
            map.set(event.Id, event);
            return map;
        },
        new Map());

/**
 * Stream of death events.
 */
class DeathStream {
    constructor(eventsData) {
        const weapons = getWeaponsTable();
        
        const duration = eventsData.length ? eventsData[eventsData.length - 1].TimeSinceStart.asMilliseconds() : 0;
        

        let minLength = Infinity, maxLength = 0;
        
        // Compute bounds
        let max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
        let min = new THREE.Vector3(Infinity, Infinity, Infinity);
        eventsData.forEach(eventData =>  {
            const {KillerWorldLocation, VictimWorldLocation} = eventData;
            
            max.x = Math.max(max.x, KillerWorldLocation.x, VictimWorldLocation.x);
            max.y = Math.max(max.y, KillerWorldLocation.y, VictimWorldLocation.y);
            max.z = Math.max(max.z, KillerWorldLocation.z, VictimWorldLocation.z);
            
            min.x = Math.min(min.x, KillerWorldLocation.x, VictimWorldLocation.x);
            min.y = Math.min(min.y, KillerWorldLocation.y, VictimWorldLocation.y);
            min.z = Math.min(min.z, KillerWorldLocation.z, VictimWorldLocation.z);
        });
        
        // Center data
        const offset = new THREE.Vector3().addVectors(min, max).divideScalar(2);
        
        // Create actual events
        const events = eventsData.map((eventData, i) => {
            const isMelee = eventData.IsGroundPound || eventData.IsMelee || eventData.IsShoulderBash;
            
            const KillerWorldLocation = new THREE.Vector3().copy(eventData.KillerWorldLocation).sub(offset);
            const VictimWorldLocation = new THREE.Vector3().copy(eventData.VictimWorldLocation).sub(offset);
            
            const KillVector = new THREE.Vector3().subVectors(KillerWorldLocation, VictimWorldLocation);
         
            const weapon = weapons.get(eventData.KillerWeaponStockId);
            if (!isMelee && (weapon && weapon.Type !== 'Grenade')) {
                minLength = Math.min(minLength, KillVector.length());
                maxLength = Math.max(maxLength, KillVector.length());
            }
            
            return Object.assign({}, eventData, {
                Id: '' + i,
                MatchProgress: (eventData.TimeSinceStart.asMilliseconds() + 1.0) / duration,
                KillVector: KillVector,
                ShotLine: new THREE.Line3(KillerWorldLocation, VictimWorldLocation),
                KillerWorldLocation: KillerWorldLocation,
                VictimWorldLocation: VictimWorldLocation,
                KillVectorLength: KillVector.length(),
                IsMelee: isMelee
            });
        });
        
        this.duration = duration;
        this.times = createTreeFromEvents(events);
        this._map = createMapFromEvents(events);
        
        min.sub(offset);
        max.sub(offset);
        this.bounds = {
            x: Math.max(Math.abs(max.x), Math.abs(min.x)),
            y: Math.max(Math.abs(max.y), Math.abs(min.y)),
            z: Math.max(Math.abs(max.z), Math.abs(min.z))
        };
        
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
    
    forEach(f) {
        this.times.forEach((_, x) => { f(x); return false; });
    }
}

/**
 * Create a `DeathStream` from json.
 */
export const createFromJson = (events) => {
    const deaths = events.filter(x => x && x.EventName === "Death");
    
    return new DeathStream(deaths.map(eventData =>
        Object.assign({}, eventData, {
            TimeSinceStart: moment.duration(eventData.TimeSinceStart)
        })));
};
