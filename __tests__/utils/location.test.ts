import * as R from "ramda";
import {
  coordToFullID,
  coordToID,
  coordToMatrix,
  idToCoord,
} from "../../src/utils/location";

describe("location utils", () => {
  const lat = 40.6884052;
  const long = -73.9269184;
  describe("coord and ID", () => {
    it("coordToID and idToCoord to be reciprocal", () => {
      const id = coordToFullID(lat, long);
      const newCoords = idToCoord(id[0], id[1]);
      expect(newCoords[0].toFixed(7)).toBe(lat.toFixed(7));
      expect(newCoords[1].toFixed(7)).toBe(long.toFixed(7));
    });
    it("should round nearby", () => {
      const nearbyLat = 40.6858032;
      const nearbyLong = -73.9264985;
      const baseID = coordToID(lat, long);
      const nearbyID = coordToID(nearbyLat, nearbyLong);

      expect(baseID[0]).toBe(nearbyID[0]);
      expect(baseID[1]).toBe(nearbyID[1]);
    });
    it("should round not nearby", () => {
      const farLat = 40.7095115;
      const farLong = -73.9575194;
      const baseID = coordToID(lat, long);
      const farID = coordToID(farLat, farLong);

      expect(baseID[0]).not.toBe(farID[0]);
      expect(baseID[1]).not.toBe(farID[1]);
    });
  });
  describe("matrix", () => {
    it("makes square", () => {
      R.times(
        (i) =>
          expect(coordToMatrix(lat, long, i)).toHaveLength(
            (2 * i + 1) * (2 * i + 1)
          ),
        5
      );
    });
  });
});
