import { GUID } from "./GUID";
import { Dog } from "./Dog";
import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
export declare type CommentEmbedMap = {
    dogs: Dog[];
};
export interface Comment extends ProcessedDoc, EmbeddableFields<CommentEmbedMap> {
    user: GUID;
    content: GUID;
    summary: string;
    likes: number;
    tags?: Record<string, GUID>;
}
export interface CommentBuilder extends DocBuilder<Comment> {
}
