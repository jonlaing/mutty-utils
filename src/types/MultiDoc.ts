import { Bulletin } from "./Bulletin";
import { Dog, emptyDog } from "./Dog";
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

export const emptyMultiPost: MultiPost = {
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
  liked: false,
  tags: {},
  dogs: [],
  dog: emptyDog,
};

export const emptyMultiBulletin: MultiBulletin = {
  id: "",
  created: 0,
  dog: emptyDog,
  dogs: [],
  contact: {
    phone: "",
    email: "",
    other: "",
  },
  user: "",
  contentId: "",
  location: {
    geopoint: {
      latitude: 0,
      longitude: 0,
    },
    name: "",
  },
  locationIDs: [],
  title: "",
  description: "",
  canComment: false,
  canMessage: false,
  image: "",
  tags: {},
  likes: 0,
  liked: false,
  bulletinType: "meetup",
  date: 0,
  endDate: 0,
  dogFound: false,
};
