"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recentLocation = exports.recoveryEmail = exports.pausePushNotifs = exports.pushToken = exports.phoneNumber = exports.username = exports.human = void 0;
const control_1 = require("shonad/control");
var human;
(function (human) {
    human.userID = control_1.lens.prop("userid");
})(human = exports.human || (exports.human = {}));
exports.username = control_1.lens.prop("username");
exports.phoneNumber = control_1.lens.prop("phoneNumber");
exports.pushToken = control_1.lens.prop("pushToken");
exports.pausePushNotifs = control_1.lens.prop("pausePushNotifs");
exports.recoveryEmail = control_1.lens.prop("recoveryEmail");
exports.recentLocation = control_1.lens.prop("recentLocation");
//# sourceMappingURL=Human.js.map