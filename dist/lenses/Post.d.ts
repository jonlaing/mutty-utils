import { lens } from "shonad/control";
import { maybe } from "shonad/data";
import { Video } from "../types";
export declare namespace post {
    const contentID: lens.Lens<any, maybe.Maybe<string>>;
}
export declare const video: lens.Lens<any, maybe.Maybe<Video>>;
export declare const uri: lens.Lens<any, maybe.Maybe<string>>;
export declare const thumbnail: lens.Lens<any, maybe.Maybe<string>>;
export declare const videoUri: lens.Lens<Record<string, any>, maybe.Maybe<string>>;
export declare const videoThumbnail: lens.Lens<Record<string, any>, maybe.Maybe<string>>;
