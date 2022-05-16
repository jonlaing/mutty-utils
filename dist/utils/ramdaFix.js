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
exports.modify = exports.propNotIncluded = exports.prop = exports.and = exports.or = exports.not = void 0;
const R = __importStar(require("ramda"));
exports.not = R.curry((f, vals) => !f(vals));
exports.or = R.curry((f, g, v) => f(v) || g(v));
exports.and = R.curry((f, g, v) => f(v) && g(v));
exports.prop = R.curry((k, obj) => obj[k]);
exports.propNotIncluded = R.curry((arr, key, obj) => !arr.includes(obj[key]));
exports.modify = R.curry((key, f, obj) => (Object.assign(Object.assign({}, obj), { [key]: f(obj) })));
//# sourceMappingURL=ramdaFix.js.map