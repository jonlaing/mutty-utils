import { lens } from "shonad/control";
import { maybe } from "shonad/data";
import { Dog, Friendship, FriendshipStatus } from "../types";
export declare const dog1: lens.Lens<Record<string, string | Dog>, maybe.Maybe<string | Dog>>;
export declare const dog2: lens.Lens<Record<string, string | Dog>, maybe.Maybe<string | Dog>>;
export declare const friendshipID: lens.Lens<Record<string, string>, maybe.Maybe<string>>;
export declare const status: lens.Lens<Record<string, FriendshipStatus>, maybe.Maybe<FriendshipStatus>>;
export declare const block: lens.Lens<Friendship, maybe.Maybe<string>>;
