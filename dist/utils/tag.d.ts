import { Dog } from "../types/Dog";
export declare const matchTag: (str: string) => string[];
export declare const lastTag: (args_0: string) => string | undefined;
export declare const tagifyDog: (d: Dog) => string;
export declare const tagifyDogs: (list: readonly Dog[]) => string[];
export declare const extractTaggedDogs: (s: string, allDogs: Dog[]) => Dog[];
declare type TagChunk = string | {
    tag: string;
};
export declare const splitTags: (s: string) => TagChunk[];
export {};
