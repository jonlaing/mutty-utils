import { TypedContainer } from "../types/FirestoreBaseTypes";
import { LikedDogContent, MultiBulletin, MultiDoc, MultiPost } from "../types/MultiDoc";
export declare const fillList: (length: number, arr: any[]) => any;
export declare function collectMultiDocs<T extends LikedDogContent>(ds: T[]): MultiDoc<T>[];
export declare function intersperseBulletins(posts: MultiPost[], bulletins: MultiBulletin[]): (TypedContainer<{
    post: MultiPost;
}, "type"> | TypedContainer<{
    bulletin: MultiBulletin;
}, "type">)[];
