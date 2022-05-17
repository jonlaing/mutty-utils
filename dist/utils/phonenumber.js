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
exports.parseAndCompress = exports.parseAndFormat = void 0;
const R = __importStar(require("ramda"));
const data_1 = require("shonad/data");
const regex = /^(\+\d+)?\W*(\d{3})\W*(\d{3})\W*(\d{4})/;
const parse = (userInput) => {
    const matches = userInput.match(regex);
    if (!matches)
        return data_1.maybe.nothing();
    return data_1.maybe.just([matches[1] || "+1", matches[2], matches[3], matches[4]]);
};
const formatForAuth = (n) => `${n[0]} (${n[1]}) ${n[2]}-${n[3]}`;
const parseAndFormat = (userInput) => data_1.maybe.fmap(formatForAuth, parse(userInput));
exports.parseAndFormat = parseAndFormat;
const parseAndCompress = (input) => data_1.maybe.fmap(R.join(""), parse(input));
exports.parseAndCompress = parseAndCompress;
//# sourceMappingURL=phonenumber.js.map