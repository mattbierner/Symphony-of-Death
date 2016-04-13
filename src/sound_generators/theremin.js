"use strict";
const Wad = require('imports?this=>window!web-audio-daw');

const min = 500;
const max = 700;

const sample = (min, max, value) =>
    Math.max(min, Math.min(max, min + (max - min) * value));

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const freqX = (event, progress) =>
    Math.min(max, 300 + (sample(event.KillerWorldLocation.x, event.VictimWorldLocation.x, progress) / 10) * 100);

/**
 * 
 */
export default (event) => {
    let length = event.KillVectorLength;

    const duration = length * 2; // seconds
    //const sound = new Wad({source : 'sine', pitch: min, env: { attack: duration * 0.2, hold: duration * 0.7, release: duration * 0.1 } })

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