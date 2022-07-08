import { lens } from "shonad";
import { Like, LikeableType } from "../types";
export declare namespace like {
    const contentID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
}
export declare const likeType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<LikeableType>>;
export declare const likes: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<number>>;
export declare const liked: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<boolean>>;
export declare const LikeLensHelper: (obj: import("shonad/dist/data/Maybe").Maybe<Like>) => {
    user: () => string;
    content: () => string;
    type: () => string;
    id: () => string;
    created: () => number;
};
