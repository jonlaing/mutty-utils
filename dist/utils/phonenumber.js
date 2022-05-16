"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndCompressNumber = exports.parseAndFormatPhoneNumber = void 0;
const regex = /^(\+\d+)?\W*(\d{3})\W*(\d{3})\W*(\d{4})/;
const parseNumber = (userInput) => {
    const matches = userInput.match(regex);
    if (!matches)
        return null;
    return [matches[1] || "+1", matches[2], matches[3], matches[4]];
};
const formatNumberForAuth = (n) => (!n ? null : `${n[0]} (${n[1]}) ${n[2]}-${n[3]}`);
const parseAndFormatPhoneNumber = (userInput) => formatNumberForAuth(parseNumber(userInput));
exports.parseAndFormatPhoneNumber = parseAndFormatPhoneNumber;
const parseAndCompressNumber = (input) => { var _a; return (_a = parseNumber(input)) === null || _a === void 0 ? void 0 : _a.join(""); };
exports.parseAndCompressNumber = parseAndCompressNumber;
//# sourceMappingURL=phonenumber.js.map