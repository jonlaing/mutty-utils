export interface Location {
  geopoint?: {
    latitude: number;
    longitude: number;
  };
  name?: string | null;
}
