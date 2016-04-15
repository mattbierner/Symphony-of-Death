"use strict";
const THREE = require('three');

export default {
    uniforms: {
        time: { type: 'f', value: 0.0 },
        wave_strength: { type: 'f', value: 0.0 }
    },
    vertexShader: `
        uniform float time;
        uniform float wave_strength;
        
        attribute vec3 customColor;
        attribute float wave;
        
        varying vec3 vColor;

        void main() {
            vColor = customColor;
            
            float w = sin(time * 2.0) * wave / 10.0 * wave_strength;
            vec3 p =  position + vec3(w, 0, w);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
    `,
    fragmentShader:`
        varying vec3 vColor;
        
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `,
    transparent: true,
    side: THREE.DoubleSide
};