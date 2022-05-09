import * as R from "ramda";
import { Bulletin } from "../types/Bulletin";
import { Dog } from "../types/Dog";
import { EmbedField, Liked, TypedContainer } from "../types/FirestoreBaseTypes";
import { GUID } from "../types/GUID";
import { Post } from "../types/Post";

export const fillList = (length: number, arr: any[]) =>
  // TODO: fix these anys. Typescript wasn't happy about my Ramda magic
  (
    R.pipe(
      R.flip(R.concat)(R.repeat(null, length)) as any,
      R.take(length)
    ) as any
  )(arr);

interface LikedDogContent {
  contentId: GUID;
  dog: Dog;
  liked: boolean;
  likes: number;
  comments?: number;
}

export type MultiDoc<T extends LikedDogContent> = T & {
  dogs: Dog[];
};

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

type MultiPost = MultiDoc<Liked<EmbedField<Post, "dog", Dog>>>;
type MultiBulletin = MultiDoc<Liked<EmbedField<Bulletin, "dog", Dog>>>;
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