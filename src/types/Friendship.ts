import { Dog } from "./Dog";
import { GUID } from "./GUID";
import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";

export type FriendshipStatus = "requested" | "confirmed" | "rejected";

export type FriendEmbedMap = {
  dog1: Dog;
  dog2: Dog;
};

export interface Friendship
  extends ProcessedDoc,
    EmbeddableFields<FriendEmbedMap> {
  author: GUID;
  friendshipId: GUID;
  status: FriendshipStatus;
  block: GUID;
}

export interface FriendshipBuilder extends DocBuilder<Friendship> {}
