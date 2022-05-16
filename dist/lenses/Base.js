"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.image = exports.author = exports.summary = exports.user = exports.dog = exports.tags = exports.version = exports.createdMoment = exports.created = exports.id = void 0;
const control_1 = require("shonad/control");
const Timestamp_1 = require("./Timestamp");
exports.id = control_1.lens.prop("id");
exports.created = control_1.lens.prop("created");
exports.createdMoment = control_1.lens.compose(exports.created, Timestamp_1.momentLens);
exports.version = control_1.lens.prop("version");
exports.tags = control_1.lens.prop("tags");
exports.dog = control_1.lens.prop("dog");
exports.user = control_1.lens.prop("user");
exports.summary = control_1.lens.prop("summary");
exports.author = control_1.lens.prop("author");
exports.image = control_1.lens.prop("image");
//# sourceMappingURL=Base.js.map