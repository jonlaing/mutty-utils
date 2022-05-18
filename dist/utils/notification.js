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
exports.sendPushNotification = exports.stringifyNotif = exports.groupLikeNotifs = exports.findFriendDogs = exports.findFriendships = exports.findCommentDogs = exports.findLikeDogs = exports.findLikeContent = void 0;
const R = __importStar(require("ramda"));
const strings_1 = require("./strings");
function findLikeContent(notif, posts, comments) {
    if (notif.contentType === "post") {
        return R.find((p) => p.id === notif.contentId, posts);
    }
    return R.find((c) => c.id === notif.contentId, comments);
}
exports.findLikeContent = findLikeContent;
function findLikeDogs(notif, content, dogs) {
    if (notif.contentType === "post") {
        return [
            R.find((d) => !!d.id && d.id === content.dog, dogs),
        ];
    }
    return dogs.filter((d) => content.dogs.includes(d.id));
}
exports.findLikeDogs = findLikeDogs;
function findCommentDogs(notif, dogs) {
    return dogs.filter((d) => notif.from.includes(d.id));
}
exports.findCommentDogs = findCommentDogs;
function findFriendships(notif, friendships) {
    return friendships.filter((f) => f.status !== "rejected" &&
        notif.from.includes(f.dog2) &&
        f.dog1 === notif.contentId &&
        f.author === notif.author);
}
exports.findFriendships = findFriendships;
function findFriendDogs(notif, dogs, friendships) {
    const notifDogIds = friendships
        .map(R.prop("dog2"))
        .filter((id) => notif.from.includes(id));
    return dogs.filter((d) => notifDogIds.includes(d.id));
}
exports.findFriendDogs = findFriendDogs;
exports.groupLikeNotifs = R.pipe(R.groupBy(R.prop("actionType")), R.evolve({
    like: R.pipe(R.groupBy(R.prop("contentId")), R.values, R.map(R.reduce((acc, n) => (Object.assign(Object.assign(Object.assign({}, n), acc), { created: R.max(acc.created || 0, n.created), read: !!acc.read && n.read, from: [...(acc.from || []), ...n.from] })), { read: true }))),
}), 
// @ts-ignore: pretty tired of this typing nonsense
R.values, R.unnest, R.sortBy(R.prop("created")), R.reverse);
const stringifyNotif = (notif, fromHuman, fromDogs) => {
    switch (notif.actionType) {
        case "like":
            if (fromHuman)
                return `@${fromHuman.username} liked your ${notif.contentType}`;
            return `Someone liked your ${notif.contentType}`;
        case "comment":
            const from = fromDogs.length > 0
                ? (0, strings_1.nameList)(fromDogs.map((d) => d.fullName))
                : "Someone";
            return `${from} commented on your ${notif.contentType}`;
        case "friend":
            if (fromDogs.length > 0) {
                return `${(0, strings_1.nameList)(fromDogs.map((d) => d.fullName))} requested to be friends!`;
            }
            else {
                return "New Friend request!";
            }
        case "tag":
            return `Your dog was tagged in a ${notif.contentType}!`;
    }
};
exports.stringifyNotif = stringifyNotif;
function sendPushNotification(to, title, body, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = {
            to,
            title,
            body,
            data,
            sound: "default",
        };
        yield fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Accept-encoding": "gzip, deflate",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        });
    });
}
exports.sendPushNotification = sendPushNotification;
//# sourceMappingURL=notification.js.map