"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.momentLens = void 0;
const shonad_1 = require("shonad");
const shonad_2 = require("shonad");
const moment_1 = __importDefault(require("moment"));
exports.momentLens = shonad_1.lens.lens((m) => shonad_2.maybe.fmap((n) => moment_1.default.unix(n), m), (n, m) => n);
//# sourceMappingURL=Timestamp.js.map