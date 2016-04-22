"use strict";
import {getWeaponsTable} from '../../../data/weapons';

/**
 * Helper that adds weapon info to generator.
 */
export default (mapper) =>
    (audioCtx, event, data) => {
        const weapon = getWeaponsTable().get(event.KillerWeaponStockId);
        return mapper(weapon, audioCtx, event, data);
    };