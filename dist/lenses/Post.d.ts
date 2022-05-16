import { lens } from "shonad/control";
import { maybe } from "shonad/data";
import { Video } from "../types";
export declare namespace post {
    const contentID: lens.Lens<Record<string, string>, maybe.Maybe<string>>;
}
export declare const video: lens.Lens<Record<string, Video>, maybe.Maybe<Video>>;
export declare const uri: lens.Lens<Record<string, string>, maybe.Maybe<string>>;
export declare const thumbnail: lens.Lens<Record<string, string>, maybe.Maybe<string>>;
export declare const videoUri: lens.Lens<Record<string, any>, maybe.Maybe<string>>;
export declare const videoThumbnail: lens.Lens<Record<string, any>, maybe.Maybe<string>>;
