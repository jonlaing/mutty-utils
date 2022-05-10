import moment from "moment";

export type Timestamp = number;

export namespace Timestamp {
  export function now(): Timestamp {
    return moment(moment.now()).unix();
  }
}
