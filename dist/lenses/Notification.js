"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.actionType = exports.to = exports.from = exports.notification = void 0;
const control_1 = require("shonad/control");
var notification;
(function (notification) {
    notification.contentID = control_1.lens.prop("contentId");
    notification.contentType = control_1.lens.prop("contentType");
})(notification = exports.notification || (exports.notification = {}));
exports.from = control_1.lens.prop("from");
exports.to = control_1.lens.prop("to");
exports.actionType = control_1.lens.prop("actionType");
exports.read = control_1.lens.prop("read");
//# sourceMappingURL=Notification.js.map