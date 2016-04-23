"use strict";
import * as death_stream from './DeathStream';
import xhr from 'xhr';

/**
 * Halo 5 match
 */
export class Match {
    constructor(id, events) {
        this.id = id;
        this.events = events;
        this.stream = death_stream.createFromJson(events);
    }
}

/**
 * Create a match.
 */
export const createFromData = (id, data) =>
    new Match(id, data.GameEvents);

/**
 * Create a match from a file.
 */
export const createFromFile = (id, path) =>
    new Promise((resolve, reject) => {
        xhr(path, {}, (error, response, data) => {
            if (error || response.statusCode !== 200)
                return reject("could not load file: " + path);
            return resolve(JSON.parse(data));
            
        })
    })
    .then(data => createFromData(id, data))
