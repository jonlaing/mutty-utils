"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newGUID = void 0;
const uuid_1 = require("uuid");
function newGUID() {
    return (0, uuid_1.v4)();
}
exports.newGUID = newGUID;
