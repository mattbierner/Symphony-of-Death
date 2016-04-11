"use strict";

const base = '/sounds/weird-male-screams'

const getSoundFileName = (weaponName) => {
    switch (weaponName) {
    case 'spartan': return '79__plagasul__long-scream.wav';
    case 'magnum': return '70__plagasul__eh.wav';
    case 'weapon-splinter-grenade': return '69__plagasul__ohm-loko.wav'
    default: return '85__plagasul__jeeh.wav'
    }
};

export default (weaponName) => {
    const file = getSoundFileName(weaponName);
    return file && `${base}/${file}`;
};