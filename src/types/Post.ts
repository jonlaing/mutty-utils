import { Dog } from "./Dog";
import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Location } from "./Location";

export type PostEmbedMap = {
  dog: Dog;
};

export interface Video {
  uri: string;
  thumbnail: string;
}

export interface Post extends ProcessedDoc, EmbeddableFields<PostEmbedMap> {
  user: GUID;
  contentId: GUID;
  location: Location;
  locationID?: string;
  summary: string;
  image?: string;
  video?: Video;
  likes: number;
  tags?: Record<string, GUID>;
}

export type PostBuilder<HasLikes extends boolean = true> = HasLikes extends true
  ? DocBuilder<Post>
  : DocBuilder<Omit<Post, "likes">>;

export const emptyPost: Post = {
  id: "",
  created: 0,
  contentId: "",
  user: "",
  location: {
    geopoint: {
      latitude: 0,
      longitude: 0,
    },
    name: "",
  },
  locationID: "",
  summary: "",
  video: {
    uri: "",
    thumbnail: "",
  },
  image: "",
  likes: 0,
  tags: {},
  dog: "",
};
