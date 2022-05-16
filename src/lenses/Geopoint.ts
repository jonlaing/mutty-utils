import { lens } from "shonad/control";

export const latitude = lens.prop<number>("latitude");
export const longitude = lens.prop<number>("longitude");
