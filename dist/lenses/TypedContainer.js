"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.content = exports.containerType = void 0;
const shonad_1 = require("shonad");
exports.containerType = shonad_1.lens.prop("type");
exports.content = shonad_1.lens.or(shonad_1.lens.prop("bulletin"), shonad_1.lens.prop("post"));
//# sourceMappingURL=TypedContainer.js.map