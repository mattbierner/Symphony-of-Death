"use strict";
const THREE = require('three');

export default {
    uniforms: {
        opacity: { type: 'f', value: 1.0 },
        mul: { type: 'f', value: 1.0 }
    },
    vertexShader: `
        attribute vec3 customColor;

        varying vec3 vColor;
        
        void main() {
            vColor = customColor;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader:`
        uniform float opacity;
        uniform float mul;
        
        varying vec3 vColor;
        
        void main() {
            gl_FragColor = vec4(vColor * mul, opacity);
        }
    `,
    transparent: true,
    side: THREE.DoubleSide
};