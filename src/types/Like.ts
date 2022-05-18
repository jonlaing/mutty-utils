import { GUID } from "./GUID";
import { DocBuilder, ProcessedDoc } from "./FirestoreBaseTypes";

export type LikeableType = "post" | "comment" | "photo" | "bulletin";

export interface Like extends ProcessedDoc {
  user: GUID;
  content: GUID;
  type: LikeableType;
}

export type LikeBuilder = DocBuilder<Like>;

export interface Likeable extends Omit<ProcessedDoc, "created"> {
  likes: number;
  created: number;
}
