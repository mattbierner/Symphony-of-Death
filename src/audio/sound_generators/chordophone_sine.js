"use strict";
import weapon_base from './combinators/weapon';
import ramp from '../ramp';

const min = 100;
const max = 1000;

const maxGain = 0.2;

const duration = 2;

/**
 * Calculate the frequency for an event.
 */
const computeFrequency = (event, data) => {
    if (data.stream) {
        return max - (max - min) * (event.KillVectorLength -  data.stream.minLength) / (data.stream.maxLength - data.stream.minLength); 
    } else {
        let progress = 400 + (5.0 - event.KillVectorLength) * 150;
        return Math.min(max, Math.max(min, progress));
    }
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
    
    const frequency = computeFrequency(event, data);
    const gain = computeGain(event, data, frequency); 
    
    const xOscillator = audio.ctx.createOscillator();
    xOscillator.type = 'sine';
    xOscillator.frequency.value = frequency;

    const gainNode = audio.ctx.createGain();
    gainNode.gain.value = 0;

    xOscillator.connect(gainNode);
    gainNode.connect(audio.destination);

    let done = false;
    return {
        sound: {
            play() {
                const time = audio.ctx.currentTime;
                
                ramp(gainNode.gain, gain, time, 0.2, 0.5, duration);
                xOscillator.onended = () => { done = true; }
                xOscillator.start(0);
            
                xOscillator.stop(audio.ctx.currentTime + duration);
            },
            stop() {
                if (done)
                    return;
                try {
                    xOscillator.stop();
                } catch (e) { }
            }
        },
        duration: duration * 1000
    };
});