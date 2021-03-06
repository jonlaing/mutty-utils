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
exports.longitude = exports.latitude = exports.location = exports.name = exports.geopoint = void 0;
const shonad_1 = require("shonad");
const GLens = __importStar(require("./Geopoint"));
exports.geopoint = shonad_1.lens.prop("geopoint");
exports.name = shonad_1.lens.prop("name");
exports.location = shonad_1.lens.prop("location");
exports.latitude = shonad_1.lens.compose(exports.location, shonad_1.lens.optional({}), exports.geopoint, shonad_1.lens.optional({}), GLens.latitude);
exports.longitude = shonad_1.lens.compose(exports.location, shonad_1.lens.optional({}), exports.geopoint, shonad_1.lens.optional({}), GLens.longitude);
//# sourceMappingURL=Location.js.map