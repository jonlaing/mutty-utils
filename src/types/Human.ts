import {
  DocBuilder,
  EmbeddableFields,
  ProcessedDoc,
} from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Relationship } from "./Relationship";

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

export const emptyHuman: Human = {
  id: "",
  created: 0,
  username: "",
  userid: "",
  phoneNumber: "",
  pushToken: "",
  pausePushNotifs: true,
  recentLocation: "",
  recoveryEmail: "",
};
