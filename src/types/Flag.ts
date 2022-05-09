import { ProcessedDoc, DocBuilder, HasTimestamp } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";

export type FlagType = "not-dog" | "inappropriate" | "spam" | "other";
export type FlaggableType =
  | "post"
  | "comment"
  | "photo"
  | "profile"
  | "bulletin";

export interface Flag extends ProcessedDoc, HasTimestamp {
  userId: GUID;
  contentId: GUID;
  contentType: FlaggableType;
  type: FlagType;
}

export interface FlagBuilder extends DocBuilder<Flag> {}
