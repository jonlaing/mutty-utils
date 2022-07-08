import { dict, lens } from "shonad";

import { Flag, FlagType, FlaggableType, GUID, emptyFlag } from "../types";

export namespace flag {
  export const userID = lens.prop<GUID>("userId");
  export const contentID = lens.prop<GUID>("contentId");
  export const contentType = lens.prop<FlaggableType>("contentType");
}
export const flagType = lens.prop<FlagType>("type");

export const FlagLensHelper = dict.makeDictHelper<Flag>(emptyFlag);
