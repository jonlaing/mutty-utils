"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.block = exports.status = exports.friendshipID = exports.dog2 = exports.dog1 = void 0;
const control_1 = require("shonad/control");
const data_1 = require("shonad/data");
exports.dog1 = control_1.lens.prop("dog1");
exports.dog2 = control_1.lens.prop("dog2");
exports.friendshipID = control_1.lens.prop("friendshipId");
exports.status = control_1.lens.prop("status");
// return nothing if block wasn't set
exports.block = control_1.lens.lens((a) => data_1.maybe.bind(data_1.dict.get("block", a), (b) => b === "" ? data_1.maybe.nothing() : data_1.maybe.just(b)), (mv, a) => data_1.maybe.fromMaybe(a, data_1.maybe.fmap((v) => data_1.dict.set("block", v, a), mv)));
