import { lens } from "shonad/control";
import { Location } from "../types";
import { Geopoint } from "../types/Geopoint";
export declare const geopoint: lens.Lens<Record<string, Geopoint>, import("shonad/dist/data/Maybe").Maybe<Geopoint>>;
export declare const latitude: lens.Lens<Location, number>;
export declare const longitude: lens.Lens<Location, number>;
export declare const name: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const location: lens.Lens<Record<string, Location>, import("shonad/dist/data/Maybe").Maybe<Location>>;
