import { lens, maybe } from "shonad";
import { BulletinType, Contact, GUID, MultiBulletin } from "../types";
import { image, safeLens, tags, userProp } from "./Base";
import { likes } from "./Like";

export namespace bulletin {
  export const contentID = lens.prop<GUID>("contentId");
}

export const locationIDs = lens.prop<string[]>("locationIDs");
export const title = lens.prop<string>("title");
export const description = lens.prop<string>("description");
export const canComment = lens.prop<boolean>("canComment");
export const canMessage = lens.prop<boolean>("canMessage");
export const bulletinType = lens.prop<BulletinType>("bulletinType");
export const date = lens.prop<number>("date");
export const endDate = lens.prop<number>("endDate");
export const dogFound = lens.prop<boolean>("dogFound");
export const contact = lens.prop<Contact>("contact");

const contactDefault = lens.compose<
  Record<string, Contact>,
  Record<string, string>
>(contact, lens.optional({}));

export const phone = lens.compose<any, maybe.Maybe<string>>(
  contactDefault,
  lens.prop<string>("phone")
);
export const email = lens.compose<any, maybe.Maybe<string>>(
  contactDefault,
  lens.prop<string>("email")
);
export const other = lens.compose<any, maybe.Maybe<string>>(
  contactDefault,
  lens.prop<string>("phone")
);

export const BulletinLensHelper = (b: maybe.Maybe<MultiBulletin>) => ({
  user: () => lens.view(safeLens("", userProp), b),
  contentId: () => lens.view(safeLens("", bulletin.contentID), b),
  locationIDs: () => lens.view(safeLens([], locationIDs), b),
  title: () => lens.view(safeLens("", title), b),
  description: () => lens.view(safeLens("", description), b),
  canComment: () => lens.view(safeLens(false, canComment), b),
  canMessage: () => lens.view(safeLens(false, canMessage), b),
  image: () => lens.view(safeLens("", image), b),
  tags: () => lens.view(safeLens({}, tags), b),
  likes: () => lens.view(safeLens(0, likes), b),
  date: () => lens.view(safeLens(0, date), b),
  endDate: () => lens.view(safeLens(0, endDate), b),
  dogFound: () => lens.view(safeLens(false, dogFound), b),
});

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
