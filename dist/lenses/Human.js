"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recentLocation = exports.recoveryEmail = exports.pausePushNotifs = exports.pushToken = exports.phoneNumber = exports.username = exports.human = void 0;
const shonad_1 = require("shonad");
var human;
(function (human) {
    human.userID = shonad_1.lens.prop("userid");
})(human = exports.human || (exports.human = {}));
exports.username = shonad_1.lens.prop("username");
exports.phoneNumber = shonad_1.lens.prop("phoneNumber");
exports.pushToken = shonad_1.lens.prop("pushToken");
exports.pausePushNotifs = shonad_1.lens.prop("pausePushNotifs");
exports.recoveryEmail = shonad_1.lens.prop("recoveryEmail");
exports.recentLocation = shonad_1.lens.prop("recentLocation");
//# sourceMappingURL=Human.js.map