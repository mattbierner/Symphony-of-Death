"use strict";

const base = '/sounds/weird-male-screams'

const getSoundFileName = (weaponName) => {
    switch (weaponName) {
    case 'spartan': return '79__plagasul__long-scream.wav';
    case 'magnum': return '70__plagasul__eh.wav';
    case 'weapon-splinter-grenade': return '69__plagasul__ohm-loko.wav'
    
    case "assault-rifle":
    case "ball":
    case "banshee":
    case "battle-rifle":
    case "beam-rifle":
    case "binary-rifle":
    case "boltshot":
    case "carbine":
    case "chaingun-turret":
    case "dmr":
    case "energy-sword":
    case "environmental-explosives":
    case "flagnum":
    case "forerunner-beam-turret":
    case "frag-grenade":
    case "fuel-rod-cannon":
    case "gauss-turret":
    case "ghost":
    case "gravity-hammer":
    case "halo-2-battle-rifle":
    case "halo-one-pistol":
    case "hydra-launcher":
    case "incineration-cannon":
    case "lightrifle":
    case "magnum":
    case "mantis":
    case "mongoose":
    case "needler":
    case "phaeton":
    case "phantom-chin-gun":
    case "phantom":
    case "plasma-caster":
    case "plasma-grenade":
    case "plasma-pistol":
    case "railgun":
    case "rocket-launcher":
    case "rocket-pod-turret":
    case "saw":
    case "scattershot":
    case "scorpion-anti-infantry-turret":
    case "scorpion":
    case "shade-aa-turret":
    case "shade-plasma-turret":
    case "shotgun":
    case "smg":
    case "sniper-rifle":
    case "spartan-laser":
    case "spartan":
    case "spirit-chin-gun":
    case "splinter-grenade":
    case "splinter-turret":
    case "spnkr-rocket-launcher":
    case "storm-rifle":
    case "suppressor":
    case "unsc-auto-turret":
    case "warthog":
    case "wraith-anti-infantry-turret":
    case "wraith":

    default: return '85__plagasul__jeeh.wav'
    }
};

export default (weaponName) => {
    const file = getSoundFileName(weaponName);
    return file && `${base}/${file}`;
};