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
exports.updatePushToken = exports.getByUser = exports.validateUsername = void 0;
const R = __importStar(require("ramda"));
exports.validateUsername = R.cond([
    [R.isEmpty, R.always("none")],
    [R.pipe(R.length, R.gt(4)), R.always("tooShort")],
    [R.complement(R.test(/(^[^\s]+$)/)), R.always("badCharacters")],
    [R.T, R.always("")],
]);
const getByUser = (fs, userId) => fs
    .collection("humans")
    .where("userid", "==", userId)
    .get()
    .then((docs) => docs.size > 0
    ? docs.docs[0]
    : Promise.reject("Couldn't find human with userid:" + userId))
    .then((doc) => doc.data());
exports.getByUser = getByUser;
function updatePushToken(fs, userId, pushToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const docs = yield fs
            .collection("humans")
            .where("userid", "==", userId)
            .get();
        const human = docs.docs[0];
        if ((human === null || human === void 0 ? void 0 : human.data().pushToken) === pushToken) {
            return;
        }
        return human === null || human === void 0 ? void 0 : human.ref.update({ pushToken });
    });
}
exports.updatePushToken = updatePushToken;
