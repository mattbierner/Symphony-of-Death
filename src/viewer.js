"use strict";
import THREE from 'three';
import OrbitControls from './OrbitControls'
import {getWeaponsTable} from './weapons';

const killerColor = new THREE.Color(0xff00ff);

const victimColor = new THREE.Color(0x00ffff);

const topSize = 0.1;
const bottomSize = 0.1;
const sides = 8;

const uniforms = {
    opacity: { type: "f", value: 1.0 }
};

const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById('vertexshader').textContent,
    fragmentShader: document.getElementById('fragmentshader').textContent,
    transparent: true,
    side: THREE.DoubleSide
});

const weapons = getWeaponsTable();


/**
 * 
 */
export class Viewer {
    constructor(canvasId) {
        this._scene = new THREE.Scene();
        this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 800);
        this._camera.position.z = 40;

        this._controls = new OrbitControls(this._camera);
        this._controls.addEventListener('change', this.render.bind(this));
        this._controls.enableDamping = true;
        this._controls.dampingFactor = 0.25;
        this._controls.enableZoom = true;

        this._renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById(canvasId)
        });

        this._raycaster = new THREE.Raycaster();

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        document.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        this.onWindowResize();
    }

    highlightEvent(event) {
        const target = this._scene.getObjectByName(event.Id);
        if (!target)
            return;
        
        const color = target.geometry.attributes.customColor;
        for (let i = 0; i < color.array.length; ++i) {
            new THREE.Color(0xffffff).toArray(color.array, i);
        }
        color.needsUpdate = true;
        this.render();
    }


    onWindowResize() {
        const width = this._renderer.domElement.clientWidth;
        const height = this._renderer.domElement.clientHeight;

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(width, height);
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

        const mesh = new THREE.Mesh(buffergeometry, shaderMaterial);
        var arrow = new THREE.ArrowHelper(killvec.clone().normalize(), victim);

        mesh.rotation.setFromQuaternion(arrow.quaternion);
        mesh.position.addVectors(victim, killvec.multiplyScalar(0.5));
        return mesh;
    }

    addEvent(event) {
        const {KillerWorldLocation, VictimWorldLocation} = event;

        const killer = new THREE.Vector3(KillerWorldLocation.x, KillerWorldLocation.y, KillerWorldLocation.z);
        const victim = new THREE.Vector3(VictimWorldLocation.x, VictimWorldLocation.y, VictimWorldLocation.z);
        const weapon = weapons.get(event.KillerWeaponStockId);

        if (weapon && weapon.Type === 'Gernade' || (event.IsGroundPound || event.IsMelee || event.IsShoulderBash)) {
            const geometry = new THREE.SphereGeometry(0.2, 32, 23);
            const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.add(victim);
            this._scene.add(sphere);
        }// else if (weapon) {
        const path = this._shotPath(killer, victim);
        path.name = event.Id;
        this._scene.add(path);
        //}
        this.animate();
    }

    update() {
        this._controls.update();

        if (!this.mouse || true)
            return;

        this._raycaster.setFromCamera(this.mouse, this._camera);
        const intersects = this._raycaster.intersectObjects(this._scene.children);

        if (intersects.length > 0) {
            const target = intersects[0].object;
            if (target !== this._currentInersection) {
                const color = target.geometry.attributes.customColor;
                for (let i = 0; i < color.array.length; ++i) {
                    new THREE.Color(0xffffff).toArray(color.array, i);
                }
                color.needsUpdate = true;
                this.render();
            }
        } else {

            this._currentInersection = null;
        }
    }

    animate() {
        this.update();
        this.render();
    }

    render() {
        this._renderer.render(this._scene, this._camera);
    }
}