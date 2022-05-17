import { lens } from "shonad/control";
import { Location } from "../types";
import { Geopoint } from "../types/Geopoint";
export declare const geopoint: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<Geopoint>>;
export declare const name: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const location: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<Location>>;
export declare const latitude: lens.Lens<Location, number>;
export declare const longitude: lens.Lens<Location, number>;
