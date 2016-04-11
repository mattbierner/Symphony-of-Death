"use strict";

const request = require('request');
const fs = require('fs');

const primary_key = "2dfd3654d7154e27b011fe0a9522fc0a";
const secondary_key = "3a536aaedbe54b70a17c07a58fe659d6";

const matchId = "ac560ffc-4de4-43c1-a0be-17853466350a"

const getMatchFromCache = (id, forceUpdate) =>
    forceUpdate ? Promise.resolve(null) : Promise.resolve(null);

const updateCache = (id, data) => data;

/**
 * Get match data from the serves.
 */
const getMatchFromServer = matchId =>
    new Promise((resolve, reject) =>
        request.get({
            url: `https://www.haloapi.com/stats/h5/matches/${matchId}/events`,
            headers: {
                'Ocp-Apim-Subscription-Key': primary_key
            }
        }, (err, res, body) => {
            if (!err && res.statusCode == 200) {
                try {
                    const info = JSON.parse(body);
                    return info ? resolve(info) : reject("Invalid response format");
                } catch (e) {
                    return reject("Error parsing response");
                }
            }
            return reject(err)
        }));


const getMatchEvents = (id, forceUpdate) =>
    getMatchFromCache(id, forceUpdate)
        .then(cachedMatch =>
            cachedMatch || getMatchFromServer(id).then(matchData =>
                updateCache(id, matchData)));


getMatchFromServer(matchId)
    .then(data => {
        fs.writeFileSync('src/example.json', JSON.stringify(data, null, 4));
        
    })
    .catch(console.error)


