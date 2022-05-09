import { GUID } from "./GUID";
import { Location } from "./Location";
import { Dog } from "./Dog";
import { DocBuilder, EmbeddableFields, ProcessedDoc } from "./FirestoreBaseTypes";
export declare type PostEmbedMap = {
    dog: Dog;
};
export interface Post extends ProcessedDoc, EmbeddableFields<PostEmbedMap> {
    user: GUID;
    contentId: GUID;
    location: Location;
    locationID?: string;
    summary: string;
    image: string;
    likes: number;
    tags?: Record<string, GUID>;
}
export declare const emptyPost: Post;
export declare type PostBuilder<HasLikes extends boolean = true> = HasLikes extends true ? DocBuilder<Post> : DocBuilder<Omit<Post, "likes">>;
