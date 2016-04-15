"use strict";
const Wad = require('imports?this=>window!web-audio-daw');
import audioCtx from './audio_context';
import weapon_base from './weapon_base'

const min = 100;
const max = 1200;

const duration = 2;

/**
 * Simple sine wave sound generator.
 * 
 * Changes pitch based on kill vector length.
 */
export default weapon_base((weapon, event, data) => {
    let length = event.KillVectorLength;
    if (weapon.type === 'Grenade' || event.IsMelee)
        length = 0;
    
    let progress = 300 + (3.0 - length) * 200;
    let p0 = Math.min(max, Math.max(min, progress));

    const xOscillator = audioCtx.createOscillator();
    xOscillator.type = 'sine';
    xOscillator.frequency.value = p0;

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

                xOscillator.start();
                xOscillator.stop(audioCtx.currentTime + duration)
            },
            stop() {
                xOscillator.stop();
            }
        },
        duration: duration * 1000
    };
});