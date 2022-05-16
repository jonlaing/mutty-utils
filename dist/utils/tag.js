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
exports.splitTags = exports.extractTaggedDogs = exports.tagifyDogs = exports.tagifyDog = exports.lastTag = exports.matchTag = void 0;
const R = __importStar(require("ramda"));
exports.matchTag = R.match(/@\w+/g);
exports.lastTag = R.pipe(R.match(/@\w+$/), R.last);
exports.tagifyDog = R.pipe(R.prop("fullName"), R.replace(/\W/g, ""), R.split(""), R.prepend("@"), R.join(""));
exports.tagifyDogs = R.map(exports.tagifyDog);
const extractTaggedDogs = (s, allDogs) => {
    const tags = (0, exports.matchTag)(s);
    return allDogs.filter((d) => tags.includes((0, exports.tagifyDog)(d)));
};
exports.extractTaggedDogs = extractTaggedDogs;
const splitTags = (s) => {
    const tags = (0, exports.matchTag)(s);
    const _splitTags = (s, tags) => {
        if (tags.length === 0)
            return s;
        const newSplit = R.reject((v) => v === "", R.intersperse({ tag: tags[0] }, R.split(tags[0], R.last(s))));
        return _splitTags([...R.init(s), ...newSplit], R.tail(tags));
    };
    return _splitTags([s], tags);
};
exports.splitTags = splitTags;
//# sourceMappingURL=tag.js.map