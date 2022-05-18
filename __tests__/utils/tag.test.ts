import { Dog } from "../../src/types/Dog";
import {
  extractTaggedDogs,
  lastTag,
  matchTag,
  splitTags,
  tagifyDog,
} from "../../src/utils/tag";

describe("tag utils", () => {
  const dogs: Dog[] = [
    { id: "abc", fullName: "Drippy McDrop", pics: [], summary: "", created: 0 },
    { id: "spsp", fullName: "Bill's dog$$", pics: [], summary: "", created: 0 },
    { id: "def", fullName: "Poopy Pants", pics: [], summary: "", created: 0 },
    { id: "sdf", fullName: "Dumbo Farts", pics: [], summary: "", created: 0 },
  ];

  describe("matchTag", () => {
    it("should match one tag", () => {
      const match = matchTag("blah @hello blah");
      expect(match).toHaveLength(1);
      expect(match[0]).toBe("@hello");
    });
    it("should match many tags", () => {
      const match = matchTag("blah @hello asdfsad @bye asoidhf id fsodih sd");
      expect(match).toHaveLength(2);
      expect(match[0]).toBe("@hello");
      expect(match[1]).toBe("@bye");
    });
  });

  describe("lastTag", () => {
    it("should find tag", () => {
      const tag = lastTag("@blah");
      expect(tag).toBe("@blah");
    });

    it("should not find tag in beginning", () => {
      const tag = lastTag("@blah asoidhf");
      expect(tag).toBeUndefined();
    });

    it("should find only one tag", () => {
      const tag = lastTag("@blah asoidhf diosd @sdfosid aoidsf @hello");
      expect(tag).toBe("@hello");
    });
  });

  describe("tagifyDog", () => {
    it("removes white space", () => {
      const tag = tagifyDog(dogs[0]);
      expect(tag).toBe("@DrippyMcDrop");
    });

    it("removes symbols", () => {
      const tag = tagifyDog(dogs[1]);
      expect(tag).toBe("@Billsdog");
    });
  });

  describe("extractTaggedDogs", () => {
    it("should find one dog", () => {
      const tagged = extractTaggedDogs("oaisdh @DrippyMcDrop asdfs", dogs);
      expect(tagged).toHaveLength(1);
      expect(tagged[0]).toStrictEqual(dogs[0]);
    });

    it("should find many dogs", () => {
      const tagged = extractTaggedDogs(
        "asdf @DrippyMcDrop asdfsdf @Billsdog",
        dogs
      );
      expect(tagged).toHaveLength(2);
      expect(tagged[0]).toStrictEqual(dogs[0]);
      expect(tagged[1]).toStrictEqual(dogs[1]);
    });

    it("should not find bad tags", () => {
      const tagged = extractTaggedDogs(
        "asdf @DrippyMcDrop asdfsdf @asosidhf asdfs",
        dogs
      );
      expect(tagged).toHaveLength(1);
      expect(tagged[0]).toStrictEqual(dogs[0]);
    });
  });

  describe("splitTags", () => {
    it("should split one tag", () => {
      const s = splitTags("@PoopyPants");
      expect(s).toHaveLength(1);
      expect(s[0]).toStrictEqual({ tag: "@PoopyPants" });
    });

    it("should split one tag from other text", () => {
      const s = splitTags("@PoopyPants abc");
      expect(s).toHaveLength(2);
      expect(s[0]).toStrictEqual({ tag: "@PoopyPants" });
      expect(s[1]).toBe(" abc");
    });

    it("should split one tag in the middle", () => {
      const s = splitTags("asdf @PoopyPants asdf");
      expect(s).toHaveLength(3);
      expect(s[0]).toBe("asdf ");
      expect(s[1]).toStrictEqual({ tag: "@PoopyPants" });
      expect(s[2]).toBe(" asdf");
    });

    it("should split one tag at the end", () => {
      const s = splitTags("asdf @PoopyPants");
      expect(s).toHaveLength(2);
      expect(s[0]).toBe("asdf ");
      expect(s[1]).toStrictEqual({ tag: "@PoopyPants" });
    });

    it("should split many tags", () => {
      const s = splitTags("asdf @PoopyPants asdf @DrippyMcDrop asdf");
      expect(s).toHaveLength(5);
      expect(s[0]).toBe("asdf ");
      expect(s[1]).toStrictEqual({ tag: "@PoopyPants" });
      expect(s[2]).toBe(" asdf ");
      expect(s[3]).toStrictEqual({ tag: "@DrippyMcDrop" });
      expect(s[4]).toBe(" asdf");
    });
  });
});
