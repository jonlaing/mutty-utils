import { lens } from "shonad/control";
import { Dog, GUID } from "../types";

export const dogs = lens.prop<Dog[]>("dogs");

export const comments = lens.prop<number>("comments");

export namespace comment {
  export const contentID = lens.prop<GUID>("content");
}
