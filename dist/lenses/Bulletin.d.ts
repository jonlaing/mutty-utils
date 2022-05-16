import { lens } from "shonad/control";
import { maybe } from "shonad/data";
import { BulletinType, Contact } from "../types";
export declare namespace bulletin {
    const contentID: lens.Lens<any, maybe.Maybe<string>>;
}
export declare const locationIDs: lens.Lens<any, maybe.Maybe<string[]>>;
export declare const title: lens.Lens<any, maybe.Maybe<string>>;
export declare const description: lens.Lens<any, maybe.Maybe<string>>;
export declare const canComment: lens.Lens<any, maybe.Maybe<boolean>>;
export declare const canMessage: lens.Lens<any, maybe.Maybe<boolean>>;
export declare const bulletinType: lens.Lens<any, maybe.Maybe<BulletinType>>;
export declare const date: lens.Lens<any, maybe.Maybe<number>>;
export declare const endDate: lens.Lens<any, maybe.Maybe<number>>;
export declare const dogFound: lens.Lens<any, maybe.Maybe<boolean>>;
export declare const contact: lens.Lens<any, maybe.Maybe<Contact>>;
export declare const phone: lens.Lens<Record<string, Contact>, maybe.Maybe<string>>;
export declare const email: lens.Lens<Record<string, Contact>, maybe.Maybe<string>>;
export declare const other: lens.Lens<Record<string, Contact>, maybe.Maybe<string>>;
