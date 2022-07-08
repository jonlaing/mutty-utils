import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Relationship } from "./Relationship";
export declare type HumanEmbedMap = {
    relationship?: Relationship;
};
export interface Human extends ProcessedDoc, EmbeddableFields<HumanEmbedMap> {
    username: string;
    userid: GUID;
    phoneNumber: string;
    pushToken: string;
    pausePushNotifs?: boolean;
    recoveryEmail?: string;
    recentLocation?: string;
}
export declare type HumanBuider = DocBuilder<Human>;
export declare const emptyHuman: Human;
