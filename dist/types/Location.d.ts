import { Geopoint } from "./Geopoint";
export interface Location {
    geopoint?: Geopoint;
    name?: string | null;
}
