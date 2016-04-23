"use strict";
import audio_loader from 'audio-loader';

/**
 * Helper that adds weapon info to generator.
 */
export default (root, mapper) =>
    (audio, event, data) => {
        const fileName = mapper(audio, event, data);
        return audio_loader(audio.ctx)(fileName).then(buffer => {
            const source = audio.ctx.createBufferSource();
            source.buffer = buffer;
            ambientGain.connect(audio.destination);
            
            return {
                sound: {
                    play() {
                        source.start(0);
                    },
                    stop() {
                        source.stop(0);
                    }
                },
                duration: Infinity
            }
        })
    };