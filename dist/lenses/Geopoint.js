"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longitude = exports.latitude = void 0;
const control_1 = require("shonad/control");
exports.latitude = control_1.lens.prop("latitude");
exports.longitude = control_1.lens.prop("longitude");
