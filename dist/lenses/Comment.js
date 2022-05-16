"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comment = exports.comments = exports.dogs = void 0;
const control_1 = require("shonad/control");
exports.dogs = control_1.lens.prop("dogs");
exports.comments = control_1.lens.prop("comments");
var comment;
(function (comment) {
    comment.contentID = control_1.lens.prop("content");
})(comment = exports.comment || (exports.comment = {}));
//# sourceMappingURL=Comment.js.map