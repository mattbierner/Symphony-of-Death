"use strict";
const createTree = require("functional-red-black-tree")
const moment = require('moment');

const example = require('./data/example.json');

const vectorLength = (a, b) => 
    Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2));

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
            maxX = Math.max(maxX, Math.abs(eventData.KillerWorldLocation.x), Math.abs(eventData.VictimWorldLocation.x));
            maxY = Math.max(maxY, Math.abs(eventData.KillerWorldLocation.y), Math.abs(eventData.VictimWorldLocation.y));
            maxZ = Math.max(maxZ, Math.abs(eventData.KillerWorldLocation.z), Math.abs(eventData.VictimWorldLocation.z));

            return Object.assign({}, eventData, {
                Id: '' + i,
                MatchProgress: (eventData.TimeSinceStart + 1.0) / duration,
                KillVector: {
                    x: eventData.KillerWorldLocation.x - eventData.VictimWorldLocation.x,
                    y: eventData.KillerWorldLocation.y - eventData.VictimWorldLocation.y,
                    z: eventData.KillerWorldLocation.z - eventData.VictimWorldLocation.z,
                },
                KillVectorLength: vectorLength(eventData.KillerWorldLocation, eventData.VictimWorldLocation),
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
