"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flagType = exports.flag = void 0;
const control_1 = require("shonad/control");
var flag;
(function (flag) {
    flag.userID = control_1.lens.prop("userId");
    flag.contentID = control_1.lens.prop("contentId");
    flag.contentType = control_1.lens.prop("contentType");
})(flag = exports.flag || (exports.flag = {}));
exports.flagType = control_1.lens.prop("type");
//# sourceMappingURL=Flag.js.map