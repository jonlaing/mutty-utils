import { GUID } from "./GUID";
import { DocBuilder, ProcessedDoc } from "./FirestoreBaseTypes";
export declare type LikeableType = "post" | "comment" | "photo" | "bulletin";
export interface Like extends ProcessedDoc {
    user: GUID;
    content: GUID;
    type: LikeableType;
}
export declare type LikeBuilder = DocBuilder<Like>;
export interface Likeable extends Omit<ProcessedDoc, "created"> {
    likes: number;
    created: number;
}
