import { lens } from "shonad/control";
import { Dog } from "../types";
export declare const dogs: lens.Lens<Record<string, Dog[]>, import("shonad/dist/data/Maybe").Maybe<Dog[]>>;
export declare const comments: lens.Lens<Record<string, number>, import("shonad/dist/data/Maybe").Maybe<number>>;
export declare namespace comment {
    const contentID: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
}
