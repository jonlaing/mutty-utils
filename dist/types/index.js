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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Advertiser"), exports);
__exportStar(require("./Bulletin"), exports);
__exportStar(require("./Comment"), exports);
__exportStar(require("./Dog"), exports);
__exportStar(require("./FirestoreBaseTypes"), exports);
__exportStar(require("./Flag"), exports);
__exportStar(require("./Friendship"), exports);
__exportStar(require("./GUID"), exports);
__exportStar(require("./Human"), exports);
__exportStar(require("./Like"), exports);
__exportStar(require("./Location"), exports);
__exportStar(require("./Notification"), exports);
__exportStar(require("./Post"), exports);
__exportStar(require("./Query"), exports);
__exportStar(require("./Relationship"), exports);
__exportStar(require("./Timestamp"), exports);
__exportStar(require("./User"), exports);
__exportStar(require("./UtilTypes"), exports);
__exportStar(require("./Firestore"), exports);
__exportStar(require("./MultiDoc"), exports);
__exportStar(require("./Geopoint"), exports);
