"use strict";

/**
 * Manages playing sounds
 */
export default class SoundManager {
    constructor(generators) {
        this._playing = new Set();
        this._generators = generators || [];
    }
    
    play(event) {
        this._generators.forEach(generator => {
            const {sound, duration} = generator(event);
            this._playSound(sound, duration);
        });
    }
    
    /**
     * Stop all playing audio.
     */
    stopAll() {
        for (let x of this._playing)
            x.stop();
        this._playing = new Set();
    }
    
     /**
     * Play a sound
     */
    _playSound(sound, duration) {
        this._playing.add(sound);
        sound.play();
        if (duration) {
            setTimeout(() => {
                sound.stop();
                this._playing.delete(sound);
            }, duration);
        }
    }
}