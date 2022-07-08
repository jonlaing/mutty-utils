import { lens } from "shonad";
import { Human } from "../types";
export declare namespace human {
    const userID: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
}
export declare const username: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const phoneNumber: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const pushToken: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const pausePushNotifs: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<boolean>>;
export declare const recoveryEmail: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const recentLocation: lens.Lens<any, import("shonad/dist/data/Maybe").Maybe<string>>;
export declare const HumanLensHelper: (obj: import("shonad/dist/data/Maybe").Maybe<Human>) => {
    username: () => string;
    userid: () => string;
    phoneNumber: () => string;
    pushToken: () => string;
    pausePushNotifs: () => boolean;
    recoveryEmail: () => string;
    recentLocation: () => string;
    id: () => string;
    created: () => number;
    relationship: () => string;
};
