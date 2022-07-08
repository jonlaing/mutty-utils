"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiBulletinLensHelper = exports.BulletinLensHelper = exports.other = exports.email = exports.phone = exports.contact = exports.dogFound = exports.endDate = exports.date = exports.bulletinType = exports.canMessage = exports.canComment = exports.description = exports.title = exports.locationIDs = exports.bulletin = void 0;
const shonad_1 = require("shonad");
const types_1 = require("../types");
var bulletin;
(function (bulletin) {
    bulletin.contentID = shonad_1.lens.prop("contentId");
})(bulletin = exports.bulletin || (exports.bulletin = {}));
exports.locationIDs = shonad_1.lens.prop("locationIDs");
exports.title = shonad_1.lens.prop("title");
exports.description = shonad_1.lens.prop("description");
exports.canComment = shonad_1.lens.prop("canComment");
exports.canMessage = shonad_1.lens.prop("canMessage");
exports.bulletinType = shonad_1.lens.prop("bulletinType");
exports.date = shonad_1.lens.prop("date");
exports.endDate = shonad_1.lens.prop("endDate");
exports.dogFound = shonad_1.lens.prop("dogFound");
exports.contact = shonad_1.lens.prop("contact");
const contactDefault = shonad_1.lens.compose(exports.contact, shonad_1.lens.optional({}));
exports.phone = shonad_1.lens.compose(contactDefault, shonad_1.lens.prop("phone"));
exports.email = shonad_1.lens.compose(contactDefault, shonad_1.lens.prop("email"));
exports.other = shonad_1.lens.compose(contactDefault, shonad_1.lens.prop("phone"));
exports.BulletinLensHelper = shonad_1.dict.makeDictHelper(types_1.emptyBulletin);
exports.MultiBulletinLensHelper = shonad_1.dict.makeDictHelper(types_1.emptyMultiBulletin);
//# sourceMappingURL=Bulletin.js.map