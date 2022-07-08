import { Dog } from "./Dog";
import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
export declare type FriendshipStatus = "none" | "requested" | "confirmed" | "rejected";
export declare type FriendEmbedMap = {
    dog1: Dog;
    dog2: Dog;
};
export interface Friendship extends ProcessedDoc, EmbeddableFields<FriendEmbedMap> {
    author: GUID;
    friendshipId: GUID;
    status: FriendshipStatus;
    block: GUID;
}
export declare type FriendshipBuilder = DocBuilder<Friendship>;
export declare const emptyFriendship: Friendship;
