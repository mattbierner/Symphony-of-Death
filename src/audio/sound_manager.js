"use strict";
import audioCtx from './audio_context';
import audio_loader from 'audio-loader';

const ambientVolume = 0.2;
const ambientFadeIn = 8;

const reverbNode = audioCtx.then(ctx =>
    new Promise(resolve => {
        const node = ctx.createReverbFromUrl("./sounds/reverb/TerrysFactoryWarehouse.m4a", function () {
            node.connect(ctx.destination);
            resolve(node);
        });
    }));

/**
 * Manages playing sounds
 */
export default class SoundManager {
    constructor(generators) {
        this._playing = new Set();
        this._longPlaying = new Set();
        this._generators = generators || [];
    }
    
    _getRootCtx(f) {
        audioCtx.then(audioCtx =>
            reverbNode.then(reverbNode => f(audioCtx, reverbNode)));
    }

    /**
     * Play a sound for a given event.
     */
    play(event, data) {
        this._getRootCtx((audioCtx, reverbNode) => {
            const audio = {
                ctx: audioCtx,
                destination: reverbNode
            }
            
            for (let generator of this._generators) {
                let {sound, duration} = generator(audio, event, data);
                this._playSound(sound, duration);
            }
        });
    }

    /**
     * Play a looping ambient sound.
     */
    playAmbient(file) {
        this._getRootCtx((audioCtx, reverbNode) => {
            const ambientGain = audioCtx.createGain();
            ambientGain.gain.value = 0;
            
            audio_loader(audioCtx)(file).then(buffer => {
                const source = audioCtx.createBufferSource();
                source.buffer = buffer;
                source.loop = true;
                source.connect(ambientGain);
                ambientGain.connect(reverbNode);
                source.start(0);

                ambientGain.gain.setValueAtTime(0, audioCtx.currentTime);
                ambientGain.gain.linearRampToValueAtTime(ambientVolume, audioCtx.currentTime + ambientFadeIn);

                this._longPlaying.add(source);
            });
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
            }, duration + 1000);
        }
    }
}