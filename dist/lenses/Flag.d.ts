import { lens } from "shonad";
import { Flag, FlagType, FlaggableType } from "../types";
export declare namespace flag {
    const userID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
    const contentID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
    const contentType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<FlaggableType>>;
}
export declare const flagType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<FlagType>>;
export declare const FlagLensHelper: (obj: import("shonad/dist/data/Maybe").Maybe<Flag>) => {
    userId: () => string;
    contentId: () => string;
    contentType: () => string;
    type: () => string;
    id: () => string;
    created: () => number;
};
