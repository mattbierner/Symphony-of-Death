"use strict";
import THREE from 'three';
import OrbitControls from './OrbitControls'
import {getWeaponsTable} from './weapons';

const killerColor = new THREE.Color(0xff00ff);

const victimColor = new THREE.Color(0x00ffff);

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
            (event.clientY / window.innerHeight) * 2 + 1);
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

    drawEvents(events) {
        const killerColor = new THREE.Color(0xff00ff);
        const victimColor = new THREE.Color(0x00ffff);

        const topSize = 0.1;
        const bottomSize = 0.1;
        const sides = 8;

        for (let i = 0, len = events.length; i < len; ++i) {
            const event = events[i];
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
                this._scene.add(this._shotPath(killer, victim));
            //}
        }

        this.animate();
    }

    update() {
        this._controls.update();

        if (!this.mouse)
            return;

        this._raycaster.setFromCamera(this.mouse, this._camera);
        var intersects = this._raycaster.intersectObjects(this._scene.children);

        // INTERSECTED = the object in the scene currently closest to the camera 
        //		and intersected by the Ray projected from the mouse position 	

        // if there is one (or more) intersections
        if (intersects.length > 0) {
            const target = intersects[0].object;
            // if the closest object intersected is not the currently stored intersection object
            if (target != INTERSECTED) {
                // restore previous intersection object (if it exists) to its original color
                if (INTERSECTED)
                    INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
                // store reference to closest object as current intersection object
                INTERSECTED = intersects[0].object;
                // store color of closest object (for later restoration)
                // INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
                // set a new color for closest object
                // INTERSECTED.material.color.setHex(0xffff00);

                /* const color = target.geometry.attributes.customColor;
                 for (var i = 0; i < 100; ++i) {
                     new THREE.Color(0xffffff).toArray(color.array, i * color.itemSize);
                 }
                 color.needsUpdate = true;*/

            }
        }
        else // there are no intersections
        {
            // restore previous intersection object (if it exists) to its original color
            //if (INTERSECTED)
            //   INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
            // remove previous intersection object reference
            //     by setting current intersection object to "nothing"
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