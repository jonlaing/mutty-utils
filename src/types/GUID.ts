import { v4 as uuid } from "uuid";
export type GUID = string;

export function newGUID(): GUID {
  return uuid();
}
