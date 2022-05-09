import moment from "moment";

export type Timestamp = number;

export function now(): Timestamp {
  return moment(moment.now()).unix();
}
