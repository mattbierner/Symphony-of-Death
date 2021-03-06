"use strict";
import THREE from 'three';

export const createGeometry = (index, topSize, bottomSize, y, height, sides, position) => {
    for (let i = 0; i < sides; ++i) {
        let start = ((Math.PI * 2.0) / sides) * i;
        let end = ((Math.PI * 2.0) / sides) * (i + 1);

        new THREE.Vector3(Math.cos(end) * topSize, y + height, Math.sin(end) * topSize)
            .toArray(position.array, index);
        index += 3;

        new THREE.Vector3(Math.cos(start) * topSize, y + height, Math.sin(start) * topSize)
            .toArray(position.array, index);
        index += 3;

        new THREE.Vector3(Math.cos(start) * bottomSize, y, Math.sin(start) * bottomSize)
            .toArray(position.array, index);
        index += 3;

        new THREE.Vector3(Math.cos(start) * bottomSize, y, Math.sin(start) * bottomSize)
            .toArray(position.array, index);
        index += 3;

        new THREE.Vector3(Math.cos(end) * bottomSize, y, Math.sin(end) * bottomSize)
            .toArray(position.array, index);
        index += 3;

        new THREE.Vector3(Math.cos(end) * topSize, y + height, Math.sin(end) * topSize)
            .toArray(position.array, index);
        index += 3;
    }
    return index;
};

const simpleCopy = (element, array, index) =>
    array[index] = element;

const vectorCopy = (element, array, index) =>
    element.toArray(array, index);

export const fillData = (index, sides, topColor, bottomColor, customColor) => {
    const elementSize = customColor.itemSize;
    let copy = elementSize === 1 ? simpleCopy : vectorCopy;
    
    for (let i = 0; i < sides; ++i) {
        copy(bottomColor, customColor.array, index);
        index += elementSize;

        copy(bottomColor, customColor.array, index);
        index += elementSize;

        copy(topColor, customColor.array, index);
        index += elementSize;
        
        copy(topColor, customColor.array, index);
        index += elementSize;

        copy(topColor, customColor.array, index);
        index += elementSize;
        
        copy(bottomColor, customColor.array, index);
        index += elementSize;
    }
    return index;
};