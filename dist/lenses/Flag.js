"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flagType = exports.flag = void 0;
const shonad_1 = require("shonad");
var flag;
(function (flag) {
    flag.userID = shonad_1.lens.prop("userId");
    flag.contentID = shonad_1.lens.prop("contentId");
    flag.contentType = shonad_1.lens.prop("contentType");
})(flag = exports.flag || (exports.flag = {}));
exports.flagType = shonad_1.lens.prop("type");
//# sourceMappingURL=Flag.js.map