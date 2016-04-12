"use strict";
import {getWeaponsTable} from '../weapons';

/**
 * Helper that adds weapon info to generator.
 */
export default (mapper) =>
    (event) => {
        const weapon = getWeaponsTable().get(event.KillerWeaponStockId);
        return mapper(weapon, event);
    };