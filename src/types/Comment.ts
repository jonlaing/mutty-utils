import { Dog } from "./Dog";
import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";
import { GUID } from "./GUID";

/**
 * Comments for {@link Post} and {@link Bulletin}.
 */

/** @see {@link EmbedFields} */
export type CommentEmbedMap = {
  dogs: Dog[];
};

export interface Comment
  extends ProcessedDoc,
    EmbeddableFields<CommentEmbedMap> {
  /** {@link User} id for the author of the comment */
  user: GUID;
  /** The Content Id of the associated {@link Post} or {@link Bulletin} */
  content: GUID;
  /** Text content of the Comment */
  summary: string;
  likes: number;
  /** @see {@link tagifyDog} */
  tags?: Record<string, GUID>;
}

export type CommentBuilder = DocBuilder<Comment>;

export const emptyComment: Comment = {
  id: "",
  created: 0,
  dogs: [],
  user: "",
  content: "",
  summary: "",
  likes: 0,
  tags: {},
};
