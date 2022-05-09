import { GUID } from "./GUID";
export interface Advertiser {
    id?: GUID;
    name: string;
    location: Location;
    pics: string[];
}
