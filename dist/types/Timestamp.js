"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = void 0;
const moment_1 = __importDefault(require("moment"));
var Timestamp;
(function (Timestamp) {
    function now() {
        return (0, moment_1.default)(moment_1.default.now()).unix();
    }
    Timestamp.now = now;
})(Timestamp = exports.Timestamp || (exports.Timestamp = {}));
