import { lens } from "shonad/control";
import { ActionType, ContentType } from "../types/Notification";
export declare namespace notification {
    const contentID: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
    const contentType: lens.Lens<Record<string, ContentType>, import("shonad/dist/data/Maybe").Maybe<ContentType>>;
}
export declare const from: lens.Lens<Record<string, string[]>, import("shonad/dist/data/Maybe").Maybe<string[]>>;
export declare const to: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const actionType: lens.Lens<Record<string, ActionType>, import("shonad/dist/data/Maybe").Maybe<ActionType>>;
export declare const read: lens.Lens<Record<string, boolean>, import("shonad/dist/data/Maybe").Maybe<boolean>>;
