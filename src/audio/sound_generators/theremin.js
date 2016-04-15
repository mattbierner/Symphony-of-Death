"use strict";
const Wad = require('imports?this=>window!web-audio-daw');
import audioCtx from '../audio_context';
import * as num from '../../num';

const min = 500;
const max = 700;

const freqX = (event, progress) =>
    Math.min(max, 300 + (num.sample(event.KillerWorldLocation.x, event.VictimWorldLocation.x, progress) / 10) * 100);

/**
 * Plays sound based on event world location.
 */
export default (event) => {
    let length = event.KillVectorLength;
    const duration = length * 2; // seconds

    const xOscillator = audioCtx.createOscillator();
    xOscillator.type = 'triangle';
    xOscillator.frequency.value = freqX(event, 0);

    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0;
    
    xOscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    return {
        sound: {
            play() {
                gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + duration * 0.2);
                gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime + duration * 0.7);
                gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration * 1);
                
                xOscillator.frequency.setValueAtTime(freqX(event, 0), audioCtx.currentTime);
                xOscillator.frequency.linearRampToValueAtTime(freqX(event, 1), duration * 1);
                xOscillator.start();
                xOscillator.stop(audioCtx.currentTime + duration)
            },
            stop() {
                xOscillator.stop();
            }
        },
        duration: duration * 1000
    };
};