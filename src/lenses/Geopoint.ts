import { lens } from "shonad";

export const latitude = lens.prop<number>("latitude");
export const longitude = lens.prop<number>("longitude");
