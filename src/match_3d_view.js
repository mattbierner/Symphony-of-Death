"use strict";
import THREE from 'three';
import OrbitControls from './OrbitControls'
import {getWeaponsTable} from './weapons';

const killerColor = new THREE.Color(0xff00ff);
const victimColor = new THREE.Color(0x00ffff);

const topSize = 0.1;
const bottomSize = 0.1;
const sides = 8;

const weapons = getWeaponsTable();

/**
 * 3D match viewer
 */
export default class Viewer {
    constructor(canvas) {
        const aspect = window.innerWidth / window.innerHeight;
        
        this._scene = new THREE.Scene();
        this._camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 800);
        //const d = 20;
      //  this._camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, 1, 1000 );

        this._camera.position.z = 40;

        this._controls = new OrbitControls(this._camera);
        this._controls.addEventListener('change', this.render.bind(this));
        this._controls.enableDamping = true;
        this._controls.dampingFactor = 0.25;
        this._controls.enableZoom = true;

        this._renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });
        this._renderer.setClearColor(0xffffff, 0);

        this._raycaster = new THREE.Raycaster();

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        document.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        this.onWindowResize();
    }

    goToFrontView() {
        this._camera.position.set(40, 40, 40);
        this.animate();
    }
    
    goToSideView() {
        this._camera.position.set(40, 0, 0);
        this.animate();
    }
    
    goToTopView() {
        this._camera.position.set(0, 0, 40);
        this.animate();
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
        this.animate();
    }

    onWindowResize() {
        const width = window.innerWidth + 0.0;
        const height = window.innerHeight + 0.0;

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(width, height);
        
        this.render();
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
        const weapon = weapons.get(event.KillerWeaponStockId);

        let object;
        if (weapon && weapon.Type === 'Gernade' || (event.IsGroundPound || event.IsMelee || event.IsShoulderBash)) {
            const geometry = new THREE.SphereGeometry(0.2, 32, 23);
            const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.add(victim);
            object = sphere;
        } else if (weapon) {
            object = this._shotPath(killer, victim);
        }
        
        if (object) {
            object.name = event.Id;
            object.visible = !hidden;
            this._scene.add(object);
            if (!hidden)
                this.animate();
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
        this.update();
        this.render();
    }

    render() {
        this._renderer.render(this._scene, this._camera);
    }
}