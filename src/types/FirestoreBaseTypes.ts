import { GUID } from "./GUID";

export interface HasId {
  id: GUID;
}

export interface HasTimestamp {
  created: number;
}

export interface ProcessedDoc extends HasId, HasTimestamp {}

export type EmbedField<T extends ProcessedDoc, K extends keyof T, V> = Omit<
  T,
  K
> & {
  [key in K]: T[key] extends (infer U)[] ? V[] : V;
};

export type EmbedAsGUID<T, K extends keyof T> = T & {
  [key in K]: GUID;
};

export type EmbedAllAsGUID<T, EmbedMap extends Partial<T>> = Omit<
  T,
  keyof EmbedMap
> & {
  [key in keyof EmbedMap]: EmbedMap[key] extends (infer U)[] ? GUID[] : GUID;
};

export type EmbeddableFields<EmbedMap> = {
  [key in keyof EmbedMap]: EmbedMap[key] extends (infer U)[] ? GUID[] : GUID;
};

export type EmbedFields<
  T,
  EmbedMap extends { [k in keyof Partial<T>]: any }
> = Omit<T, keyof EmbedMap> & EmbedMap;

export type DocBuilder<T extends ProcessedDoc> = Omit<T, "id"> & {
  version: number;
};

export type Liked<T> = T & {
  liked: boolean;
};

export type WithComments<T> = T & {
  comments?: number;
};

export type TypedContainer<TypeMap, FieldName extends string = "type"> = {
  [k in keyof TypeMap]: TypeMap[k];
} & { [field in FieldName]: keyof TypeMap };

export type HasProp<T, K extends string> = T extends { [k in K]: any }
  ? true
  : false;
