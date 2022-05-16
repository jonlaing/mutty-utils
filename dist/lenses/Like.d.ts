import { lens } from "shonad/control";
import { LikeableType } from "../types";
export declare namespace like {
    const contentID: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
}
export declare const likeType: lens.Lens<Record<string, LikeableType>, import("shonad/dist/data/Maybe").Maybe<LikeableType>>;
export declare const likes: lens.Lens<Record<string, number>, import("shonad/dist/data/Maybe").Maybe<number>>;
export declare const liked: lens.Lens<Record<string, boolean>, import("shonad/dist/data/Maybe").Maybe<boolean>>;
