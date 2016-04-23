"use strict";
const data = require('./matches.json');

import * as match from './match';


const matches = Object.keys(data)
    .reduce(
        (map, id) =>
            map.concat({
                id: id,
                name: data[id].name,
                match: match.createFromFile(id, data[id].file)
            }),
        []);

export default matches;
