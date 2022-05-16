import { lens } from "shonad/control";
import { GUID, Relationship } from "../types";

export const fullName = lens.prop<string>("fullName");
export const pics = lens.prop<string[]>("pics");
export const breed = lens.prop<string>("breed");
export const yearBorn = lens.prop<number>("yearBorn");
export const monthBorn = lens.prop<number>("monthBorn");
export const dayBorn = lens.prop<number>("dayBorn");
export const missing = lens.prop<GUID>("missing"); // contentID for bulletin
export const relationship = lens.prop<Relationship | GUID>("relationship");
