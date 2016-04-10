"use strict";
const createTree = require("functional-red-black-tree")
const moment = require('moment');

const convertJsonEvent = eventData =>
    Object.assign({}, eventData, {
        TimeSinceStart: moment.duration(eventData.TimeSinceStart).asMilliseconds()
    });

const createTreeFromEvents = events =>
    events.reduce(
        (tree, event) => tree.insert(event.TimeSinceStart, event),
        createTree());

class DeathStream {
    constructor(events) {
        this._tree = createTreeFromEvents(events);
    }
}

export const createFromJson = (events) =>
    new DeathStream(events
        .filter(x =>
            x && x.EventName === "Death")
        .map(convertJsonEvent));
