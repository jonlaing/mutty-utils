import { Dog } from "./Dog";
import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";
import { GUID } from "./GUID";

export type RelationshipType = "parent" | "friend" | "caregiver";

export type RelationshipEmbedMap = {
  dog: Dog;
};

export interface Relationship
  extends ProcessedDoc,
    EmbeddableFields<RelationshipEmbedMap> {
  user: GUID;
  type: RelationshipType;
}

export type RelationshipBuilder = DocBuilder<Relationship>;
