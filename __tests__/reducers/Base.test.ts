import { dict, lens, list } from "shonad";

import {
  adjustList,
  appendList,
  appendListUniqBy,
  appendListWith,
  prependList,
  prependListUniqBy,
  prependListWith,
} from "../../src/reducers/Base";
import { LikedDoc } from "../../src/types";

interface Doc extends LikedDoc {
  val: number;
}
interface State {
  list: Doc[];
  prop: number;
}
const state: State = {
  list: [
    { id: "a", val: 1, likes: 0, liked: false, created: 0 },
    { id: "sdf", val: 2, likes: 1, liked: true, created: 0 },
    { id: "aed", val: 9, likes: 3, liked: false, created: 0 },
  ],
  prop: 2,
};
describe("Base", () => {
  describe("adjustList", () => {
    it("maps a function over the state", () => {
      const reducer = adjustList(
        (a) => list.map(dict.merge({ val: a })),
        lens.prop<Doc[]>("list")
      );
      const newState = reducer(state, { payload: 5, type: "adsf" });
      expect(newState.list[0].val).toBe(5);
    });
  });
  describe("prependListWith", () => {
    it("prepends a list with a function", () => {
      const reducer = prependListWith<Doc>(
        list.map(dict.merge({ created: 3 })),
        lens.prop("list")
      );
      const newState = reducer(state, {
        payload: { id: "asd", val: 5, likes: 3, liked: false, created: 0 },
        type: "asdf",
      });

      expect(newState.list[0].val).toBe(5);
      expect(newState.list[1].created).toBe(3);
    });
  });

  describe("appendListWith", () => {
    it("appends a list with a function", () => {
      const reducer = appendListWith<Doc>(
        list.map(dict.merge({ created: 3 })),
        lens.prop("list")
      );
      const newState = reducer(state, {
        payload: { id: "asd", val: 5, likes: 3, liked: false, created: 0 },
        type: "asdf",
      });

      expect(newState.list[3].val).toBe(5);
      expect(newState.list[0].created).toBe(3);
    });
  });

  describe("prependList", () => {
    it("prepends a list", () => {
      const reducer = prependList(lens.prop("list"));
      const newState = reducer(state, {
        payload: { id: "asd", val: 5, likes: 3, liked: false, created: 0 },
        type: "asdf",
      });

      expect(newState.list[0].val).toBe(5);
      expect(newState.list[1].created).toBe(0);
    });
  });

  describe("appendList", () => {
    it("appends a list", () => {
      const reducer = appendList(lens.prop("list"));
      const newState = reducer(state, {
        payload: { id: "asd", val: 5, likes: 3, liked: false, created: 0 },
        type: "asdf",
      });

      expect(newState.list[3].val).toBe(5);
      expect(newState.list[0].created).toBe(0);
    });
  });

  describe("prependListUniq", () => {
    it("prepends a list", () => {
      const reducer = prependListUniqBy(
        dict.getUnsafe("id"),
        lens.prop("list")
      );
      const newState = reducer(state, {
        payload: { id: "aed", val: 9, likes: 3, liked: false, created: 0 },
        type: "asdf",
      });

      expect(newState.list[0].val).toBe(9);
      expect(newState.list.length).toBe(3);
    });
  });

  describe("appendList", () => {
    it("appends a list", () => {
      const reducer = appendListUniqBy(dict.getUnsafe("id"), lens.prop("list"));
      const newState = reducer(state, {
        payload: { id: "asd", val: 5, likes: 3, liked: false, created: 0 },
        type: "asdf",
      });

      expect(newState.list[3].val).toBe(5);
      expect(newState.list[0].created).toBe(0);
    });
  });
});
