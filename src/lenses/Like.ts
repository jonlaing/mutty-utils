import { lens } from "shonad";
import { GUID, LikeableType } from "../types";

export namespace like {
  export const contentID = lens.prop<GUID>("content");
}

export const likeType = lens.prop<LikeableType>("type");

export const likes = lens.prop<number>("likes");
export const liked = lens.prop<boolean>("liked");
