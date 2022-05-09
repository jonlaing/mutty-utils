/// <reference types="ts-toolbelt" />
export declare const not: import("Function/Curry").Curry<(f: (x: any) => boolean, vals: any) => boolean>;
export declare const or: import("Function/Curry").Curry<(f: (x: any) => boolean, g: (x: any) => boolean, v: any) => boolean>;
export declare const and: import("Function/Curry").Curry<(f: (x: any) => boolean, g: (x: any) => boolean, v: any) => boolean>;
export declare const prop: import("Function/Curry").Curry<(<T extends Record<string, any>, K extends keyof T>(k: K, obj: T) => T[K])>;
export declare const propNotIncluded: import("Function/Curry").Curry<(<T extends Record<string, any>, K extends keyof T, A extends T[K]>(arr: A[], key: K, obj: T) => boolean)>;
export declare const modify: import("Function/Curry").Curry<(key: string, f: (v: Record<string, any>) => any, obj: Record<string, any>) => {
    [x: string]: any;
}>;
