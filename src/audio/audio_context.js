import reverbjs from './reverb';

let r;
let ctx;

export default new Promise((resolve, reject) => {
    r = resolve;
});

export const init = () => {
    if (ctx)
        return ctx;
        
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    reverbjs.extend(ctx);

    var oscillator = ctx.createOscillator();
    oscillator.frequency.value = 1;
    oscillator.connect(ctx.destination);
    oscillator.start(0);
    oscillator.stop(0);
    r(ctx);
    return ctx;
};