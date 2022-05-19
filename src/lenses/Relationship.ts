import { lens } from "shonad";
import { RelationshipType } from "../types";

export const relType = lens.prop<RelationshipType>("type");
