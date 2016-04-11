"use strict";

const request = require('request');
const fs = require('fs');

const primary_key = "2dfd3654d7154e27b011fe0a9522fc0a";
const secondary_key = "3a536aaedbe54b70a17c07a58fe659d6";


const getWeapons = () =>
    new Promise((resolve, reject) =>
        request.get({
            url: 'https://www.haloapi.com/metadata/h5/metadata/weapons',
            headers: {
                'Ocp-Apim-Subscription-Key': primary_key
            },
            gzip: true
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


getWeapons()
    .then(data => {
        fs.writeFileSync('./src/weapons.json', JSON.stringify(data, null, 4));
    })
    .catch(x => console.error(x))


