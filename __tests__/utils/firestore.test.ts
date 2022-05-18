import { batchField, dataToDoc, reduceDocs } from "../../src/utils/firestore";
import { Flag } from "../../src/types/Flag";
import { Query } from "../../src/types/Firestore";

describe("firestore utils", () => {
  const data = {
    id: "oaisdhf",
    data: () => ({
      userId: "oasidhf",
      contentId: "aosidhf",
      contentType: "post",
      type: "not-dog",
      created: 123,
    }),
  };

  const basicFlag = {
    id: "oaisdhf",
    userId: "oasidhf",
    contentId: "aosidhf",
    contentType: "post",
    type: "not-dog",
    created: 123,
  };

  describe("data to doc", () => {
    it("turns some firestore data into a type", () => {
      const flag = dataToDoc<Flag>(data);
      expect(flag).toStrictEqual(basicFlag);
    });

    it("flattens the created field", () => {
      const data = {
        id: "oaisdhf",
        data: () => ({
          userId: "oasidhf",
          contentId: "aosidhf",
          contentType: "post",
          type: "not-dog",
          created: { seconds: 123, nanoseconds: 0 },
        }),
      };

      const flag = dataToDoc<Flag>(data);
      expect(flag).toStrictEqual({
        id: "oaisdhf",
        userId: "oasidhf",
        contentId: "aosidhf",
        contentType: "post",
        type: "not-dog",
        created: 123,
      });
    });
  });

  describe("reduceDocs", () => {
    const get = jest.fn(() =>
      Promise.resolve({
        docs: [data],
      })
    );
    const query = { get } as unknown as Query;

    it("reduces a query into a list of types", async () => {
      const flags = await reduceDocs<Flag>(query);
      expect(flags).toHaveLength(1);
      expect(flags[0]).toStrictEqual(basicFlag);
    });
  });

  describe("batchField", () => {
    it("doesn't batch when there's less than 10", () => {
      const batch = batchField([], "blah", [1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(batch).toHaveLength(1);
    });

    it("batches when there are more than 10", () => {
      const batch = batchField(
        [],
        "blah",
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      );
      expect(batch).toHaveLength(2);
    });
  });
});
