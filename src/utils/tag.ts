import * as R from "ramda";
import { Dog } from "../types/Dog";

export const matchTag = R.match(/@\w+/g);
export const lastTag = R.pipe<[string], string[], string | undefined>(
  R.match(/@\w+$/),
  R.last
);
export const tagifyDog: (d: Dog) => string = R.pipe(
  R.prop("fullName"),
  R.replace(/\W/g, ""),
  R.split(""),
  R.prepend("@"),
  R.join("")
);
export const tagifyDogs = R.map<Dog, string>(tagifyDog);

export const extractTaggedDogs = (s: string, allDogs: Dog[]): Dog[] => {
  const tags = matchTag(s);
  return allDogs.filter((d) => tags.includes(tagifyDog(d)));
};

type TagChunk = string | { tag: string };

export const splitTags = (s: string): TagChunk[] => {
  const tags = matchTag(s);

  const _splitTags = (s: TagChunk[], tags: string[]): TagChunk[] => {
    if (tags.length === 0) return s;

    const newSplit = R.reject(
      (v) => v === "",
      R.intersperse<TagChunk>(
        { tag: tags[0] },
        R.split(tags[0], R.last(s) as string)
      )
    );
    return _splitTags([...R.init(s), ...newSplit], R.tail(tags));
  };

  return _splitTags([s], tags);
};
