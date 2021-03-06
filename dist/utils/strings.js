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
exports.titleCase = exports.nameList = void 0;
const R = __importStar(require("ramda"));
const nameList = (ss) => {
    if (ss.length === 0)
        return "";
    if (ss.length === 1)
        return ss[0];
    const [ultName, penUltName, ...names] = R.reverse(ss);
    const listEnd = `${penUltName} & ${ultName}`;
    return R.join(", ", R.reverse([listEnd, ...names]));
};
exports.nameList = nameList;
exports.titleCase = R.ifElse(R.isNil, R.always(undefined), R.pipe(R.split(""), R.adjust(0, R.toUpper), R.join("")));
//# sourceMappingURL=strings.js.map