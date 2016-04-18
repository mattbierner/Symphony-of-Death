import reverbjs from './reverb';

const ctx = new (window.AudioContext || window.webkitAudioContext)();
reverbjs.extend(ctx);
export default ctx;