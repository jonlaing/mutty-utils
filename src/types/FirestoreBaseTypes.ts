import { GUID } from "./GUID";

/**
 * Base types for Firestore records in Mutty.
 */

/** Pretty much all records inherit this */
export interface HasId {
  id: GUID;
}

/** Most records inherit this */
export interface HasTimestamp {
  /** Seconds since the epoch that it was created */
  created: number;
}

/** Base type for all Firestore records */
export interface ProcessedDoc extends HasId, HasTimestamp {}

/**
 * Since it would be ridiculous to store nested records being that
 * some records can change after they've been created, it makes
 * more sense to just store the `id` of the record as a string.
 * However, in the interface, it makes sense to have the records
 * nested sometimes, so this type is able to represent the duality
 * of nested or referenced records.
 *
 * @example
 * ```typescript
 * const dogs: Dog[] = getDogs() // not a real function in this library
 * const comment: EmbedField<Comment, "dogs", Dog> = {
 *   dogs: dogs
 *   //...
 * }
 *
 * @see {@link EmbedAsGUID}
 * @see {@link EmbedAllAsGUID}
 * @see {@link EmbeddableFields}
 * @see {@link EmbedFields}
 */
export type EmbedField<T extends ProcessedDoc, K extends keyof T, V> = Omit<
  T,
  K
> & {
  [key in K]: T[key] extends (infer U)[] ? V[] : V;
};

/**
 * Ensures that the nested record is referenced as a string
 *
 * @see {@link EmbedField}
 * @see {@link EmbedAllAsGUID}
 * @see {@link EmbeddableFields}
 * @see {@link EmbedFields}
 */
export type EmbedAsGUID<T, K extends keyof T> = T & {
  [key in K]: GUID;
};

/** @see {@link EmbedAsGUID} */
export type EmbedAllAsGUID<T, EmbedMap extends Partial<T>> = Omit<
  T,
  keyof EmbedMap
> & {
  [key in keyof EmbedMap]: EmbedMap[key] extends (infer U)[] ? GUID[] : GUID;
};

/**
 * Denotes that a record has embeddable fields
 *
 * @example
 * ```typescript
 * export type CommentEmbedMap = {
 *   dogs: Dog[];
 * };
 *
 * export interface Comment
 *   extends ProcessedDoc,
 *     EmbeddableFields<CommentEmbedMap> {
 *   // ...
 * }
 */
export type EmbeddableFields<EmbedMap> = {
  [key in keyof EmbedMap]: EmbedMap[key] extends (infer U)[] ? GUID[] : GUID;
};

/**
 * Embeds all fields as nested records rather than id references
 * @see {@link EmbedField}
 */
export type EmbedFields<
  T,
  EmbedMap extends { [k in keyof Partial<T>]: any }
> = Omit<T, keyof EmbedMap> & EmbedMap;

/**
 * Strips `id` from the {@link ProcessedDoc} since it would be redundant
 * in Firestore. It also adds a `version` field to keep track which
 * version of the API we're using. This is imporant because there
 * are Firebase Functions that will perform automatic processes
 * that are handled manually in older versions of the app. Using
 * `version` we can ensure they only run for certain versions of the app.
 */
export type DocBuilder<T extends ProcessedDoc> = Omit<T, "id"> & {
  version: number;
};

/**
 * Adds the `liked` field to a record. Since this is user specific
 * we only use this on the front end. It should not be saved to Firestore
 */
export type Liked<T> = T & {
  liked: boolean;
};

/** Adds the comment count to the record. This is dynamically calculated
 * so this is only used on the front-end.
 */
export type WithComments<T> = T & {
  comments?: number;
};

/**
 * Box the type when mixing content types.
 * @see {@link intersperseBulletins}
 */
export type TypedContainer<TypeMap, FieldName extends string = "type"> = {
  [k in keyof TypeMap]: TypeMap[k];
} & { [field in FieldName]: keyof TypeMap };

/** A type to check if a record has a property */
export type HasProp<T, K extends string> = T extends { [k in K]: any }
  ? true
  : false;
