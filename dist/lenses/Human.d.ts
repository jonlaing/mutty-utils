import { lens } from "shonad/control";
export declare namespace human {
    const userID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
}
export declare const username: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const phoneNumber: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const pushToken: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const pausePushNotifs: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<boolean>>;
export declare const recoveryEmail: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const recentLocation: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
