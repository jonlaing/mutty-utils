import { lens, maybe } from "shonad";
import { Dog, Friendship, FriendshipStatus } from "../types";
export declare const dog1: lens.Lens<any, maybe.Maybe<string | Dog>>;
export declare const dog2: lens.Lens<any, maybe.Maybe<string | Dog>>;
export declare const friendshipID: lens.Lens<any, maybe.Maybe<string>>;
export declare const status: lens.Lens<any, maybe.Maybe<FriendshipStatus>>;
export declare const block: lens.Lens<Friendship, maybe.Maybe<string>>;
export declare const FriendshipLensHelper: (obj: maybe.Maybe<Friendship>) => {
    author: () => string;
    friendshipId: () => string;
    status: () => string;
    block: () => string;
    id: () => string;
    created: () => number;
    dog1: () => string;
    dog2: () => string;
};
