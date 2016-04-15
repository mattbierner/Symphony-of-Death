"use strict";
const THREE = require('three');

export default {
    uniforms: {
        time: { type: 'f', value: 0.0 },
        wave_strength: { type: 'f', value: 0.0 },
        wave_direction: { type: 'v3', value: new THREE.Vector3(1, 1, 1) }
    },
    vertexShader: `
        uniform float time;
        uniform float wave_strength;
        uniform vec3 wave_direction;

        attribute vec3 customColor;
        attribute float wave;
        
        varying vec3 vColor;

        void main() {
            const float scale = 5.0;
            
            vColor = customColor;
            
            float w = sin(time * 2.0) * wave * scale * wave_strength;
            vec3 p =  position + vec3(w * wave_direction.x, 0, w * wave_direction.z);
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