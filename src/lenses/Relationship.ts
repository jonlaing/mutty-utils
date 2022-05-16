import { lens } from "shonad/control";
import { Dog, GUID, RelationshipType } from "../types";

export const relType = lens.prop<RelationshipType>("type");
