import { GUID } from "./GUID";
import { Dog } from "./Dog";
import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
/**
 * Comments for {@link Post} and {@link Bulletin}.
 */
/** @see {@link EmbedFields} */
export declare type CommentEmbedMap = {
    dogs: Dog[];
};
export interface Comment extends ProcessedDoc, EmbeddableFields<CommentEmbedMap> {
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
export declare type CommentBuilder = DocBuilder<Comment>;
