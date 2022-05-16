"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.other = exports.email = exports.phone = exports.contact = exports.dogFound = exports.endDate = exports.date = exports.bulletinType = exports.canMessage = exports.canComment = exports.description = exports.title = exports.locationIDs = exports.bulletin = void 0;
const control_1 = require("shonad/control");
var bulletin;
(function (bulletin) {
    bulletin.contentID = control_1.lens.prop("contentId");
})(bulletin = exports.bulletin || (exports.bulletin = {}));
exports.locationIDs = control_1.lens.prop("locationIDs");
exports.title = control_1.lens.prop("title");
exports.description = control_1.lens.prop("description");
exports.canComment = control_1.lens.prop("canComment");
exports.canMessage = control_1.lens.prop("canMessage");
exports.bulletinType = control_1.lens.prop("bulletinType");
exports.date = control_1.lens.prop("date");
exports.endDate = control_1.lens.prop("endDate");
exports.dogFound = control_1.lens.prop("dogFound");
exports.contact = control_1.lens.prop("contact");
const contactDefault = control_1.lens.compose(exports.contact, control_1.lens.optional({}));
exports.phone = control_1.lens.compose(contactDefault, control_1.lens.prop("phone"));
exports.email = control_1.lens.compose(contactDefault, control_1.lens.prop("email"));
exports.other = control_1.lens.compose(contactDefault, control_1.lens.prop("phone"));
//# sourceMappingURL=Bulletin.js.map