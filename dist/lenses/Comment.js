"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentLensHelper = exports.comment = exports.comments = exports.dogs = void 0;
const shonad_1 = require("shonad");
const types_1 = require("../types");
exports.dogs = shonad_1.lens.prop("dogs");
exports.comments = shonad_1.lens.prop("comments");
var comment;
(function (comment) {
    comment.contentID = shonad_1.lens.prop("content");
})(comment = exports.comment || (exports.comment = {}));
exports.CommentLensHelper = shonad_1.dict.makeDictHelper(types_1.emptyComment);
//# sourceMappingURL=Comment.js.map