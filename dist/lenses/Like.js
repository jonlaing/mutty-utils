"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeLensHelper = exports.liked = exports.likes = exports.likeType = exports.like = void 0;
const shonad_1 = require("shonad");
const types_1 = require("../types");
var like;
(function (like) {
    like.contentID = shonad_1.lens.prop("content");
})(like = exports.like || (exports.like = {}));
exports.likeType = shonad_1.lens.prop("type");
exports.likes = shonad_1.lens.prop("likes");
exports.liked = shonad_1.lens.prop("liked");
exports.LikeLensHelper = shonad_1.dict.makeDictHelper(types_1.emptyLike);
//# sourceMappingURL=Like.js.map