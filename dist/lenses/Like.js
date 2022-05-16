"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liked = exports.likes = exports.likeType = exports.like = void 0;
const control_1 = require("shonad/control");
var like;
(function (like) {
    like.contentID = control_1.lens.prop("content");
})(like = exports.like || (exports.like = {}));
exports.likeType = control_1.lens.prop("type");
exports.likes = control_1.lens.prop("likes");
exports.liked = control_1.lens.prop("liked");
