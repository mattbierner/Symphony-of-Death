"use strict";
const Wad = require('imports?this=>window!web-audio-daw');
import * as num from '../../num';

const min = 500;
const max = 700;

const freqX = (event, progress) =>
    Math.min(max, 300 + (num.sample(event.KillerWorldLocation.x, event.VictimWorldLocation.x, progress) / 10) * 100);

/**
 * Plays sound based on event world location.
 */
export default (audio, event, data) => {
    let length = event.KillVectorLength;
    const duration = length * 2; // seconds

    const xOscillator = audio.ctx.createOscillator();
    xOscillator.type = 'triangle';
    xOscillator.frequency.value = freqX(event, 0);

    const gainNode = audio.ctx.createGain();
    gainNode.gain.value = 0;
    
    xOscillator.connect(gainNode);
    gainNode.connect(audio.destination);

    return Promise.resolve({
        sound: {
            play() {
                gainNode.gain.setValueAtTime(0, audio.ctx.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, audio.ctx.currentTime + duration * 0.2);
                gainNode.gain.setValueAtTime(0.1, audio.ctx.currentTime + duration * 0.7);
                gainNode.gain.linearRampToValueAtTime(0, audio.ctx.currentTime + duration * 1);
                
                xOscillator.frequency.setValueAtTime(freqX(event, 0), audio.ctx.currentTime);
                xOscillator.frequency.linearRampToValueAtTime(freqX(event, 1), duration * 1);
                xOscillator.start();
                xOscillator.stop(audio.ctx.currentTime + duration)
            },
            stop() {
                xOscillator.stop();
            }
        },
        duration: duration * 1000
    });
};