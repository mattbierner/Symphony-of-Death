"use strict";

let instance; 

const normalizeWeaponName = name =>
    name.replace(/\s/g, '-').toLowerCase();

/**
 * Map of weapon ids to weapon metadata.
 */
class WeaponsTable {
    constructor() {
        const weaponsData = require('./data/weapons.json');

        this._data = weaponsData.reduce(
            (map, data) => {
                map.set(+data.id, Object.assign({}, data, {
                    name: normalizeWeaponName(data.name)
                }));
                return map;
            },
            new Map());
    }
    
    get(id) {
        return this._data.get(+id);
    }
}

/**
 * Get an instance of the weapons table that maps weapon id to weapon data.
 */
export const getWeaponsTable = () => {
    instance = instance || new WeaponsTable();
    return instance;
};
