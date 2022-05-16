import { lens } from "shonad/control";
import { maybe } from "shonad/data";
import moment from "moment";
export declare const momentLens: lens.Lens<maybe.Maybe<number>, maybe.Maybe<moment.Moment>>;
