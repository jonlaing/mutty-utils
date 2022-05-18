import { lens } from "shonad/control";
import { FlagType, FlaggableType, GUID } from "../types";

export namespace flag {
  export const userID = lens.prop<GUID>("userId");
  export const contentID = lens.prop<GUID>("contentId");
  export const contentType = lens.prop<FlaggableType>("contentType");
}
export const flagType = lens.prop<FlagType>("type");
