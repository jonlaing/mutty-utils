import { GUID } from "./GUID";
import { DocBuilder, ProcessedDoc } from "./FirestoreBaseTypes";
import { Timestamp } from "./Timestamp";
export declare type LikeableType = "post" | "comment" | "photo" | "bulletin";
export interface Like extends ProcessedDoc {
    user: GUID;
    content: GUID;
    type: LikeableType;
}
export interface LikeBuilder extends DocBuilder<Like> {
}
export interface Likeable extends Omit<ProcessedDoc, "created"> {
    likes: number;
    created: Timestamp | number;
}
