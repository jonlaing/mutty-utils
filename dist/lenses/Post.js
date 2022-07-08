"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiPostLensHelper = exports.PostLensHelper = exports.videoThumbnail = exports.videoUri = exports.thumbnail = exports.uri = exports.video = exports.post = void 0;
const shonad_1 = require("shonad");
const types_1 = require("../types");
var post;
(function (post) {
    post.contentID = shonad_1.lens.prop("contentId");
})(post = exports.post || (exports.post = {}));
exports.video = shonad_1.lens.prop("video");
exports.uri = shonad_1.lens.prop("uri");
exports.thumbnail = shonad_1.lens.prop("thumbnail");
exports.videoUri = shonad_1.lens.compose(exports.video, shonad_1.lens.optional({}), exports.uri);
exports.videoThumbnail = shonad_1.lens.compose(exports.video, shonad_1.lens.optional({}), exports.thumbnail);
exports.PostLensHelper = shonad_1.dict.makeDictHelper(types_1.emptyPost);
exports.MultiPostLensHelper = shonad_1.dict.makeDictHelper(types_1.emptyMultiPost);
//# sourceMappingURL=Post.js.map