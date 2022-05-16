import { lens } from "shonad/control";
export declare namespace human {
    const userID: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
}
export declare const username: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const phoneNumber: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const pushToken: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const pausePushNotifs: lens.Lens<Record<string, boolean>, import("shonad/dist/data/Maybe").Maybe<boolean>>;
export declare const recoveryEmail: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const recentLocation: lens.Lens<Record<string, string>, import("shonad/dist/data/Maybe").Maybe<string>>;
