import { lens } from "shonad/control";
import { MultiBulletin, MultiPost } from "../types/MultiDoc";
export declare const containerType: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const content: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<MultiBulletin> | import("shonad/dist/data/Maybe").Maybe<MultiPost>>;
