import { lens } from "shonad/control";
import { maybe } from "shonad/data";
import moment from "moment";

export const momentLens = lens.lens<
  maybe.Maybe<number>,
  maybe.Maybe<moment.Moment>
>(
  (m) => maybe.fmap((n) => moment.unix(n), m),
  (n: maybe.Maybe<number>, m: maybe.Maybe<moment.Moment>) => n
);
