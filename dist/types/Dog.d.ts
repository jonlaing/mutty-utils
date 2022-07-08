import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Relationship } from "./Relationship";
/** @see {@link EmbedFields} */
export declare type DogEmbedMap = {
    relationship?: Relationship;
};
export interface Dog extends ProcessedDoc, EmbeddableFields<DogEmbedMap> {
    /** Full name of the dog */
    fullName: string;
    /** List of URIs to profile pictures. */
    pics: string[];
    /** String representing the breed of the dog */
    breed?: string;
    /** Year the dog was born */
    yearBorn?: number;
    /** Zero-indexed month the dog was born */
    monthBorn?: number;
    /** Zero-index day the dog was born */
    dayBorn?: number;
    /** Profile text */
    summary: string;
    /** Content ID for the a `lostdog` {@link Bulletin} */
    missing?: GUID;
    /** Is this a verified account? */
    verified?: boolean;
}
export declare type DogBuilder = DocBuilder<Dog>;
export declare const emptyDog: Dog;
