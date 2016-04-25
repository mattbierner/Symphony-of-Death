"use strict";
import THREE from 'three';

import SPE from 'imports?THREE=three!shader-particle-engine';

import OrbitControls from './3d/OrbitControls'

import {getWeaponsTable} from './data/weapons';

const ResizeSensor = require('imports?this=>window!css-element-queries/src/ResizeSensor');

const dustDensity = 1 / 7500;
const dustMax = 10000;


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
            alpha: true,
            antialias: true
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
                value: [ 0, 0.25, 0 ]
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
    
    /**
     * Handle window resize events.
     */
    onWindowResize() {
        const [width, height] = this._getViewportSize();

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(width, height);
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
        this._renderer.render(this._scene, this._camera);
    }
}