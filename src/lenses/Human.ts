import { lens } from "shonad";
import { GUID } from "../types";

export namespace human {
  export const userID = lens.prop<GUID>("userid");
}
export const username = lens.prop<string>("username");
export const phoneNumber = lens.prop<string>("phoneNumber");
export const pushToken = lens.prop<string>("pushToken");
export const pausePushNotifs = lens.prop<boolean>("pausePushNotifs");
export const recoveryEmail = lens.prop<string>("recoveryEmail");
export const recentLocation = lens.prop<string>("recentLocation");
