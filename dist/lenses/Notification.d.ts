import { lens } from "shonad";
import { ActionType, ContentType, Notification } from "../types/Notification";
export declare namespace notification {
    const contentID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
    const contentType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<ContentType>>;
}
export declare const from: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string[]>>;
export declare const to: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const actionType: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<ActionType>>;
export declare const read: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<boolean>>;
export declare const NotificationLensHelper: (obj: import("shonad/dist/data/Maybe").Maybe<Notification>) => {
    author: () => string;
    from: () => string[];
    to: () => string;
    contentId: () => string;
    contentType: () => string;
    actionType: () => string;
    summary: () => string;
    read: () => boolean;
    id: () => string;
    created: () => number;
};
