import { lens } from "shonad";
import { Relationship, RelationshipType } from "../types";
export declare const relType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<RelationshipType>>;
export declare const RelationshipLensHelper: (obj: import("shonad/dist/data/Maybe").Maybe<Relationship>) => {
    user: () => string;
    type: () => string;
    id: () => string;
    created: () => number;
    dog: () => string;
};
