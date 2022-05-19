"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.stsTokenManager = exports.firstProviderData = exports.providerData = exports.enrolledFactors = exports.multiFactor = exports.providerID = exports.isNewUser = exports.userRecord = exports.operationType = exports.credential = exports.additionalUserInfo = void 0;
const control_1 = require("shonad/control");
exports.additionalUserInfo = control_1.lens.prop("additionalUserInfo");
exports.credential = control_1.lens.prop("credential");
exports.operationType = control_1.lens.prop("operationType");
exports.userRecord = control_1.lens.prop("user");
exports.isNewUser = control_1.lens.compose(exports.additionalUserInfo, control_1.lens.optional({}), control_1.lens.prop("isNewUser"));
exports.providerID = control_1.lens.compose(exports.additionalUserInfo, control_1.lens.optional({}), control_1.lens.prop("providerId"));
exports.multiFactor = control_1.lens.compose(exports.userRecord, control_1.lens.optional({}), control_1.lens.prop("multiFactor"));
exports.enrolledFactors = control_1.lens.compose(exports.multiFactor, control_1.lens.optional({}), control_1.lens.prop("enrolledFactors"));
exports.providerData = control_1.lens.compose(exports.userRecord, control_1.lens.optional({}), control_1.lens.prop("providerData"));
// just gunna get the first one
exports.firstProviderData = control_1.lens.compose(exports.providerData, control_1.lens.optional([]), control_1.lens.head);
exports.stsTokenManager = control_1.lens.compose(exports.userRecord, control_1.lens.optional({}), control_1.lens.prop("stsTokenManager"));
const maybeUser = control_1.lens.compose(exports.userRecord, control_1.lens.optional({}));
var user;
(function (user) {
    user.appName = control_1.lens.compose(maybeUser, control_1.lens.prop("appName"));
    user.authDomain = control_1.lens.compose(maybeUser, control_1.lens.prop("authDomain"));
    user.createdAt = control_1.lens.compose(maybeUser, control_1.lens.prop("createdAt"));
    user.displayName = control_1.lens.compose(maybeUser, control_1.lens.prop("displayName"));
    user.email = control_1.lens.compose(maybeUser, control_1.lens.prop("email"));
    user.emailVerified = control_1.lens.compose(maybeUser, control_1.lens.prop("emailVerified"));
    user.isAnonymous = control_1.lens.compose(maybeUser, control_1.lens.prop("isAnonymous"));
    user.lastLoginAt = control_1.lens.compose(maybeUser, control_1.lens.prop("lastLoginAt"));
    user.phoneNumber = control_1.lens.compose(maybeUser, control_1.lens.prop("phoneNumber"));
    user.photoURL = control_1.lens.compose(maybeUser, control_1.lens.prop("photoURL"));
    user.redirectEventId = control_1.lens.compose(maybeUser, control_1.lens.prop("redirectEventId"));
    user.tenantID = control_1.lens.compose(maybeUser, control_1.lens.prop("tenantId"));
    user.uid = control_1.lens.compose(maybeUser, control_1.lens.prop("uid"));
})(user = exports.user || (exports.user = {}));
//# sourceMappingURL=User.js.map