import { DocBuilder, HasTimestamp, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
export declare type FlagType = "not-dog" | "inappropriate" | "spam" | "other";
export declare type FlaggableType = "post" | "comment" | "photo" | "profile" | "bulletin" | "other";
export interface Flag extends ProcessedDoc, HasTimestamp {
    userId: GUID;
    contentId: GUID;
    contentType: FlaggableType;
    type: FlagType;
}
export declare type FlagBuilder = DocBuilder<Flag>;
export declare const emptyFlag: Flag;
