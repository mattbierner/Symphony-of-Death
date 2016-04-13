"use strict";

export const clamp = (min, max, value) =>
    Math.max(min, Math.min(max, value));

export const sample = (min, max, value) =>
    clamp(min, max, min + (max - min) * value);
