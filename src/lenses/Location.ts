import { lens } from "shonad";
import { Location } from "../types";
import { Geopoint } from "../types/Geopoint";
import * as GLens from "./Geopoint";
import { maybe } from "shonad";

export const geopoint = lens.prop<Geopoint>("geopoint");
export const name = lens.prop<string>("name");

export const location = lens.prop<Location>("location");

export const latitude = lens.compose<any, maybe.Maybe<number>>(
  location,
  lens.optional({}),
  geopoint,
  lens.optional({}),
  GLens.latitude
);
export const longitude = lens.compose<any, maybe.Maybe<number>>(
  location,
  lens.optional({}),
  geopoint,
  lens.optional({}),
  GLens.longitude
);
