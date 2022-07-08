import { DocBuilder, HasProp, ProcessedDoc } from "./FirestoreBaseTypes";
import { GUID } from "./GUID";
import { Likeable } from "./Like";

export type ContentType =
  | "none"
  | "post"
  | "comment"
  | "photo"
  | "dog"
  | "bulletin";
export type ActionType = "none" | "like" | "comment" | "friend" | "tag";

export interface Notification extends ProcessedDoc {
  author: GUID;
  from: GUID[];
  to: GUID;
  contentId: GUID;
  contentType: ContentType;
  actionType: ActionType;
  summary?: string;
  read: boolean;
}

export type NotificationBuilder = DocBuilder<Omit<Notification, "read">>;

export interface LikeNotifIface extends Likeable {
  summary?: string;
}

export type LikeNotifWDog<T> = T extends HasProp<T, "dog">
  ? LikeNotifIface & { dog: GUID }
  : LikeNotifIface & { dogs: GUID[] };

export const emptyNotification: Notification = {
  id: "",
  created: 0,
  author: "",
  from: [],
  to: "",
  contentId: "",
  contentType: "none",
  actionType: "none",
  summary: "",
  read: true,
};
