import { lens } from "shonad";

import { safeLens } from "../../src/lenses/Base";

describe("Base", () => {
  describe("safeLens", () => {
    it("gets a value", () => {
      const dict = { a: 1 };
      const val = lens.view(safeLens(0, lens.prop("a")), dict);
      expect(val).toBe(1);
    });
  });
});
