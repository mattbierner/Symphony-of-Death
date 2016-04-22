"use strict";
const data = require('./data/matches.json');

import * as match from './match';


const matches = Object.keys(data)
    .reduce(
        (map, id) => map.concat(match.createFromFile(id, data[id].file)),
        []);

export default matches;
