"use strict";

const weaponsData = require('./data/weapons.json');

let instance; 

const buildWeaponsTable = () =>
    weaponsData.reduce(
        (map, data) => {
            map.set(+data.id, data);
            return map;
        },
        new Map());

/**
 * Get an instance of the weapons table that maps weapon id to weapon data.
 */
export const getWeaponsTable = () => {
    instance = instance || buildWeaponsTable();
    return instance;
};
