"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.momentLens = void 0;
const control_1 = require("shonad/control");
const data_1 = require("shonad/data");
const moment_1 = __importDefault(require("moment"));
exports.momentLens = control_1.lens.lens((m) => data_1.maybe.fmap((n) => moment_1.default.unix(n), m), (n, m) => n);
