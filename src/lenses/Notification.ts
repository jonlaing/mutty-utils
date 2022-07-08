import { dict, lens } from "shonad";

import { GUID } from "../types/GUID";
import {
  ActionType,
  ContentType,
  Notification,
  emptyNotification,
} from "../types/Notification";

export namespace notification {
  export const contentID = lens.prop<GUID>("contentId");
  export const contentType = lens.prop<ContentType>("contentType");
}
export const from = lens.prop<GUID[]>("from");
export const to = lens.prop<GUID>("to");
export const actionType = lens.prop<ActionType>("actionType");
export const read = lens.prop<boolean>("read");

export const NotificationLensHelper =
  dict.makeDictHelper<Notification>(emptyNotification);
