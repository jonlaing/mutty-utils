"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoThumbnail = exports.videoUri = exports.thumbnail = exports.uri = exports.video = exports.post = void 0;
const shonad_1 = require("shonad");
var post;
(function (post) {
    post.contentID = shonad_1.lens.prop("contentId");
})(post = exports.post || (exports.post = {}));
exports.video = shonad_1.lens.prop("video");
exports.uri = shonad_1.lens.prop("uri");
exports.thumbnail = shonad_1.lens.prop("thumbnail");
exports.videoUri = shonad_1.lens.compose(exports.video, shonad_1.lens.optional({}), exports.uri);
exports.videoThumbnail = shonad_1.lens.compose(exports.video, shonad_1.lens.optional({}), exports.thumbnail);
//# sourceMappingURL=Post.js.map