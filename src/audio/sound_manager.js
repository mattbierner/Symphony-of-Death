"use strict";
import audioCtx from './audio_context';
import audio_loader from 'audio-loader';

const ambientVolume = 0.2;
const ambientFadeIn = 8;

/**
 * Manages playing sounds.
 */
export default class SoundManager {
    constructor(generators) {
        this._playing = new Set();
        this._longPlaying = new Set();
        this._generators = generators || [];
    }

    /**
     * Force initilize the context.
     */
    init() {
        if (!this._root) {
            _ensureRootCtx();
        }
        return this._root.then(() => this);
    }

    _ensureRootCtx() {
        if (!this._root) {
            this._root = audioCtx.then(ctx =>
                new Promise(resolve => {
                    const node = ctx.createReverbFromUrl("./sounds/reverb/TerrysFactoryWarehouse.m4a", () => {
                        node.connect(ctx.destination);
                        resolve({ ctx: ctx, destination: node });
                    });
                }));
        }
        return this._root;
    }

    /**
     * Get the root audio target.
     */
    _getRootCtx(f) {
        this._ensureRootCtx(({ctx, destination}) => f(ctx, destination));
    }

    /**
     * Play a sound for a given event.
     */
    play(event, data) {
        this._getRootCtx((audioCtx, destination) => {
            const audio = {
                ctx: audioCtx,
                destination: destination
            };

            for (let generator of this._generators) {
                generator(audio, event, data)
                    .then(({sound, duration}) => this._playSound(sound, duration));
            }
        });
    }

    /**
     * Play a looping ambient sound.
     */
    playAmbient(file) {
        this._getRootCtx((audioCtx, destination) => {
            const ambientGain = audioCtx.createGain();
            ambientGain.gain.value = 0;

            audio_loader(audioCtx)(file).then(buffer => {
                const source = audioCtx.createBufferSource();
                source.buffer = buffer;
                source.loop = true;
                source.connect(ambientGain);
                ambientGain.connect(destination);
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