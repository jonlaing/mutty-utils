import { DocBuilder, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
export declare type LikeableType = "none" | "post" | "comment" | "photo" | "bulletin";
export interface Like extends ProcessedDoc {
    user: GUID;
    content: GUID;
    type: LikeableType;
}
export declare type LikeBuilder = DocBuilder<Like>;
export interface Likeable extends ProcessedDoc {
    likes: number;
}
export interface LikedDoc extends Likeable {
    liked: boolean;
}
export declare const emptyLike: Like;
