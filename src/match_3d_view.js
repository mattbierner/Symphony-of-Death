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

import OrbitControls from './OrbitControls'

import {getWeaponsTable} from './weapons';


const killerColor = new THREE.Color(0xff00ff);
const victimColor = new THREE.Color(0x00ffff);

const topSize = 0.1;
const bottomSize = 0.1;
const sides = 8;

/**
 * 3D match viewer
 */
export default class Viewer {
    constructor(canvas) {
    this._raycaster = new THREE.Raycaster();
        this.bounds = { x: 40, y: 40, z: 40 };

        this._scene = new THREE.Scene();

        this.initRenderer(canvas);
        this.initCamera();
        this.initControls();
        this.initComposer();

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        document.addEventListener('mousemove', this.onMouseMove.bind(this), false);

        //this._addPlanes();
        this.onWindowResize();
        this.animate();
    }
    
    initRenderer(canvas) {
        this._renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });
        this._renderer.setClearColor(0xffffff, 0);
    }
    
    initCamera() {
        const aspect = window.innerWidth / window.innerHeight;
        this._camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 800);
        //const d = 20;
        //  this._camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 1000 );
        this._camera.position.z = 40;
    }
    
    initControls() {
        this._controls = new OrbitControls(this._camera);
        this._controls.enableDamping = true;
        this._controls.dampingFactor = 0.25;
        this._controls.enableZoom = true;
    }
    
    initComposer() {

        this._composer = new THREE.EffectComposer(this._renderer);
        this._composer.addPass(new THREE.RenderPass(this._scene, this._camera));

        const effectHorizBlur = new THREE.ShaderPass(THREE.HorizontalBlurShader);
        const effectVertiBlur = new THREE.ShaderPass(THREE.VerticalBlurShader);
        effectHorizBlur.uniforms["h"].value = 2 / window.innerWidth;
        effectVertiBlur.uniforms["v"].value = 2 / window.innerHeight;
        this._composer.addPass(effectHorizBlur);
        this._composer.addPass(effectVertiBlur);

        // prepare the final render's passes
        this._composer2 = new THREE.EffectComposer(this._renderer);

        this._composer2.addPass(new THREE.RenderPass(this._scene, this._camera));

        var effectBlend = new THREE.ShaderPass(additive_shader, 'tDiffuse1');
        effectBlend.uniforms['tDiffuse2'].value = this._composer.renderTarget2;
        effectBlend.renderToScreen = true;
        this._composer2.addPass(effectBlend);
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

    highlightEvent(event) {
        this._highlightTarget(this._getObjectForEvent(event.Id));
    }

    _highlightTarget(target) {
        if (this._currentTarget === target)
            return;

        if (this._currentTarget) {
            const uniforms = this._currentTarget.material.uniforms;
            if (uniforms && uniforms.mul) {
                uniforms.mul.value = 1.0;
                uniforms.mul.needsUpdate = true;
            }
        }

        this._currentTarget = target;
        if (this._currentTarget) {
            const uniforms = this._currentTarget.material.uniforms;
            if (uniforms && uniforms.mul) {
                uniforms.mul.value = 5.0;
                uniforms.mul.needsUpdate = true;
            }
        }
        this.render();
    }

    showEvent(event) {
        const target = this._scene.getObjectByName(event.Id);
        if (!target)
            return;
        target.visible = true;
    }

    onWindowResize() {
        const width = window.innerWidth + 0.0;
        const height = window.innerHeight + 0.0;

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(width, height);
        this._composer.setSize(width, height);
        this._composer2.setSize(width, height);
    }

    onMouseMove(event) {
        this.mouse = new THREE.Vector2(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1);
        this.update();
    }

    _shotPath(killer, victim) {
        const topSize = 0.1;
        const bottomSize = 0.1;
        const sides = 8;

        const killvec = new THREE.Vector3().subVectors(killer, victim);
        const height = killvec.length();

        const buffergeometry = new THREE.BufferGeometry();

        const position = new THREE.Float32Attribute(sides * 6 * 3, 3);
        buffergeometry.addAttribute('position', position)

        const customColor = new THREE.Float32Attribute(sides * 6 * 3, 3);
        buffergeometry.addAttribute('customColor', customColor);

        for (let i = 0, index = 0; i < sides; ++i) {
            let start = ((Math.PI * 2.0) / sides) * i;
            let end = ((Math.PI * 2.0) / sides) * (i + 1);
            let index = i * 6 * position.itemSize;

            new THREE.Vector3(Math.cos(end) * topSize, height / 2, Math.sin(end) * topSize)
                .toArray(position.array, index);
            killerColor.toArray(customColor.array, index);
            index += 3;

            new THREE.Vector3(Math.cos(start) * topSize, height / 2, Math.sin(start) * topSize)
                .toArray(position.array, index);
            killerColor.toArray(customColor.array, index);
            index += 3;

            new THREE.Vector3(Math.cos(start) * bottomSize, -height / 2, Math.sin(start) * bottomSize)
                .toArray(position.array, index);
            victimColor.toArray(customColor.array, index);
            index += 3;

            new THREE.Vector3(Math.cos(start) * bottomSize, -height / 2, Math.sin(start) * bottomSize)
                .toArray(position.array, index);
            victimColor.toArray(customColor.array, index);
            index += 3;

            new THREE.Vector3(Math.cos(end) * bottomSize, -height / 2, Math.sin(end) * bottomSize)
                .toArray(position.array, index);
            victimColor.toArray(customColor.array, index);
            index += 3;

            new THREE.Vector3(Math.cos(end) * topSize, height / 2, Math.sin(end) * topSize)
                .toArray(position.array, index);
            killerColor.toArray(customColor.array, index);
            index += 3;
        }

        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                opacity: { type: 'f', value: 1.0 },
                mul: { type: 'f', value: 1.0 }
            },
            vertexShader: document.getElementById('vertexshader').textContent,
            fragmentShader: document.getElementById('fragmentshader').textContent,
            transparent: true,
            side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(buffergeometry, shaderMaterial);
        var arrow = new THREE.ArrowHelper(killvec.clone().normalize(), victim);

        mesh.rotation.setFromQuaternion(arrow.quaternion);
        mesh.position.addVectors(victim, killvec.multiplyScalar(0.5));

        mesh.userData = { isEvent: true };
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
            const path = this._shotPath(killer, victim);
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

    update() {
        this._controls.update();

        if (!this.mouse)
            return;

        this._raycaster.setFromCamera(this.mouse, this._camera);
        const intersects = this._raycaster.intersectObjects(this._scene.children);

        if (intersects.length > 0) {
            for (let intersect of intersects) {
                var obj = intersect.object;
                if (obj && obj.userData && obj.userData.isEvent) {
                    this._highlightTarget(obj);
                }
            }
        } else {
            // this._highlightTarget(null);
        }
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