"use strict";
const Wad = require('imports?this=>window!web-audio-daw');

const min = 100;
const max = 1200;

/**
 * 
 */
export default (event) => {
    const length = event.KillVectorLength;
    
    let progress = 300 + -(length - 3.0) * 100;
    let p0 = Math.min(max, Math.max(min, progress));
    const sound = new Wad({source : 'sine', pitch: p0, env: { attack: 1, hold: 5, release: 2 } })
    
    return {
        sound: sound,
        duration: 8000
    };
};