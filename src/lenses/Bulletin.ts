import { lens } from "shonad/control";
import { maybe } from "shonad/data";
import { Bulletin, BulletinType, Contact, GUID, Location } from "../types";

export namespace bulletin {
  export const contentID = lens.prop<GUID>("contentId");
}

export const locationIDs = lens.prop<string[]>("locationIDs");
export const title = lens.prop<string>("title");
export const description = lens.prop<string>("description");
export const canComment = lens.prop<boolean>("canComment");
export const canMessage = lens.prop<boolean>("canMessage");
export const bulletinType = lens.prop<BulletinType>("bulletinType");
export const date = lens.prop<number>("date");
export const endDate = lens.prop<number>("endDate");
export const dogFound = lens.prop<boolean>("dogFound");
export const contact = lens.prop<Contact>("contact");

const contactDefault = lens.compose<
  Record<string, Contact>,
  Record<string, string>
>(contact, lens.optional({}));

export const phone = lens.compose<any, maybe.Maybe<string>>(
  contactDefault,
  lens.prop<string>("phone")
);
export const email = lens.compose<any, maybe.Maybe<string>>(
  contactDefault,
  lens.prop<string>("email")
);
export const other = lens.compose<any, maybe.Maybe<string>>(
  contactDefault,
  lens.prop<string>("phone")
);
