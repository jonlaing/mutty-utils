"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersperseBulletins = exports.collectMultiDocs = exports.fillList = void 0;
const R = __importStar(require("ramda"));
const fillList = (length, arr) => 
// TODO: fix these anys. Typescript wasn't happy about my Ramda magic
R.pipe(R.flip(R.concat)(R.repeat(null, length)), R.take(length))(arr);
exports.fillList = fillList;
function collectMultiDocs(ds) {
    // have to assign it to a const because TS was complaining
    const f = R.pipe(R.groupBy(R.prop("contentId")), // group posts by contentid
    R.mapObjIndexed((ds, key) => key === "undefined" // posts with no contentid will be "undefined" so we're ignoring them
        ? ds.map((d) => (Object.assign(Object.assign({}, d), { dogs: [d.dog] }))) // but we will populate the dogs field
        : R.reduce(
        // take the first post and put the other dogs into it, cumulating likes and stuff
        (acc, d) => {
            return Object.assign(Object.assign({}, d), { dogs: R.uniq([...(acc.dogs || []), d.dog]), liked: acc.liked || d.liked, likes: (acc.likes | 0) + (d.likes | 0) });
        }, {}, ds)), R.values, // take the values, which will have a mostly flat list, except for the "undefined" case
    R.unnest // unnest the "undefined" case and return a flat list of posts
    );
    return f(ds);
}
exports.collectMultiDocs = collectMultiDocs;
function intersperseBulletins(posts, bulletins) {
    const boxedPosts = posts.map((post) => ({ type: "post", post }));
    const boxedBulletins = bulletins.map((bulletin) => ({ type: "bulletin", bulletin }));
    const splitPosts = R.splitEvery(3, boxedPosts);
    const splitBulletins = R.take(splitPosts.length - 1, R.splitEvery(1, boxedBulletins));
    return R.flatten(R.times((i) => i < splitBulletins.length
        ? [splitPosts[i], splitBulletins[i]]
        : [splitPosts[i]], splitPosts.length));
}
exports.intersperseBulletins = intersperseBulletins;
//# sourceMappingURL=listTransforms.js.map