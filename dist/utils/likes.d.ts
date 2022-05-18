/// <reference types=".pnpm/ts-toolbelt@6.15.5/node_modules/ts-toolbelt" />
import { GUID } from "../types/GUID";
import { Like, Likeable } from "../types/Like";
import { Firestore } from "../types/Firestore";
export declare const updateLikes: import("Function/Curry").Curry<(val: number, liked: boolean, docs: Likeable[], id: GUID) => (Likeable | {
    likes: number;
    liked: boolean;
    created: number;
    id: string;
})[]>;
export declare const incLikes: import("Function/Curry").Curry<(docs: Likeable[], id: string) => (Likeable | {
    likes: number;
    liked: boolean;
    created: number;
    id: string;
})[]>;
export declare const decLikes: import("Function/Curry").Curry<(docs: Likeable[], id: string) => (Likeable | {
    likes: number;
    liked: boolean;
    created: number;
    id: string;
})[]>;
export declare function getLikesByUser(fs: Firestore, userId: GUID, docIds: GUID[]): Promise<Like[]>;
