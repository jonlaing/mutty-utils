import { EmbedField, Liked } from "../../src/types/FirestoreBaseTypes";
import { Post } from "../../src/types/Post";
import { Dog } from "../../src/types/Dog";
import { collectMultiDocs } from "../../src/utils/listTransforms";

describe("Post", () => {
  describe("collectMultiDocs", () => {
    it("combines same content id", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: false },
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts.length).toEqual(1);
    });
    it("leaves different contentIds separate", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: false },
        { ...Post.emptyPost, contentId: "b", dog: Dog.emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts.length).toEqual(2);
    });
    it("aggregates likes", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        {
          ...Post.emptyPost,
          contentId: "a",
          dog: Dog.emptyDog,
          likes: 1,
          liked: false,
        },
        {
          ...Post.emptyPost,
          contentId: "a",
          dog: Dog.emptyDog,
          likes: 2,
          liked: false,
        },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].likes).toEqual(3);
    });
    it("stays liked for different liked statuses", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: true },
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].liked).toEqual(true);
    });
    it("stays liked for true liked statuses", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: true },
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: true },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].liked).toEqual(true);
    });
    it("is not liked when none are liked", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: false },
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].liked).toEqual(false);
    });
    it("combines same dog", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: false },
        { ...Post.emptyPost, contentId: "a", dog: Dog.emptyDog, liked: false },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].dogs.length).toEqual(1);
    });
    it("keeps same dog", () => {
      const posts: Liked<EmbedField<Post, "dog", Dog>>[] = [
        {
          ...Post.emptyPost,
          contentId: "a",
          dog: { ...Dog.emptyDog, id: "a" },
          liked: false,
        },
        {
          ...Post.emptyPost,
          contentId: "a",
          dog: { ...Dog.emptyDog, id: "b" },
          liked: false,
        },
      ];
      const collPosts = collectMultiDocs(posts);
      expect(collPosts[0].dogs.length).toEqual(2);
    });
  });
});
