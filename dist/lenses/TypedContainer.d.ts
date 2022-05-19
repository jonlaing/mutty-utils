import { lens } from "shonad";
import { MultiBulletin, MultiPost } from "../types/MultiDoc";
export declare const containerType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const content: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<MultiBulletin> | import("shonad/dist/data/Maybe").Maybe<MultiPost>>;
