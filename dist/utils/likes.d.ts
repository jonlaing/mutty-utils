/// <reference types=".pnpm/ts-toolbelt@6.15.5/node_modules/ts-toolbelt" />
import { Firestore } from "../types/Firestore";
import { GUID } from "../types/GUID";
import { Like, Likeable } from "../types/Like";
export declare const updateLikes: import("Function/Curry").Curry<(val: number, liked: boolean, docs: Likeable[], id: GUID) => (Likeable | {
    likes: number;
    liked: boolean;
    id: string;
    created: number;
})[]>;
export declare const incLikes: import("Function/Curry").Curry<(docs: Likeable[], id: string) => (Likeable | {
    likes: number;
    liked: boolean;
    id: string;
    created: number;
})[]>;
export declare const decLikes: import("Function/Curry").Curry<(docs: Likeable[], id: string) => (Likeable | {
    likes: number;
    liked: boolean;
    id: string;
    created: number;
})[]>;
export declare function getLikesByUser(fs: Firestore, userId: GUID, docIds: GUID[]): Promise<Like[]>;
