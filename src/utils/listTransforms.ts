import * as R from "ramda";
import { TypedContainer } from "../types/FirestoreBaseTypes";
import {
  LikedDogContent,
  MultiBulletin,
  MultiDoc,
  MultiPost,
} from "../types/MultiDoc";

export const fillList = (length: number, arr: any[]) =>
  // TODO: fix these anys. Typescript wasn't happy about my Ramda magic
  (
    R.pipe(
      R.flip(R.concat)(R.repeat(null, length)) as any,
      R.take(length)
    ) as any
  )(arr);

export function collectMultiDocs<T extends LikedDogContent>(
  ds: T[]
): MultiDoc<T>[] {
  // have to assign it to a const because TS was complaining
  const f = R.pipe(
    R.groupBy<LikedDogContent, string>(R.prop("contentId")), // group posts by contentid
    R.mapObjIndexed((ds: LikedDogContent[], key: string | "undefined") =>
      key === "undefined" // posts with no contentid will be "undefined" so we're ignoring them
        ? ds.map((d) => ({ ...d, dogs: [d.dog] } as MultiDoc<T>)) // but we will populate the dogs field
        : R.reduce(
          // take the first post and put the other dogs into it, cumulating likes and stuff
          (acc, d) => {
            return {
              ...d,
              dogs: R.uniq([...(acc.dogs || []), d.dog]), // the uniq protects against double posts
              liked: acc.liked || d.liked,
              likes: (acc.likes | 0) + (d.likes | 0),
            } as MultiDoc<T>;
          },
            {} as MultiDoc<T>,
            ds
        )
    ),
    R.values, // take the values, which will have a mostly flat list, except for the "undefined" case
    R.unnest // unnest the "undefined" case and return a flat list of posts
  );
  return f(ds) as MultiDoc<T>[];
}

export function intersperseBulletins(
  posts: MultiPost[],
  bulletins: MultiBulletin[]
) {
  const boxedPosts = posts.map(
    (post) => ({ type: "post", post } as TypedContainer<{ post: MultiPost }>)
  );
  const boxedBulletins = bulletins.map(
    (bulletin) =>
      ({ type: "bulletin", bulletin } as TypedContainer<{
        bulletin: MultiBulletin;
      }>)
  );
  const splitPosts = R.splitEvery(3, boxedPosts);
  const splitBulletins = R.take(
    splitPosts.length - 1,
    R.splitEvery(1, boxedBulletins)
  );

  return R.flatten(
    R.times(
      (i) =>
        i < splitBulletins.length
          ? [splitPosts[i], splitBulletins[i]]
          : [splitPosts[i]],
      splitPosts.length
    )
  );
}
