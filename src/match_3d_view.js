"use strict";
import THREE from 'three';

import CopyShader from 'imports?THREE=three!three/examples/js/shaders/CopyShader';
import HorizontalBlurShader from 'imports?THREE=three!three/examples/js/shaders/HorizontalBlurShader';
import VerticalBlurShader from 'imports?THREE=three!three/examples/js/shaders/VerticalBlurShader';
import MaskPass from 'imports?THREE=three!three/examples/js/postprocessing/MaskPass';
import RenderPass from 'imports?THREE=three!three/examples/js/postprocessing/RenderPass';
import ShaderPass from 'imports?THREE=three!three/examples/js/postprocessing/ShaderPass';
import EffectComposer from 'imports?THREE=three!three/examples/js/postprocessing/EffectComposer';

import SPE from 'imports?THREE=three!shader-particle-engine';

import additive_shader from './3d/shaders/additive';
import default_shader from './3d/shaders/default';
import wave_shader from './3d/shaders/wave';
import * as tube from './3d/tube';

import OrbitControls from './3d/OrbitControls'

import {getWeaponsTable} from './data/weapons';

const ResizeSensor = require('imports?this=>window!css-element-queries/src/ResizeSensor');


const enableGlow = false;

const dustDensity = 1 / 10000;
const dustMax = 10000;

const topSize = 0.1;
const bottomSize = 0.1;
const sides = 8;
const damping = 0.98;

const killerColor = new THREE.Color(0x777777);
const victimColor = new THREE.Color(0x777777);

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
        this.initControls(container);
        this.initComposer();

        new ResizeSensor(container, this.onWindowResize.bind(this));
        this.onWindowResize();
        
        this.animate = () => this.animateImpl();
        this.animateImpl();
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
        this._renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
    }

    /**
     * Setup the initial camera.
     */
    initCamera() {
        const [viewWidth, viewHeight] = this._getViewportSize();
        const aspect = viewWidth / viewHeight;
        this._camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 800);
        this._camera.position.z = 40;
    }

    /**
     * Setup the controls.
     */
    initControls(container) {
        this._controls = new OrbitControls(this._camera, container);
        this._controls.enableDamping = true;
        this._controls.dampingFactor = 0.25;
        this._controls.enableZoom = true;
        
        container.addEventListener('mousedown', this.onMouseDown.bind(this), false);
        container.addEventListener('mouseup', this.onMouseUp.bind(this), false);
        container.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        container.addEventListener('touchstart', this.onTouchStart.bind(this), false);
        container.addEventListener('touchstop', this.onTouchStop.bind(this), false);
        container.addEventListener('touchmove', this.onTouchMove.bind(this), false);
    }

    /**
     * Setup the composer.
     */
    initComposer() {
        this._composer = new THREE.EffectComposer(this._renderer);
        this._composer.addPass(new THREE.RenderPass(this._scene, this._camera));

        if (enableGlow) {
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
     * Create a particle system to render the dust.
     */
    _createDustEmitter(bounds) {
        if (this._particleGroup) {
            this._particleGroup.removeEmitter(this._emitter);
            this._scene.remove(this._particleGroup.mesh);
        }
        
        this._particleGroup = new SPE.Group({
            texture: {
                value: THREE.ImageUtils.loadTexture('./images/smokeparticle.png')
            },
            fog: true,
            scale: 200,
            depthWrite: false
        });
        
        const volume = Math.pow(bounds * 2, 3);
        const numberDusts = Math.min(dustMax, Math.floor(volume * dustDensity));
        
        this._emitter = new SPE.Emitter({
            type: SPE.distributions.BOX,
            maxAge: {
                value: 15,
            },
            opacity: {
                value: [ 0, 0.15, 0 ]
            },
            position: {
                value: new THREE.Vector3(0, 0, 0),
                spread: new THREE.Vector3(bounds, bounds, bounds),
                randomise: true
            },
            velocity: {
                value: new THREE.Vector3(0, -0.05, 0),
                randomise: true
            },
            wiggle: {
                spread: 10
            },
            particleCount: numberDusts
        });
        this._particleGroup.addEmitter(this._emitter);
        this._scene.add(this._particleGroup.mesh);
    }

    /**
     * Get the size of the viewport.
     */
    _getViewportSize() {
        const rect = this.container.getBoundingClientRect();
        return [rect.width, rect.height];
    }

    /**
     * Set the bounds of the scene being rendered.
     */
    setBounds(bounds) {
        this.bounds = bounds;
        const maxSide = Math.max(this.bounds.x, this.bounds.y, this.bounds.z);
        this._controls.maxDistance = maxSide * 2 * 1.5;
        this._controls.maxPan = maxSide * 2;
        this._createDustEmitter(this._controls.maxDistance);
        this.goToTopView();
    }

    _getDistanceForView(a, b) {
        const padding = 1.1;
        return Math.max(a, b) * 2 * padding;
    }

    goToFrontView() {
        this._controls.reset();
        this._camera.position.set(0, this._getDistanceForView(this.bounds.x, this.bounds.z), 0);
    }

    goToSideView() {
        this._controls.reset();
        this._camera.position.set(this._getDistanceForView(this.bounds.y, this.bounds.z), 0, 0);
    }

    goToTopView() {
        this._controls.reset();
        this._camera.position.set(0, 0, this._getDistanceForView(this.bounds.x, this.bounds.y));
    }
    
    /**
     * Show the object for event.
     */
    showEvent(event) {
        const obj = this._getObjectForEvent(event);
        if (obj) {
            obj.visible = true;
        }
    }
    
    /**
     * Hide the object for `event`.
     */
    hideEvent(event) {
        const obj = this._getObjectForEvent(event);
        if (obj) {
            obj.visible = false;
        }
    }

    _getObjectForEvent(event) {
        return this._scene.getObjectByName(event.Id);
    }

    _drawLine(vec, color) {
        var material = new THREE.LineBasicMaterial({ color: color });
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(0, 0, 0), vec);
        return new THREE.Line(geometry, material);
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

    /**
     * Handle window resize events.
     */
    onWindowResize() {
        const [width, height] = this._getViewportSize();

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(width, height);
        
        const scaling = window.devicePixelRatio ? window.devicePixelRatio : 1;
        const bufferWidth = width * scaling;
        const bufferHeight = height * scaling;
        this._composer.setSize(bufferWidth, bufferHeight);
        this._composer2.setSize(bufferWidth, bufferHeight);
    }

    _setLastPosition(x, y) {
        const [width, height] = this._getViewportSize();

        this.mouse = new THREE.Vector2((x / width) * 2 - 1, -(y / height) * 2 + 1);
    }
    
    /**
     * Handle mouse down events.
     */
    onMouseDown(event) {
        if (event.button === THREE.MOUSE.LEFT) {
            this.isMouseDown = true;
            this._setLastPosition(event.clientX, event.clientY);
        }
    }
    
    /**
     * Handle touch start events
     */
    onTouchStart(event) {
        if (event.touches.length === 1) {
            this.isMouseDown = true;
            this._setLastPosition(event.touches[0].pageX, event.touches[0].pageY);
        } else {
            this.isMouseDown = false;
        }
    }

    /**
     * Handle mouse up events.
     */
    onMouseUp(event) {
        if (event.button === THREE.MOUSE.LEFT) {
            this.isMouseDown = false;
        }
    }
    
    /**
     * Handle touch end events
     */
    onTouchStop(event) {
        this.isMouseDown = false;
    }

    /**
     * Handle mouse move events.
     */
    onMouseMove(event) {
        this._onMove(event.clientX, event.clientY);
    }
    
    /**
     * Handle touch move events
     */
    onTouchMove(event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.touches.length === 1) {
            this._onMove(event.touches[0].pageX, event.touches[0].pageY);
        }
    }
    
    _onMove(x, y) {
        const previousMouse = this.mouse;
        this._setLastPosition(x, y);

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

        mesh.userData = { event: event, killVec: killvec };
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
            if (false) {
                const geometry = new THREE.SphereGeometry(0.2, 32, 23);
                const material = new THREE.MeshBasicMaterial({ color: event.IsMelee ? 0xffff00 : 0xff0000 });
                const sphere = new THREE.Mesh(geometry, material);
                sphere.position.add(victim);
                sphere.userData = { event: event };
                objs.push(sphere);
            }
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
     * 
     */
    clearEvents() {
        var toRemove = [];
        this._scene.traverse(obj => {
            if (!obj.userData || !obj.userData.event)
                return;
            toRemove.push(obj);
        });
        toRemove.forEach(obj => this._scene.remove(obj));
        this._active = new Set();
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
    update(delta) {
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

    animateImpl() {
        const delta = this._clock.getDelta();
        
        this.update(delta);
        if (this._particleGroup)
            this._particleGroup.tick(delta);
        this.render(delta);
        requestAnimationFrame(this.animate);
    }

    render(delta) {
        this._composer.render();
        this._composer2.render();
    }
}