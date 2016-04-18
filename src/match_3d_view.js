"use strict";
import THREE from 'three';

import CopyShader from 'imports?THREE=three!three/examples/js/shaders/CopyShader';
import HorizontalBlurShader from 'imports?THREE=three!three/examples/js/shaders/HorizontalBlurShader';
import VerticalBlurShader from 'imports?THREE=three!three/examples/js/shaders/VerticalBlurShader';
import MaskPass from 'imports?THREE=three!three/examples/js/postprocessing/MaskPass';
import RenderPass from 'imports?THREE=three!three/examples/js/postprocessing/RenderPass';
import ShaderPass from 'imports?THREE=three!three/examples/js/postprocessing/ShaderPass';
import EffectComposer from 'imports?THREE=three!three/examples/js/postprocessing/EffectComposer';

import additive_shader from './3d/shaders/additive';
import default_shader from './3d/shaders/default';
import wave_shader from './3d/shaders/wave';
import * as tube from './3d/tube';

import OrbitControls from './3d/OrbitControls'

import {getWeaponsTable} from './weapons';

const enableGlow = false; 

const killerColor = new THREE.Color(0xff00ff);
const victimColor = new THREE.Color(0x00ffff);

const topSize = 0.1;
const bottomSize = 0.1;
const sides = 8;
const damping = 0.98;

const shaderMaterial = new THREE.ShaderMaterial(wave_shader);

/**
 * Create a plane from two vectors that share an origin.
 */
const planeFromVectors = (r1, r2, origin) => {
    const norm = new THREE.Vector3().crossVectors(r1, r2);
    const le = -norm.dot(origin.clone());
    return new THREE.Plane(norm, le);
};

/**
 * 3D match viewer
 */
export default class Viewer {
    constructor(canvas, container, delegate) {
        this.delegate = delegate;
        this.isMouseDown = false;
        this.container = container;
        
        this.bounds = { x: 40, y: 40, z: 40 };
        
        this._insersecting = new Set();
        this._active = new Set();
        this.mouse = null;
        
        this._raycaster = new THREE.Raycaster();
        this._clock = new THREE.Clock();

        this._scene = new THREE.Scene();

        this.initRenderer(canvas);
        this.initCamera();
        this.initControls();
        this.initComposer();

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        
        document.addEventListener('mousedown', this.onMouseDown.bind(this), false);
        document.addEventListener('mouseup', this.onMouseUp.bind(this), false);
        document.addEventListener('mousemove', this.onMouseMove.bind(this), false);

        //this._addPlanes();
        
        const geometry = new THREE.PlaneGeometry(5, 5);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
        this._plane =    new THREE.Mesh(geometry, material);
      //  this._scene.add(this._plane);
        this.onWindowResize();
        this.animate();
    }
    
    /**
     * Setup the initial renderer.
     */
    initRenderer(canvas) {
        this._renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });
        this._renderer.setClearColor(0xffffff, 0);
    }
    
    /**
     * Setup the initial camera.
     */
    initCamera() {
        const [viewWidth, viewHeight] = this.getViewportSize();
        const aspect = viewWidth / viewHeight;
        this._camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 800);
        this._camera.position.z = 40;
    }
    
    initControls() {
        this._controls = new OrbitControls(this._camera);
        this._controls.enableDamping = true;
        this._controls.dampingFactor = 0.25;
        this._controls.enableZoom = true;
    }
    
    /**
     * Setup the composer.
     */
    initComposer() {
        this._composer = new THREE.EffectComposer(this._renderer);
        this._composer.addPass(new THREE.RenderPass(this._scene, this._camera));

        if (enableGlow) { 
            const effectHorizBlur = new THREE.ShaderPass(THREE.HorizontalBlurShader);
            const effectVertiBlur = new THREE.ShaderPass(THREE.VerticalBlurShader);
            
            const [viewWidth, viewHeight] = this.getViewportSize();
            effectHorizBlur.uniforms["h"].value = 2 /viewWidth;
            effectVertiBlur.uniforms["v"].value = 2 / viewHeight;
            this._composer.addPass(effectHorizBlur);
            this._composer.addPass(effectVertiBlur);
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
     * Get the size of the viewport.
     */
    getViewportSize() {
        const rect = this.container.getBoundingClientRect();
        return [rect.width, rect.height];
    }
    
    _addPlanes() {
        const size = 40;
        for (let p of [new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 1)]) {
            const geometry = new THREE.PlaneGeometry(size, size);
            const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
            const plane = new THREE.GridHelper(size, 5);
            plane.quaternion.setFromAxisAngle(p, Math.PI / 2.0);
            plane.setColors(0xffffff, 0x333333)
            this._scene.add(plane);
        }
    }

    setBounds(bounds) {
        this.bounds = bounds;
        this.goToTopView();
    }

    goToFrontView() {
        this._camera.position.set(0, Math.max(this.bounds.x, this.bounds.z) * 2, 0);
    }

    goToSideView() {
        this._camera.position.set(Math.max(this.bounds.y, this.bounds.z) * 2, 0, 0);
    }

    goToTopView() {
        this._camera.position.set(0, 0, Math.max(this.bounds.x, this.bounds.y) * 2);
    }

    _getObjectForEvent(event) {
        return this._scene.getObjectByName(event.Id);
    }

    showEvent(event) {
        const obj = this._getObjectForEvent(event);
        if (obj) {
            obj.visible = true;
        }
    }

    hideEvent(event) {
        const obj = this._getObjectForEvent(event);
        if (obj) {
            obj.visible = false;
        }
    }

    _drawLine(vec, color) {
        var material = new THREE.LineBasicMaterial({ color: color });
        var geometry = new THREE.Geometry(); 
        geometry.vertices.push( new THREE.Vector3( 0, 0, 0 ), vec );
        return new THREE.Line( geometry, material );
    }

    _highlightTarget(target, mouse, previousMouse) {
        const uniforms = target.material.uniforms;
        if (uniforms && uniforms.wave_strength) {
            uniforms.wave_strength.value = 1.0;
            uniforms.wave_strength.needsUpdate = true;
            
            const killVec = target.userData.killVec;
            if (killVec) {
                this._raycaster.setFromCamera(mouse, this._camera)
                const ray = this._raycaster.ray.direction.clone();
                this._raycaster.setFromCamera(previousMouse, this._camera)
                const ray2 = this._raycaster.ray.direction.clone();

                const dRay = new THREE.Vector3().subVectors(ray, ray2);
                const mag = dRay.length();
                dRay.applyQuaternion(target.quaternion)
                dRay.y = 0;
                dRay.normalize().multiplyScalar(mag);
                
                uniforms.wave_direction.value = dRay;
                uniforms.wave_direction.needsUpdate = true;
            }
            
            this._active.add(target);
            this.delegate.onEventActivate(target.userData.event, {
                velocity: new THREE.Vector2().subVectors(mouse, previousMouse).length()
            });
        }
    }

    showEvent(event) {
        const target = this._scene.getObjectByName(event.Id);
        if (!target)
            return;
        target.visible = true;
    }

    /**
     * Handle window resize events.
     */
    onWindowResize() {
        const [width, height] = this.getViewportSize();
        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(width, height);
        this._composer.setSize(width, height);
        this._composer2.setSize(width, height);
    }

    /**
     * Handle mouse down events.
     */
    onMouseDown(event) {
        if (event.button === THREE.MOUSE.RIGHT) {
            this.isMouseDown = true;
        }
    }
    
    /**
     * Handle mouse up events.
     */
    onMouseUp(event) {
        if (event.button === THREE.MOUSE.RIGHT) {
            this.isMouseDown = false;
        }
    }

    /**
     * Handle mouse move events.
     */
    onMouseMove(event) {
        const [width, height] = this.getViewportSize();

        const previousMouse = this.mouse;
        this.mouse = new THREE.Vector2(
            (event.clientX / width) * 2 - 1,
            -(event.clientY / height) * 2 + 1);
        
        if (this.isMouseDown) {
            this.handleIntersections(this.mouse, previousMouse);
        }
    }

    _shotLine(event, killer, victim) {
        const killvec = new THREE.Vector3().subVectors(killer, victim);
        const height = killvec.length();

        const buffergeometry = new THREE.BufferGeometry();
        const len = Math.max(3, Math.ceil(height / 1.0));
        
        const position = new THREE.Float32Attribute(sides * 6 * 3 * len, 3);
        buffergeometry.addAttribute('position', position)
        
        const wave = new THREE.Float32Attribute(sides * 6 * len, 1);
        buffergeometry.addAttribute('wave', wave)
        
        const customColor = new THREE.Float32Attribute(sides * 6 * 3 * len, 3);
        buffergeometry.addAttribute('customColor', customColor);

        const d = height / len;
        let y = -height / 2;
        let index = 0;
        const dWave = Math.PI / (len - 1) * 1;
        let w = 0;
        let ii = 0;
        for (let i = 0; i < len - 1; ++i) {
            const color = killerColor.clone().lerp(victimColor, i / len);
            const nextColor = killerColor.clone().lerp(victimColor, (i + 1) / len);
            
            tube.createGeometry(index, topSize, bottomSize, y, d, 3, position);
            index = tube.fillData(index, 3, color, nextColor, customColor);
            ii = tube.fillData(ii, 3, Math.sin(w), Math.sin(w + dWave), wave);

            w += dWave;
            y += d;
        }

        const mesh = new THREE.Mesh(buffergeometry, shaderMaterial.clone());
        var arrow = new THREE.ArrowHelper(killvec.clone().normalize(), victim);

        mesh.rotation.setFromQuaternion(arrow.quaternion);
        mesh.position.addVectors(victim, killvec.multiplyScalar(0.5));

        mesh.userData = { event: event, killVec: killvec  };
        return mesh;
    }

    addEvent(event, hidden) {
        const {KillerWorldLocation, VictimWorldLocation} = event;

        const killer = new THREE.Vector3(KillerWorldLocation.x, KillerWorldLocation.y, KillerWorldLocation.z);
        const victim = new THREE.Vector3(VictimWorldLocation.x, VictimWorldLocation.y, VictimWorldLocation.z);
        const killvec = new THREE.Vector3().subVectors(killer, victim);
        const weapon = getWeaponsTable().get(event.KillerWeaponStockId);
        const height = killvec.length();

        let objs = [];
        if ((weapon && weapon.type === 'Grenade') || event.IsMelee) {
            const geometry = new THREE.SphereGeometry(0.2, 32, 23);
            const material = new THREE.MeshBasicMaterial({ color: event.IsMelee ? 0xffff00 : 0xff0000 });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.add(victim);
            objs.push(sphere);
        } else if (weapon) {
            const path = this._shotLine(event, killer, victim);
            /*{
                const geometry = new THREE.SphereGeometry(2, 32, 23);
                const material = new THREE.MeshBasicMaterial({ color: killerColor, transparent: true, opacity: 0.2 });
                const sphere = new THREE.Mesh(geometry, material);
                sphere.position.y = height * 0.5;
                path.add(sphere);
            }
            {
                const geometry = new THREE.SphereGeometry(2, 32, 23);
                const material = new THREE.MeshBasicMaterial({ color: victimColor , transparent: true, opacity: 0.2});
                const sphere = new THREE.Mesh(geometry, material);
                sphere.position.y = height * -0.5;
                path.add(sphere);
            }*/
            objs.push(path);
        }

        for (let obj of objs) {
            obj.name = event.Id;
            obj.visible = !hidden;
            this._scene.add(obj);
        }
    }
    
    /**
     * Handle any objects that mouse intersected with while moving.
     */
    handleIntersections(mouse, previousMouse) {
        const found = this.findMouseIntersections(mouse, previousMouse);
        for (let object of found) {
            if (!this._insersecting.has(object)) 
                this._highlightTarget(object, mouse, previousMouse);
        }
        this._insersecting = found;
    }
    
    /**
     * Find all objects that mouse intersected with while moving.
     */
    findMouseIntersections(mouse, previousMouse) {
        const found = new Set();

        if (!mouse || !previousMouse || previousMouse.equals(mouse))
            return found;
        
        this._raycaster.setFromCamera(previousMouse, this._camera);
        const previousRay = this._raycaster.ray.clone();
        
        this._raycaster.setFromCamera(mouse, this._camera);
        const currentRay = this._raycaster.ray.clone();
        
        const plane = planeFromVectors(previousRay.direction, currentRay.direction, currentRay.origin);
        
        const upperPlane = planeFromVectors(plane.normal, currentRay.direction, currentRay.origin);
        const lowerPlane = planeFromVectors(plane.normal, previousRay.direction, currentRay.origin);

        this._scene.traverse(obj => {
            if (!obj.userData || !obj.userData.event || !obj.visible)
                return;
            
            const intersection = plane.intersectLine(obj.userData.event.ShotLine);
            if (!intersection)
                return;
            
            if (upperPlane.distanceToPoint(intersection) < 0 && lowerPlane.distanceToPoint(intersection) > 0) {
                found.add(obj);
            }
        });
        return found;
    }

    /**
     * Main update function.
     */
    update() {
        const delta = this._clock.getDelta();
        const time = this._clock.getElapsedTime() * 10;
        
        for (let child of this._active) {
            const uniforms = child.material && child.material.uniforms;
            if (uniforms && uniforms.time) {
                uniforms.time.value = time;
                uniforms.time.needsUpdate = true;
            }
            if (uniforms && uniforms.wave_strength) {
                uniforms.wave_strength.value *= damping;
                if (uniforms.wave_strength.value < 0.05)
                    this._active.delete(child);
                uniforms.wave_strength.needsUpdate = true;
            }
        }
        this._controls.update();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.update();
        this.render();
    }

    render() {
        this._composer.render();
        this._composer2.render();
    }
}