import { lens } from "shonad/control";
import { maybe } from "shonad/data";
import { BulletinType, Contact } from "../types";
export declare namespace bulletin {
    const contentID: lens.Lens<Record<string, string>, maybe.Maybe<string>>;
}
export declare const locationIDs: lens.Lens<Record<string, string[]>, maybe.Maybe<string[]>>;
export declare const title: lens.Lens<Record<string, string>, maybe.Maybe<string>>;
export declare const description: lens.Lens<Record<string, string>, maybe.Maybe<string>>;
export declare const canComment: lens.Lens<Record<string, boolean>, maybe.Maybe<boolean>>;
export declare const canMessage: lens.Lens<Record<string, boolean>, maybe.Maybe<boolean>>;
export declare const bulletinType: lens.Lens<Record<string, BulletinType>, maybe.Maybe<BulletinType>>;
export declare const date: lens.Lens<Record<string, number>, maybe.Maybe<number>>;
export declare const endDate: lens.Lens<Record<string, number>, maybe.Maybe<number>>;
export declare const dogFound: lens.Lens<Record<string, boolean>, maybe.Maybe<boolean>>;
export declare const contact: lens.Lens<Record<string, Contact>, maybe.Maybe<Contact>>;
export declare const phone: lens.Lens<Record<string, Contact>, maybe.Maybe<string>>;
export declare const email: lens.Lens<Record<string, Contact>, maybe.Maybe<string>>;
export declare const other: lens.Lens<Record<string, Contact>, maybe.Maybe<string>>;
