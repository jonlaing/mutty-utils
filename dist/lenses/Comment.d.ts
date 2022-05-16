import { lens } from "shonad/control";
import { Dog } from "../types";
export declare const dogs: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<Dog[]>>;
export declare const comments: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<number>>;
export declare namespace comment {
    const contentID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
}
