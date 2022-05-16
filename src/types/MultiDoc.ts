import { Bulletin } from "./Bulletin";
import { Dog } from "./Dog";
import { EmbedField, Liked, WithComments } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Post } from "./Post";

export interface LikedDogContent {
  contentId: GUID;
  dog: Dog;
  liked: boolean;
  likes: number;
  comments?: number;
}

export type MultiDoc<T extends LikedDogContent> = T & {
  dogs: Dog[];
};

export type MultiPost = MultiDoc<
  WithComments<Liked<EmbedField<Post, "dog", Dog>>>
>;
export type MultiBulletin = MultiDoc<
  WithComments<Liked<EmbedField<Bulletin, "dog", Dog>>>
>;
