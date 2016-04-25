"use strict";
import THREE from 'three';

import CopyShader from 'imports?THREE=three!three/examples/js/shaders/CopyShader';
import HorizontalBlurShader from 'imports?THREE=three!three/examples/js/shaders/HorizontalBlurShader';
import VerticalBlurShader from 'imports?THREE=three!three/examples/js/shaders/VerticalBlurShader';
import MaskPass from 'imports?THREE=three!three/examples/js/postprocessing/MaskPass';
import RenderPass from 'imports?THREE=three!three/examples/js/postprocessing/RenderPass';
import ShaderPass from 'imports?THREE=three!three/examples/js/postprocessing/ShaderPass';
import EffectComposer from 'imports?THREE=three!three/examples/js/postprocessing/EffectComposer';

import Base3dView from './match_3d_view'


import additive_shader from './3d/shaders/additive';

/**
 * 3D match viewer
 */
export default class Viewer extends Base3dView {
    constructor(canvas, container, delegate) {
        super(canvas, container, delegate);
     
        //this.initComposer();

        this.onWindowResize();
    }

    /**
     * Setup the composer.
     */
    initComposer() {
        this._composer = new THREE.EffectComposer(this._renderer);
        this._composer.addPass(new THREE.RenderPass(this._scene, this._camera));

        if (false) {
            this._effectHorizBlur = new THREE.ShaderPass(THREE.HorizontalBlurShader);
            this._effectVertiBlur = new THREE.ShaderPass(THREE.VerticalBlurShader);

            const [viewWidth, viewHeight] = this._getViewportSize();
            this._effectHorizBlur.uniforms["h"].value = 2 / viewWidth;
            this._effectVertiBlur.uniforms["v"].value = 2 / viewHeight;
            this._composer.addPass(this._effectHorizBlur);
            this._composer.addPass(this._effectVertiBlur);
        }

        //final render pass
        this._composer2 = new THREE.EffectComposer(this._renderer);

        this._composer2.addPass(new THREE.RenderPass(this._scene, this._camera));

        var effectBlend = new THREE.ShaderPass(additive_shader, 'tDiffuse1');
        effectBlend.uniforms['tDiffuse2'].value = this._composer.renderTarget2;
        effectBlend.renderToScreen = true;
        this._composer2.addPass(effectBlend);
    }


    /**
     * Handle window resize events.
     */
    onWindowResize() {
        super.onWindowResize();
        const [width, height] = this._getViewportSize();
        
      /*  const scaling = window.devicePixelRatio ? window.devicePixelRatio : 1;
        const bufferWidth = width * scaling;
        const bufferHeight = height * scaling;
        this._composer.setSize(bufferWidth, bufferHeight);
        this._composer2.setSize(bufferWidth, bufferHeight);*/
    }

    render(delta) {
        this._renderer.render(this._scene, this._camera);
      //  this._composer.render();
       // this._composer2.render();
    }
}