"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLensHelper = exports.user = exports.stsTokenManager = exports.firstProviderData = exports.providerData = exports.enrolledFactors = exports.multiFactor = exports.providerID = exports.isNewUser = exports.userRecord = exports.operationType = exports.credential = exports.additionalUserInfo = void 0;
const shonad_1 = require("shonad");
const types_1 = require("../types");
exports.additionalUserInfo = shonad_1.lens.prop("additionalUserInfo");
exports.credential = shonad_1.lens.prop("credential");
exports.operationType = shonad_1.lens.prop("operationType");
exports.userRecord = shonad_1.lens.prop("user");
exports.isNewUser = shonad_1.lens.compose(exports.additionalUserInfo, shonad_1.lens.optional({}), shonad_1.lens.prop("isNewUser"));
exports.providerID = shonad_1.lens.compose(exports.additionalUserInfo, shonad_1.lens.optional({}), shonad_1.lens.prop("providerId"));
exports.multiFactor = shonad_1.lens.compose(exports.userRecord, shonad_1.lens.optional({}), shonad_1.lens.prop("multiFactor"));
exports.enrolledFactors = shonad_1.lens.compose(exports.multiFactor, shonad_1.lens.optional({}), shonad_1.lens.prop("enrolledFactors"));
exports.providerData = shonad_1.lens.compose(exports.userRecord, shonad_1.lens.optional({}), shonad_1.lens.prop("providerData"));
// just gunna get the first one
exports.firstProviderData = shonad_1.lens.compose(exports.providerData, shonad_1.lens.optional([]), shonad_1.lens.head);
exports.stsTokenManager = shonad_1.lens.compose(exports.userRecord, shonad_1.lens.optional({}), shonad_1.lens.prop("stsTokenManager"));
const maybeUser = shonad_1.lens.compose(exports.userRecord, shonad_1.lens.optional({}));
var user;
(function (user) {
    user.appName = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("appName"));
    user.authDomain = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("authDomain"));
    user.createdAt = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("createdAt"));
    user.displayName = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("displayName"));
    user.email = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("email"));
    user.emailVerified = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("emailVerified"));
    user.isAnonymous = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("isAnonymous"));
    user.lastLoginAt = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("lastLoginAt"));
    user.phoneNumber = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("phoneNumber"));
    user.photoURL = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("photoURL"));
    user.redirectEventId = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("redirectEventId"));
    user.tenantID = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("tenantId"));
    user.uid = shonad_1.lens.compose(maybeUser, shonad_1.lens.prop("uid"));
})(user = exports.user || (exports.user = {}));
exports.UserLensHelper = shonad_1.dict.makeDictHelper(types_1.emptyUser);
//# sourceMappingURL=User.js.map