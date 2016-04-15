"use strict";
import file_base from './combinators/file'
import weapon_base from './combinators/weapon'

const sounds = ["65__plagasul__cjipie.wav", "66__plagasul__indios.wav", "67__plagasul__indios2.wav", "68__plagasul__indios3.wav", "69__plagasul__ohm-loko.wav", "70__plagasul__eh.wav", "71__plagasul__hruuhb.wav", "72__plagasul__houb.wav", "73__plagasul__houu.wav", "74__plagasul__jah.wav", "75__plagasul__jhuee.wav", "76__plagasul__joooaah.wav", "77__plagasul__juob.wav", "78__plagasul__jueb.wav", "79__plagasul__long-scream.wav", "80__plagasul__oaaaahmmm.wav", "81__plagasul__uehea.wav", "82__plagasul__uhraa.wav", "83__plagasul__uoh.wav", "84__plagasul__uueh.wav", "85__plagasul__jeeh.wav"];

export default file_base('/sounds/weird-male-screams/', weapon_base(weapon => {
    return sounds[Math.floor(Math.random() * sounds.length)];
    
    switch (weapon && weapon.name) {
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

    default: return '85__plagasul__jeeh.wav';
    }
}));