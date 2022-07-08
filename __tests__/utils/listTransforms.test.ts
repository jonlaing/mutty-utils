import { Dog, emptyDog } from "../../src/types/Dog";
import { EmbedField, Liked } from "../../src/types/FirestoreBaseTypes";
import { Post, emptyPost } from "../../src/types/Post";
import { collectMultiDocs } from "../../src/utils/listTransforms";

describe("Post", () => {
  describe("collectMultiDocs", () => {
    it("combines same content id", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: false },
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts.length).toEqual(1);
    });
    it("leaves different contentIds separate", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: false },
        { ...emptyPost, contentId: "b", dog: emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts.length).toEqual(2);
    });
    it("aggregates likes", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        {
          ...emptyPost,
          contentId: "a",
          dog: emptyDog,
          likes: 1,
          liked: false,
        },
        {
          ...emptyPost,
          contentId: "a",
          dog: emptyDog,
          likes: 2,
          liked: false,
        },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].likes).toEqual(3);
    });
    it("stays liked for different liked statuses", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: true },
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].liked).toEqual(true);
    });
    it("stays liked for true liked statuses", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: true },
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: true },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].liked).toEqual(true);
    });
    it("is not liked when none are liked", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: false },
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].liked).toEqual(false);
    });
    it("combines same dog", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: false },
        { ...emptyPost, contentId: "a", dog: emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].dogs.length).toEqual(1);
    });
    it("keeps same dog", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        {
          ...emptyPost,
          contentId: "a",
          dog: { ...emptyDog, id: "a" },
          liked: false,
        },
        {
          ...emptyPost,
          contentId: "a",
          dog: { ...emptyDog, id: "b" },
          liked: false,
        },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].dogs.length).toEqual(2);
    });
  });
});
