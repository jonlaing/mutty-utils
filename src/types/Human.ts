import { GUID } from "./GUID";
import { Relationship } from "./Relationship";
import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";

export type HumanEmbedMap = {
  relationship?: Relationship;
};

export interface Human extends ProcessedDoc, EmbeddableFields<HumanEmbedMap> {
  username: string;
  userid: GUID;
  phoneNumber: string;
  pushToken: string;
  pausePushNotifs?: boolean;
  recoveryEmail?: string;
  recentLocation?: string;
}

export type HumanBuider = DocBuilder<Human>;
