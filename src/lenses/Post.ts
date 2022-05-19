import { lens } from "shonad";
import { maybe } from "shonad";
import { GUID, Video } from "../types";

export namespace post {
  export const contentID = lens.prop<GUID>("contentId");
}

export const video = lens.prop<Video>("video");
export const uri = lens.prop<string>("uri");
export const thumbnail = lens.prop<string>("thumbnail");
export const videoUri = lens.compose<any, maybe.Maybe<string>>(
  video,
  lens.optional({}),
  uri
);
export const videoThumbnail = lens.compose<any, maybe.Maybe<string>>(
  video,
  lens.optional({}),
  thumbnail
);
