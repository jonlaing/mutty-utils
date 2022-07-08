import { dict, lens } from "shonad";

import { GUID, Like, LikeableType, emptyLike } from "../types";

export namespace like {
  export const contentID = lens.prop<GUID>("content");
}

export const likeType = lens.prop<LikeableType>("type");

export const likes = lens.prop<number>("likes");
export const liked = lens.prop<boolean>("liked");

export const LikeLensHelper = dict.makeDictHelper<Like>(emptyLike);
