import { lens } from "shonad";
import { maybe } from "shonad";
import { MultiPost, Post, Video } from "../types";
export declare namespace post {
    const contentID: lens.Lens<any, maybe.Maybe<string>>;
}
export declare const video: lens.Lens<any, maybe.Maybe<Video>>;
export declare const uri: lens.Lens<any, maybe.Maybe<string>>;
export declare const thumbnail: lens.Lens<any, maybe.Maybe<string>>;
export declare const videoUri: lens.Lens<any, maybe.Maybe<string>>;
export declare const videoThumbnail: lens.Lens<any, maybe.Maybe<string>>;
export declare const PostLensHelper: (obj: maybe.Maybe<Post>) => {
    user: () => string;
    contentId: () => string;
    location: () => {
        geopoint: () => {
            latitude: () => number;
            longitude: () => number;
        };
        name: () => Required<string | null>;
    };
    locationID: () => string;
    summary: () => string;
    image: () => string;
    video: () => {
        uri: () => string;
        thumbnail: () => string;
    };
    likes: () => number;
    tags: () => {
        [x: string]: () => string;
    };
    id: () => string;
    created: () => number;
    dog: () => string;
};
export declare const MultiPostLensHelper: (obj: maybe.Maybe<MultiPost>) => {
    location: () => {
        geopoint: () => {
            latitude: () => number;
            longitude: () => number;
        };
        name: () => Required<string | null>;
    };
    id: () => string;
    summary: () => string;
    video: () => {
        uri: () => string;
        thumbnail: () => string;
    };
    image: () => string;
    user: () => string;
    created: () => number;
    contentId: () => string;
    tags: () => {
        [x: string]: () => string;
    };
    likes: () => number;
    locationID: () => string;
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
