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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLikesByUser = exports.decLikes = exports.incLikes = exports.updateLikes = void 0;
const R = __importStar(require("ramda"));
const firestore_1 = require("./firestore");
exports.updateLikes = R.curry((val, liked, docs, id) => docs.map((d) => d.id === id ? Object.assign(Object.assign({}, d), { likes: (d.likes || 0) + val, liked }) : d));
exports.incLikes = (0, exports.updateLikes)(1, true);
exports.decLikes = (0, exports.updateLikes)(-1, false);
function getLikesByUser(fs, userId, docIds) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, firestore_1.batchGetByFieldWithConstraints)(fs.collection("likes"), "content", [(q) => q.where("user", "==", userId)], docIds);
    });
}
exports.getLikesByUser = getLikesByUser;
//# sourceMappingURL=likes.js.map