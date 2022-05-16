"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationship = exports.missing = exports.dayBorn = exports.monthBorn = exports.yearBorn = exports.breed = exports.pics = exports.fullName = void 0;
const control_1 = require("shonad/control");
exports.fullName = control_1.lens.prop("fullName");
exports.pics = control_1.lens.prop("pics");
exports.breed = control_1.lens.prop("breed");
exports.yearBorn = control_1.lens.prop("yearBorn");
exports.monthBorn = control_1.lens.prop("monthBorn");
exports.dayBorn = control_1.lens.prop("dayBorn");
exports.missing = control_1.lens.prop("missing"); // contentID for bulletin
exports.relationship = control_1.lens.prop("relationship");
//# sourceMappingURL=Dog.js.map