"use strict";
const Wad = require('imports?this=>window!web-audio-daw');

/**
 * Helper that adds weapon info to generator.
 */
export default (root, mapper) =>
    (audioCtx, event, data) => {
        const fileName = mapper(audioCtx, event, data);
        return {
            sound: new Wad({ source: root + fileName })
        };
    };