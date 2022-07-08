import { DocBuilder, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";

export type LikeableType = "none" | "post" | "comment" | "photo" | "bulletin";

export interface Like extends ProcessedDoc {
  user: GUID;
  content: GUID;
  type: LikeableType;
}

export type LikeBuilder = DocBuilder<Like>;

export interface Likeable extends ProcessedDoc {
  likes: number;
}

export interface LikedDoc extends Likeable {
  liked: boolean;
}

export const emptyLike: Like = {
  id: "",
  created: 0,
  user: "",
  content: "",
  type: "none",
};
