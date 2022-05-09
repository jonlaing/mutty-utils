import { GUID } from "./GUID";
export interface HasId {
    id: GUID;
}
export interface HasTimestamp {
    created: number;
}
export interface ProcessedDoc extends HasId, HasTimestamp {
}
export declare type EmbedField<T extends ProcessedDoc, K extends keyof T, V> = Omit<T, K> & {
    [key in K]: T[key] extends (infer U)[] ? V[] : V;
};
export declare type EmbedAsGUID<T, K extends keyof T> = T & {
    [key in K]: GUID;
};
export declare type EmbedAllAsGUID<T, EmbedMap extends Partial<T>> = Omit<T, keyof EmbedMap> & {
    [key in keyof EmbedMap]: EmbedMap[key] extends (infer U)[] ? GUID[] : GUID;
};
export declare type EmbeddableFields<EmbedMap> = {
    [key in keyof EmbedMap]: EmbedMap[key] extends (infer U)[] ? GUID[] : GUID;
};
export declare type EmbedFields<T, EmbedMap extends {
    [k in keyof Partial<T>]: any;
}> = Omit<T, keyof EmbedMap> & EmbedMap;
export declare type DocBuilder<T extends ProcessedDoc> = Omit<T, "id"> & {
    version: number;
};
export declare type Liked<T> = T & {
    liked: boolean;
};
export declare type WithComments<T> = T & {
    comments?: number;
};
export declare type TypedContainer<TypeMap, FieldName extends string = "type"> = {
    [k in keyof TypeMap]: TypeMap[k];
} & {
    [field in FieldName]: keyof TypeMap;
};
