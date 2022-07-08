import { dict, lens } from "shonad";

import { Relationship, RelationshipType, emptyRelationship } from "../types";

export const relType = lens.prop<RelationshipType>("type");

export const RelationshipLensHelper =
  dict.makeDictHelper<Relationship>(emptyRelationship);
