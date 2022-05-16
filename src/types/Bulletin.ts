import { Dog } from "./Dog";
import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Location } from "./Location";

export type BulletinType = "meetup" | "lostdog" | "ad";

export type BulletinEmbedMap = {
  dog: Dog;
};

export interface Contact {
  phone?: string;
  email?: string;
  other?: string;
}

export interface Bulletin
  extends ProcessedDoc,
    EmbeddableFields<BulletinEmbedMap> {
  user: GUID;
  contentId: GUID;
  location: Location;
  locationIDs: string[];
  title: string;
  description?: string;
  canComment: boolean;
  canMessage: boolean;
  image: string;
  tags?: Record<string, GUID>;
  likes: number;
  bulletinType: BulletinType;
  date: number;
  endDate?: number;
  contact?: Contact;
  dogFound?: boolean;
}

export type BulletinBuilder<HasLikes extends boolean = true> =
  HasLikes extends true
    ? DocBuilder<Bulletin>
    : DocBuilder<Omit<Bulletin, "likes">>;
