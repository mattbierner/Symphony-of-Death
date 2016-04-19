"use strict";
import audioCtx from './audio_context';
import BufferLoader from './buffer_loader';

const ambientVolume = 0.2;
const ambientFadeIn = 8;

const reverbNode = audioCtx.createReverbFromUrl("./sounds/reverb/TerrysFactoryWarehouse.m4a", function() {
    reverbNode.connect(audioCtx.destination);
});

/**
 * Manages playing sounds
 */
export default class SoundManager {
    constructor(generators) {
        this._playing = new Set();
        this._longPlaying = new Set();
        this._generators = generators || [];
    }
    
    /**
     * Play a sound for a given event.
     */
    play(event, data) {
        const audio = {
            ctx: audioCtx,
            destination: reverbNode
        }
        this._generators.forEach(generator => {
            const {sound, duration} = generator(audio, event, data);
            this._playSound(sound, duration);
        });
    }
    
    /**
     * Play a looping ambient sound.
     */
    playAmbient(file) {
        const ambientGain = audioCtx.createGain();
        ambientGain.gain.value = 0;
        
        const bufferLoader = new BufferLoader(audioCtx, [file], (buffers) => {
            const source = audioCtx.createBufferSource();
            source.buffer = buffers[0];
            source.loop = true;
            source.connect(ambientGain);
            ambientGain.connect(reverbNode);
            source.start();
            
            ambientGain.gain.setValueAtTime(0, audioCtx.currentTime);
            ambientGain.gain.linearRampToValueAtTime(ambientVolume, audioCtx.currentTime + ambientFadeIn);

            this._longPlaying.add(source);
        });
        bufferLoader.load();
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
            }, duration + 1000);
        }
    }
}