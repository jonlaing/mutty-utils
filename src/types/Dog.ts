import { Relationship } from "./Relationship";
import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";
import { GUID } from "./GUID";

export type DogEmbedMap = {
  relationship?: Relationship;
};

export interface Dog extends ProcessedDoc, EmbeddableFields<DogEmbedMap> {
  fullName: string;
  pics: string[];
  breed?: string;
  yearBorn?: number;
  monthBorn?: number;
  dayBorn?: number;
  summary: string;
  missing?: GUID; // contentID for bulletin
}

export interface DogBuilder extends DocBuilder<Dog> {}

export namespace Dog {
  export const emptyDog: Dog = {
    id: "",
    fullName: "",
    pics: [],
    breed: "",
    yearBorn: new Date().getFullYear(),
    summary: "",
    created: 0,
  };
}
