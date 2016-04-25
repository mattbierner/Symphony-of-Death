"use strict";
import THREE from 'three';

import wave_shader from './3d/shaders/wave';
import * as tube from './3d/tube';
import {getWeaponsTable} from './data/weapons';
import Base3dView from './match_3d_view';


const topSize = 0.1;
const bottomSize = 0.1;
const sides = 8;
const damping = 0.98;

const killerColor = new THREE.Color(0xeeeeee);
const victimColor = new THREE.Color(0xeeeeee);

const shaderMaterial = new THREE.ShaderMaterial(wave_shader);


/**
 * 3D match viewer
 */
export default class Viewer extends Base3dView {
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
        if ((weapon && weapon.type !== 'Grenade') && !event.IsMelee) {
            const path = this._shotLine(event, killer, victim);
            objs.push(path);
        }

        for (let obj of objs) {
            obj.name = event.Id;
            obj.visible = !hidden;
            this._scene.add(obj);
        }
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
     * Main update function.
     */
    update(delta) {
        super.update(delta);
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
    }
}