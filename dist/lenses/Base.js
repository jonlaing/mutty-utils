"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.image = exports.author = exports.summary = exports.userProp = exports.dog = exports.tags = exports.version = exports.createdMoment = exports.created = exports.id = exports.safeLens = void 0;
const shonad_1 = require("shonad");
const Timestamp_1 = require("./Timestamp");
const safeLens = (fallback, f) => shonad_1.lens.compose(f, shonad_1.lens.optional(fallback));
exports.safeLens = safeLens;
exports.id = shonad_1.lens.prop("id");
exports.created = shonad_1.lens.prop("created");
exports.createdMoment = shonad_1.lens.compose(exports.created, Timestamp_1.momentLens);
exports.version = shonad_1.lens.prop("version");
exports.tags = shonad_1.lens.prop("tags");
exports.dog = shonad_1.lens.prop("dog");
exports.userProp = shonad_1.lens.prop("user");
exports.summary = shonad_1.lens.prop("summary");
exports.author = shonad_1.lens.prop("author");
exports.image = shonad_1.lens.prop("image");
//# sourceMappingURL=Base.js.map