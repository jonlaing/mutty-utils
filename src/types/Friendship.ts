import { Dog } from "./Dog";
import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";
import { GUID } from "./GUID";

export type FriendshipStatus = "none" | "requested" | "confirmed" | "rejected";

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

export type FriendshipBuilder = DocBuilder<Friendship>;

export const emptyFriendship: Friendship = {
  id: "",
  created: 0,
  friendshipId: "",
  dog1: "",
  dog2: "",
  author: "",
  status: "none",
  block: "",
};
