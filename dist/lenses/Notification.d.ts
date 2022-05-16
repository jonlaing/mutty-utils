import { lens } from "shonad/control";
import { ActionType, ContentType } from "../types/Notification";
export declare namespace notification {
    const contentID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
    const contentType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<ContentType>>;
}
export declare const from: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string[]>>;
export declare const to: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const actionType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<ActionType>>;
export declare const read: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<boolean>>;
