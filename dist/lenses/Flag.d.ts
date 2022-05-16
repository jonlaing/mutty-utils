import { lens } from "shonad/control";
import { FlaggableType, FlagType } from "../types";
export declare namespace flag {
    const userID: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
    const contentID: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
    const contentType: lens.Lens<Record<string, FlaggableType>, import("shonad/dist/data/Maybe").Maybe<FlaggableType>>;
}
export declare const flagType: lens.Lens<Record<string, FlagType>, import("shonad/dist/data/Maybe").Maybe<FlagType>>;
