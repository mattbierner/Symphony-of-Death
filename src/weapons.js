"use strict";

const weaponsData = require('./data/weapons.json');

/**
 * Get an instance of the weapons table.
 */
export const getWeaponsTable = () =>
    weaponsData.reduce(
        (map, data) => {
            map.set(data.id, data);
            return map;
        },
        new Map());
