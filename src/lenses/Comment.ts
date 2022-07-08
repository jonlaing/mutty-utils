import { dict, lens } from "shonad";

import { Comment, Dog, GUID, emptyComment } from "../types";

export const dogs = lens.prop<Dog[]>("dogs");

export const comments = lens.prop<number>("comments");

export namespace comment {
  export const contentID = lens.prop<GUID>("content");
}

export const CommentLensHelper = dict.makeDictHelper<Comment>(emptyComment);
