"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendshipLensHelper = exports.block = exports.status = exports.friendshipID = exports.dog2 = exports.dog1 = void 0;
const shonad_1 = require("shonad");
const types_1 = require("../types");
exports.dog1 = shonad_1.lens.prop("dog1");
exports.dog2 = shonad_1.lens.prop("dog2");
exports.friendshipID = shonad_1.lens.prop("friendshipId");
exports.status = shonad_1.lens.prop("status");
// return nothing if block wasn't set
exports.block = shonad_1.lens.lens((a) => shonad_1.maybe.bind(shonad_1.dict.get("block", a), (b) => b === "" ? shonad_1.maybe.nothing() : shonad_1.maybe.just(b)), (mv, a) => shonad_1.maybe.fromMaybe(a, shonad_1.maybe.fmap((v) => shonad_1.dict.set("block", v, a), mv)));
exports.FriendshipLensHelper = shonad_1.dict.makeDictHelper(types_1.emptyFriendship);
//# sourceMappingURL=Friendship.js.map