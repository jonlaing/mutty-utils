"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.actionType = exports.to = exports.from = exports.notification = void 0;
const shonad_1 = require("shonad");
var notification;
(function (notification) {
    notification.contentID = shonad_1.lens.prop("contentId");
    notification.contentType = shonad_1.lens.prop("contentType");
})(notification = exports.notification || (exports.notification = {}));
exports.from = shonad_1.lens.prop("from");
exports.to = shonad_1.lens.prop("to");
exports.actionType = shonad_1.lens.prop("actionType");
exports.read = shonad_1.lens.prop("read");
//# sourceMappingURL=Notification.js.map