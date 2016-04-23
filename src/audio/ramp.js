/**
 * Create a ramp from 0 to value at `start` then back to 0 from `end` to `duration`.
 */
export default (nodeValue, value, time, start, end, duration) => { 
    nodeValue.setValueAtTime(0, time);
    nodeValue.linearRampToValueAtTime(gain, time + duration * start);
    nodeValue.setValueAtTime(value, time + duration * end);
    nodeValue.linearRampToValueAtTime(0, time + duration * 1);
    return nodeValue
};
