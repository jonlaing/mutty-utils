import { lens } from "shonad/control";
import { Dog, GUID } from "../types";
import { momentLens } from "./Timestamp";

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
