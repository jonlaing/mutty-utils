import { lens, maybe } from "shonad";

import { Dog, GUID } from "../types";
import { momentLens } from "./Timestamp";

export const safeLens = <T extends maybe.Maybe<any>, U>(
  fallback: U,
  f: lens.Lens<T, maybe.Maybe<U>>
) => lens.compose<T, U>(f, lens.optional(fallback));

export const id = lens.prop<string>("id");
export const created = lens.prop<number>("created");
export const createdMoment = lens.compose(created, momentLens);

export const version = lens.prop<number>("version");

export const tags = lens.prop<Record<string, GUID>>("tags");

export const dog = lens.prop<Dog | GUID>("dog");
export const userProp = lens.prop<GUID>("user");

export const summary = lens.prop<string>("summary");
export const author = lens.prop<GUID>("author");
export const image = lens.prop<string>("image");
