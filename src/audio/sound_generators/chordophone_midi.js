"use strict";
const Soundfont = require('soundfont-player');

import audioCtx from '../audio_context';
import notes from '../notes';
import weapon_base from './combinators/weapon';
import ramp from '../ramp';

const maxGain = 0.50;
const duration = 2;


/** 
 * Calculate the frequency for an event.
 */
const computeNote = (event, data) => {
    let value = 0;
    if (data.stream) {
        value = 1 - (event.KillVectorLength -  data.stream.minLength) / (data.stream.maxLength - data.stream.minLength);
    }
    
    return notes[Math.floor(value * notes.length)];
};

/**
 * Calculate the volume for an event.
 */
const computeGain = (event, data, frequency) => {
    let computedGain = 1;
    
    if (!isNaN(data.velocity)) 
        computedGain *= data.velocity / 0.5;
    
    return Math.min(maxGain, maxGain * computedGain)
}

const loader = (name) =>
    'https://cdn.rawgit.com/gleitz/midi-js-Soundfonts/master/FluidR3_GM/' + name + '-mp3.js';

/**
 * Simple sine wave sound generator.
 * 
 * Changes pitch based on kill vector length.
 */
export default (instrumentName) => {
    const instrument = audioCtx.then(ctx => {
        const font = new Soundfont(ctx, loader);
        const instrument = font.instrument(instrumentName);
        return new Promise((resolve, reject) => instrument.onready(resolve));
    });
    
    return weapon_base((weapon, audio, event, data) => {
        let length = event.KillVectorLength;
        if (weapon.type === 'Grenade' || event.IsMelee)
            length = 0;
        
        const note = computeNote(event, data);
        const gain = computeGain(event, data, note); 
        
        const gainNode = audio.ctx.createGain();
        gainNode.gain.value = 0;
        gainNode.connect(audio.destination);
        
        let done = false;
        let node;
        return instrument.then(instrument => ({
            sound: {
                play() {
                    const time = audio.ctx.currentTime;
                    ramp(gainNode.gain, gain, time, 0, 0.5, duration);
                    node = instrument.play(note, time, duration, { destination: gainNode });
                },
                stop() {
                    if (node) {
                        node.stop(0)
                    }
                }
            },
            duration: duration * 1000
        }));
    });
};