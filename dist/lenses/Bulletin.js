"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletinLensHelper = exports.other = exports.email = exports.phone = exports.contact = exports.dogFound = exports.endDate = exports.date = exports.bulletinType = exports.canMessage = exports.canComment = exports.description = exports.title = exports.locationIDs = exports.bulletin = void 0;
const shonad_1 = require("shonad");
const Base_1 = require("./Base");
const Like_1 = require("./Like");
var bulletin;
(function (bulletin) {
    bulletin.contentID = shonad_1.lens.prop("contentId");
})(bulletin = exports.bulletin || (exports.bulletin = {}));
exports.locationIDs = shonad_1.lens.prop("locationIDs");
exports.title = shonad_1.lens.prop("title");
exports.description = shonad_1.lens.prop("description");
exports.canComment = shonad_1.lens.prop("canComment");
exports.canMessage = shonad_1.lens.prop("canMessage");
exports.bulletinType = shonad_1.lens.prop("bulletinType");
exports.date = shonad_1.lens.prop("date");
exports.endDate = shonad_1.lens.prop("endDate");
exports.dogFound = shonad_1.lens.prop("dogFound");
exports.contact = shonad_1.lens.prop("contact");
const contactDefault = shonad_1.lens.compose(exports.contact, shonad_1.lens.optional({}));
exports.phone = shonad_1.lens.compose(contactDefault, shonad_1.lens.prop("phone"));
exports.email = shonad_1.lens.compose(contactDefault, shonad_1.lens.prop("email"));
exports.other = shonad_1.lens.compose(contactDefault, shonad_1.lens.prop("phone"));
const BulletinLensHelper = (b) => ({
    user: () => shonad_1.lens.view((0, Base_1.safeLens)("", Base_1.userProp), b),
    contentId: () => shonad_1.lens.view((0, Base_1.safeLens)("", bulletin.contentID), b),
    locationIDs: () => shonad_1.lens.view((0, Base_1.safeLens)([], exports.locationIDs), b),
    title: () => shonad_1.lens.view((0, Base_1.safeLens)("", exports.title), b),
    description: () => shonad_1.lens.view((0, Base_1.safeLens)("", exports.description), b),
    canComment: () => shonad_1.lens.view((0, Base_1.safeLens)(false, exports.canComment), b),
    canMessage: () => shonad_1.lens.view((0, Base_1.safeLens)(false, exports.canMessage), b),
    image: () => shonad_1.lens.view((0, Base_1.safeLens)("", Base_1.image), b),
    tags: () => shonad_1.lens.view((0, Base_1.safeLens)({}, Base_1.tags), b),
    likes: () => shonad_1.lens.view((0, Base_1.safeLens)(0, Like_1.likes), b),
    date: () => shonad_1.lens.view((0, Base_1.safeLens)(0, exports.date), b),
    endDate: () => shonad_1.lens.view((0, Base_1.safeLens)(0, exports.endDate), b),
    dogFound: () => shonad_1.lens.view((0, Base_1.safeLens)(false, exports.dogFound), b),
});
exports.BulletinLensHelper = BulletinLensHelper;
// type LensHelperF<T> = () => T;
// type LensHelper<T, V = any> = dict.Dict<LensHelperF<V> | (() => LensHelper<V>)>;
// const lensHelper =
//   <T extends dict.Dict<any>>(map: Record<keyof T, any>) =>
//   (obj: maybe.Maybe<T>): LensHelper<T> =>
//     dict.mapi((v, k: keyof T) => {
//       if (typeof v === "object" && !Array.isArray(v) && v !== null) {
//         return () =>
//           lensHelper(v)(
//             lens.view<maybe.Maybe<T>, typeof v>(
//               lens.compose<maybe.Maybe<T>, maybe.Maybe<typeof v>>(
//                 lens.prop<dict.Dict<any>>(k as string),
//                 lens.optional({})
//               ),
//               v
//             )
//           ) as LensHelper<T, any>
//       }
//       return () =>
//         lens.view<maybe.Maybe<T>, typeof v>(
//           lens.compose<maybe.Maybe<T>, typeof v>(
//             lens.prop("k"),
//             lens.optional(v)
//           ),
//           obj
//         ) as LensHelperF<T[`${k}`]>;
//     }) as unknown as LensHelper<T>;
// const bullHelper = lensHelper<{ a: boolean, c: string }>({ a: false, c: '' })(
//   maybe.just({ a: true, c: 'asdf' }) as maybe.Maybe<{ a: boolean, c: string }>
// );
// const b = bullHelper.c();
//# sourceMappingURL=Bulletin.js.map