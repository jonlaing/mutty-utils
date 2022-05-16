"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUID = void 0;
const uuid_1 = require("uuid");
var GUID;
(function (GUID) {
    function newGUID() {
        return (0, uuid_1.v4)();
    }
    GUID.newGUID = newGUID;
})(GUID = exports.GUID || (exports.GUID = {}));
//# sourceMappingURL=GUID.js.map