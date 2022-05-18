import { Dog } from "./Dog";
import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
export declare type RelationshipType = "parent" | "friend" | "caregiver";
export declare type RelationshipEmbedMap = {
    dog: Dog;
};
export interface Relationship extends ProcessedDoc, EmbeddableFields<RelationshipEmbedMap> {
    user: GUID;
    type: RelationshipType;
}
export declare type RelationshipBuilder = DocBuilder<Relationship>;
