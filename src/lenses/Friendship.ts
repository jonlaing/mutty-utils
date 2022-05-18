import { lens } from "shonad/control";
import { dict, maybe } from "shonad/data";
import { Dog, Friendship, FriendshipStatus, GUID } from "../types";

export const dog1 = lens.prop<Dog | GUID>("dog1");
export const dog2 = lens.prop<Dog | GUID>("dog2");
export const friendshipID = lens.prop<GUID>("friendshipId");
export const status = lens.prop<FriendshipStatus>("status");

// return nothing if block wasn't set
export const block = lens.lens<Friendship, maybe.Maybe<GUID>>(
  (a: Friendship) =>
    maybe.bind<string, string>(dict.get("block", a), (b: string) =>
      b === "" ? maybe.nothing<string>() : maybe.just(b)
    ),
  (mv, a) =>
    maybe.fromMaybe(
      a,
      maybe.fmap((v) => dict.set("block", v, a), mv)
    )
);
