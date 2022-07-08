import { lens } from "shonad";

import { MultiBulletin, MultiPost } from "../types/MultiDoc";

export const containerType = lens.prop<string>("type");
export const content = lens.or<any, MultiPost, MultiBulletin>(
  lens.prop<MultiBulletin>("bulletin"),
  lens.prop<MultiPost>("post")
);
