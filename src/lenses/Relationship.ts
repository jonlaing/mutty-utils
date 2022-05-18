import { lens } from "shonad/control";
import { RelationshipType } from "../types";

export const relType = lens.prop<RelationshipType>("type");
