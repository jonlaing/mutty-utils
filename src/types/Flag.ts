import { DocBuilder, HasTimestamp, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";

export type FlagType = "not-dog" | "inappropriate" | "spam" | "other";
export type FlaggableType =
  | "post"
  | "comment"
  | "photo"
  | "profile"
  | "bulletin"
  | "other";

export interface Flag extends ProcessedDoc, HasTimestamp {
  userId: GUID;
  contentId: GUID;
  contentType: FlaggableType;
  type: FlagType;
}

export type FlagBuilder = DocBuilder<Flag>;

export const emptyFlag: Flag = {
  id: "",
  created: 0,
  userId: "",
  contentId: "",
  type: "other",
  contentType: "other",
};
