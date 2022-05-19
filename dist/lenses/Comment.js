"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comment = exports.comments = exports.dogs = void 0;
const shonad_1 = require("shonad");
exports.dogs = shonad_1.lens.prop("dogs");
exports.comments = shonad_1.lens.prop("comments");
var comment;
(function (comment) {
    comment.contentID = shonad_1.lens.prop("content");
})(comment = exports.comment || (exports.comment = {}));
//# sourceMappingURL=Comment.js.map