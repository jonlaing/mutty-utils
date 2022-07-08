import { lens, maybe } from "shonad";
import { Bulletin, BulletinType, Contact, MultiBulletin } from "../types";
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
export declare const phone: lens.Lens<any, maybe.Maybe<string>>;
export declare const email: lens.Lens<any, maybe.Maybe<string>>;
export declare const other: lens.Lens<any, maybe.Maybe<string>>;
export declare const BulletinLensHelper: (obj: maybe.Maybe<Bulletin>) => {
    user: () => string;
    contentId: () => string;
    location: () => {
        geopoint: () => {
            latitude: () => number;
            longitude: () => number;
        };
        name: () => Required<string | null>;
    };
    locationIDs: () => string[];
    title: () => string;
    description: () => string;
    canComment: () => boolean;
    canMessage: () => boolean;
    image: () => string;
    tags: () => {
        [x: string]: () => string;
    };
    likes: () => number;
    bulletinType: () => string;
    date: () => number;
    endDate: () => number;
    contact: () => {
        phone: () => string;
        email: () => string;
        other: () => string;
    };
    dogFound: () => boolean;
    id: () => string;
    created: () => number;
    dog: () => string;
};
export declare const MultiBulletinLensHelper: (obj: maybe.Maybe<MultiBulletin>) => {
    description: () => string;
    location: () => {
        geopoint: () => {
            latitude: () => number;
            longitude: () => number;
        };
        name: () => Required<string | null>;
    };
    id: () => string;
    title: () => string;
    image: () => string;
    user: () => string;
    created: () => number;
    contentId: () => string;
    locationIDs: () => string[];
    canComment: () => boolean;
    canMessage: () => boolean;
    tags: () => {
        [x: string]: () => string;
    };
    likes: () => number;
    bulletinType: () => string;
    date: () => number;
    endDate: () => number;
    contact: () => {
        phone: () => string;
        email: () => string;
        other: () => string;
    };
    dogFound: () => boolean;
    dog: () => {
        fullName: () => string;
        pics: () => string[];
        breed: () => string;
        yearBorn: () => number;
        monthBorn: () => number;
        dayBorn: () => number;
        summary: () => string;
        missing: () => string;
        verified: () => boolean;
        id: () => string;
        created: () => number;
        relationship: () => string;
    };
    liked: () => boolean;
    comments: () => number;
    dogs: () => {
        fullName: () => string;
        pics: () => string[];
        breed: () => Required<string | undefined>;
        yearBorn: () => Required<number | undefined>;
        monthBorn: () => Required<number | undefined>;
        dayBorn: () => Required<number | undefined>;
        summary: () => string;
        missing: () => Required<string | undefined>;
        verified: () => boolean | undefined;
        id: () => string;
        created: () => number;
        relationship: () => Required<string | undefined>;
    }[];
};
