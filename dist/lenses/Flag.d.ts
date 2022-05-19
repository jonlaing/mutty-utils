import { lens } from "shonad";
import { FlagType, FlaggableType } from "../types";
export declare namespace flag {
    const userID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
    const contentID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
    const contentType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<FlaggableType>>;
}
export declare const flagType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<FlagType>>;
