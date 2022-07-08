import { dict, lens } from "shonad";
import { maybe } from "shonad";

import {
  GUID,
  MultiPost,
  Post,
  Video,
  emptyMultiPost,
  emptyPost,
} from "../types";

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

export const PostLensHelper = dict.makeDictHelper<Post>(emptyPost);
export const MultiPostLensHelper =
  dict.makeDictHelper<MultiPost>(emptyMultiPost);
