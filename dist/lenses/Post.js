"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoThumbnail = exports.videoUri = exports.thumbnail = exports.uri = exports.video = exports.post = void 0;
const control_1 = require("shonad/control");
var post;
(function (post) {
    post.contentID = control_1.lens.prop("contentId");
})(post = exports.post || (exports.post = {}));
exports.video = control_1.lens.prop("video");
exports.uri = control_1.lens.prop("uri");
exports.thumbnail = control_1.lens.prop("thumbnail");
exports.videoUri = control_1.lens.compose(exports.video, control_1.lens.optional({}), exports.uri);
exports.videoThumbnail = control_1.lens.compose(exports.video, control_1.lens.optional({}), exports.thumbnail);
