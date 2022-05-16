"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.content = exports.containerType = void 0;
const control_1 = require("shonad/control");
exports.containerType = control_1.lens.prop("type");
exports.content = control_1.lens.or(control_1.lens.prop("bulletin"), control_1.lens.prop("post"));
