"use strict";
const Wad = require('imports?this=>window!web-audio-daw');
import weapon_base from './weapon_base'

const min = 100;
const max = 1200;

/**
 * 
 */
export default weapon_base((weapon, event) => {
    let length = event.KillVectorLength;
    if (weapon.type === 'Grenade' || event.IsMelee)
        length = 0;
    
    let progress = 300 + (3.0 - length) * 150;
    let p0 = Math.min(max, Math.max(min, progress));
    const sound = new Wad({source : 'sine', pitch: p0, env: { attack: 1, hold: 5, release: 2 } })
    
    return {
        sound: sound,
        duration: 8000
    };
});