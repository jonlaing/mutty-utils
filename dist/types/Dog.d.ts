import { Relationship } from "./Relationship";
import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
export declare type DogEmbedMap = {
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
    missing?: GUID;
}
export interface DogBuilder extends DocBuilder<Dog> {
}
export declare namespace Dog {
    const emptyDog: Dog;
}
