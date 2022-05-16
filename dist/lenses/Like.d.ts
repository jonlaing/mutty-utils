import { lens } from "shonad/control";
import { LikeableType } from "../types";
export declare namespace like {
    const contentID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
}
export declare const likeType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<LikeableType>>;
export declare const likes: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<number>>;
export declare const liked: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<boolean>>;
