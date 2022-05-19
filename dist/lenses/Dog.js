"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationship = exports.missing = exports.dayBorn = exports.monthBorn = exports.yearBorn = exports.breed = exports.pics = exports.fullName = void 0;
const shonad_1 = require("shonad");
exports.fullName = shonad_1.lens.prop("fullName");
exports.pics = shonad_1.lens.prop("pics");
exports.breed = shonad_1.lens.prop("breed");
exports.yearBorn = shonad_1.lens.prop("yearBorn");
exports.monthBorn = shonad_1.lens.prop("monthBorn");
exports.dayBorn = shonad_1.lens.prop("dayBorn");
exports.missing = shonad_1.lens.prop("missing"); // contentID for bulletin
exports.relationship = shonad_1.lens.prop("relationship");
//# sourceMappingURL=Dog.js.map