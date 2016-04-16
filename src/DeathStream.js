"use strict";
const THREE = require('three');
const createTree = require("functional-red-black-tree")
const moment = require('moment');

const example = require('./data/example.json');

const createTreeFromEvents = events =>
    events.reduce(
        (tree, event) => tree.insert(event.TimeSinceStart, event),
        createTree());
        
const createMapFromEvents = events =>
    events.reduce(
        (map, event) => {
            map.set(event.Id, event);
            return map;
        },
        new Map());

/**
 * 
 */
class DeathStream {
    constructor(eventsData) {
        const duration = eventsData.length ? eventsData[eventsData.length - 1].TimeSinceStart : 0;
        
        let maxX = 0, maxY = 0, maxZ = 0;
        const events = eventsData.map((eventData, i) => {
            const KillerWorldLocation = new THREE.Vector3().copy(eventData.KillerWorldLocation);
            const VictimWorldLocation = new THREE.Vector3().copy(eventData.VictimWorldLocation);
            
            maxX = Math.max(maxX, Math.abs(KillerWorldLocation.x), Math.abs(VictimWorldLocation.x));
            maxY = Math.max(maxY, Math.abs(KillerWorldLocation.y), Math.abs(VictimWorldLocation.y));
            maxZ = Math.max(maxZ, Math.abs(KillerWorldLocation.z), Math.abs(VictimWorldLocation.z));

            const KillVector = new THREE.Vector3().subVectors(KillerWorldLocation, VictimWorldLocation);
            
            return Object.assign({}, eventData, {
                Id: '' + i,
                MatchProgress: (eventData.TimeSinceStart + 1.0) / duration,
                KillVector: KillVector,
                ShotLine: new THREE.Line3(KillerWorldLocation, VictimWorldLocation),
                KillerWorldLocation: KillerWorldLocation,
                VictimWorldLocation: VictimWorldLocation,
                KillVectorLength: KillVector.length(),
                IsMelee: eventData.IsGroundPound || eventData.IsMelee || eventData.IsShoulderBash
            });
        });
            
        this.duration = duration;
        this.times = createTreeFromEvents(events);
        this._map = createMapFromEvents(events);
        
        this.bounds = { x: maxX, y: maxY, z: maxZ };
    }
    
    forEach(f) {
        this.times.forEach((_, x) => f(x));
    }
}

/**
 * Create a DeathStream from json.
 */
export const createFromJson = (events) => {
    const deaths = events.filter(x => x && x.EventName === "Death");
    
    return new DeathStream(deaths.map(eventData =>
        Object.assign({}, eventData, {
            TimeSinceStart: moment.duration(eventData.TimeSinceStart).asMilliseconds()
        })));
};

/**
 * Load a death stream for a match.
 */
export const loadForMatch = (matchId) =>
    Promise.resolve({
        events: example.GameEvents,
        stream: createFromJson(example.GameEvents)
    });
