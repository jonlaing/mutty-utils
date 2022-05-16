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
exports.coordToMatrix = exports.idToCoord = exports.coordToIDString = exports.coordToID = exports.coordToFullID = void 0;
const R = __importStar(require("ramda"));
const KM_IN_DEGREE_LAT = 110.574;
const KM_COEF_LONG = 111.32;
const PHI = 2 / KM_IN_DEGREE_LAT;
const toRad = (deg) => deg * (Math.PI / 180);
// const toDeg = (rad: number) => rad * (180 / Math.PI);
const LAMDA = (lat) => 2 / (KM_COEF_LONG * Math.cos(toRad(lat)));
function coordToFullID(lat, long) {
    const x = (90 - lat) / PHI;
    const y = (90 - long) / LAMDA(lat);
    return [x, y];
}
exports.coordToFullID = coordToFullID;
function coordToID(lat, long) {
    const [x, y] = coordToFullID(lat, long);
    return [Math.round(x), Math.round(y)];
}
exports.coordToID = coordToID;
function coordToIDString(lat, long) {
    const [x, y] = coordToID(lat, long);
    return `${x}x${y}`;
}
exports.coordToIDString = coordToIDString;
function idToCoord(x, y) {
    const lat = 90 - x * PHI;
    const long = 90 - y * LAMDA(lat);
    return [lat, long];
}
exports.idToCoord = idToCoord;
function coordToMatrix(lat, long, delta) {
    const [x, y] = coordToID(lat, long);
    const posC = R.times(R.identity, delta + 1);
    const C = R.uniq(R.concat(posC, R.map(R.ifElse(R.equals(0), R.identity, R.negate), posC)));
    const xs = R.map(R.add(x), C);
    const ys = R.map(R.add(y), C);
    const M = R.xprod(xs, ys).map(([x, y]) => `${x}x${y}`);
    return M;
}
exports.coordToMatrix = coordToMatrix;
//# sourceMappingURL=location.js.map