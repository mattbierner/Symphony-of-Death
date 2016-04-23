"use strict";
import weapon_base from './combinators/weapon'

const Soundfont = require('soundfont-player');

import audioCtx from '../audio_context';
const  instrumentNames = require('soundfont-player/instruments.json');

import nodes from '../notes';

const maxGain = 0.2;

const duration = 2;

const instrument = audioCtx.then(ctx => {
    const font = new Soundfont(ctx);
    const instrument = font.instrument('choir_aahs');
    return new Promise((resolve, reject) =>
        instrument.onready(resolve));
});


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
    
    // Play high pitched sounds softer
    computedGain *= Math.max(0.2, 1.0 - (frequency - min) / (max - min));

    if (!isNaN(data.velocity)) 
        computedGain *= data.velocity / 0.5;
    
    return Math.min(maxGain, maxGain * computedGain)
}

/**
 * Simple sine wave sound generator.
 * 
 * Changes pitch based on kill vector length.
 */
export default weapon_base((weapon, audio, event, data) => {
    
    let length = event.KillVectorLength;
    if (weapon.type === 'Grenade' || event.IsMelee)
        length = 0;
    
    const note = computeNote(event, data);
    const gain = computeGain(event, data, note); 
    
    let done = false;
    return Promise.resolve({
        sound: {
            play() {
                return instrument.then(x => x.play(note, 0));
            },
            stop() {
            }
        },
        duration: duration * 1000
    });
});