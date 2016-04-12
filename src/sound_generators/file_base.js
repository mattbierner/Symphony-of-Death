"use strict";
const Wad = require('imports?this=>window!web-audio-daw');

/**
 * Helper that adds weapon info to generator.
 */
export default (root, mapper) =>
    (event) => {
        const fileName = mapper(event);
        return {
            sound: new Wad({ source: root + fileName })
        };
    };