import { GUID } from "./GUID";
import { Location } from "./Location";
import { Dog } from "./Dog";
import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";

export type PostEmbedMap = {
  dog: Dog;
};

export interface Post extends ProcessedDoc, EmbeddableFields<PostEmbedMap> {
  user: GUID;
  contentId: GUID;
  location: Location;
  locationID?: string;
  summary: string;
  image: string;
  likes: number;
  tags?: Record<string, GUID>;
}

export const emptyPost: Post = {
  id: "",
  user: "",
  dog: "",
  contentId: "",
  location: {},
  summary: "",
  image: "",
  likes: 0,
  created: 0,
};

export type PostBuilder<HasLikes extends boolean = true> = HasLikes extends true
  ? DocBuilder<Post>
  : DocBuilder<Omit<Post, "likes">>;
