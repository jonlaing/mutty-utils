import { Bulletin } from "../types/Bulletin";
import { Dog } from "../types/Dog";
import { EmbedField, Liked, TypedContainer } from "../types/FirestoreBaseTypes";
import { GUID } from "../types/GUID";
import { Post } from "../types/Post";
export declare const fillList: (length: number, arr: any[]) => any;
interface LikedDogContent {
    contentId: GUID;
    dog: Dog;
    liked: boolean;
    likes: number;
    comments?: number;
}
export declare type MultiDoc<T extends LikedDogContent> = T & {
    dogs: Dog[];
};
export declare function collectMultiDocs<T extends LikedDogContent>(ds: T[]): MultiDoc<T>[];
export declare type MultiPost = MultiDoc<Liked<EmbedField<Post, "dog", Dog>>>;
export declare type MultiBulletin = MultiDoc<Liked<EmbedField<Bulletin, "dog", Dog>>>;
export declare function intersperseBulletins(posts: MultiPost[], bulletins: MultiBulletin[]): (TypedContainer<{
    post: MultiPost;
}, "type"> | TypedContainer<{
    bulletin: MultiBulletin;
}, "type">)[];
export {};
