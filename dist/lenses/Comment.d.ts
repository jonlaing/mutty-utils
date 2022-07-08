import { lens } from "shonad";
import { Comment, Dog } from "../types";
export declare const dogs: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<Dog[]>>;
export declare const comments: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<number>>;
export declare namespace comment {
    const contentID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
}
export declare const CommentLensHelper: (obj: import("shonad/dist/data/Maybe").Maybe<Comment>) => {
    user: () => string;
    content: () => string;
    summary: () => string;
    likes: () => number;
    tags: () => {
        [x: string]: () => string;
    };
    id: () => string;
    created: () => number;
    dogs: () => string[];
};
