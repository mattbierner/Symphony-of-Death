"use strict";
import {getWeaponsTable} from '../../../weapons';

/**
 * Helper that adds weapon info to generator.
 */
export default (mapper) =>
    (event, data) => {
        const weapon = getWeaponsTable().get(event.KillerWeaponStockId);
        return mapper(weapon, event, data);
    };