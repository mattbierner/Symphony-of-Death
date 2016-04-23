"use strict";
const Soundfont = require('soundfont-player');
const  instrumentNames = require('soundfont-player/instruments.json');

import audioCtx from '../audio_context';
import notes from '../notes';
import weapon_base from './combinators/weapon'

const maxGain = 0.2;
const duration = 2;

const instrument = audioCtx.then(ctx => {
    const font = new Soundfont(ctx);
    const instrument = font.instrument('pizzicato_strings');
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
    
  //  const gainNode = audio.ctx.createGain();
    //gainNode.gain.value = 0;

//    gainNode.connect(audio.destination);
    
    let done = false;
    return instrument.then(instrument => ({
        sound: {
            play() {
                return instrument.play(note, 0);
            },
            stop() {
            }
        },
        duration: duration * 1000
    }));
});