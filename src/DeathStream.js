"use strict";
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
        const events = eventsData.map((eventData, i) =>
            Object.assign({}, eventData, {
                Id: '' + i,
                MatchProgress: (eventData.TimeSinceStart + 1.0) / duration
            }));
            
        this.duration = duration;
        this.times = createTreeFromEvents(events);
        this._map = createMapFromEvents(events);
    }
    
    forEach(f) {
        this.times.forEach(f);
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
