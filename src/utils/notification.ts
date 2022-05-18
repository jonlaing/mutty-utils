import { Comment } from "../types/Comment";
import { Dog } from "../types/Dog";
import { Notification, NotificationBuilder } from "../types/Notification";
import { Post } from "../types/Post";
import * as R from "ramda";
import { Friendship } from "../types/Friendship";
import { EmbedAsGUID } from "../types/FirestoreBaseTypes";
import { Human } from "../types/Human";
import { nameList } from "./strings";

export function findLikeContent(
  notif: Notification,
  posts: Post[],
  comments: Comment[]
) {
  if (notif.contentType === "post") {
    return R.find((p) => p.id === notif.contentId, posts) as Post | undefined;
  }
  return R.find((c) => c.id === notif.contentId, comments) as
    | Comment
    | undefined;
}

export function findLikeDogs(
  notif: Notification,
  content: Post | Comment,
  dogs: Dog[]
): Dog[] {
  if (notif.contentType === "post") {
    return [
      R.find<Dog>(
        (d) => !!d.id && d.id === (content as EmbedAsGUID<Post, "dog">).dog,
        dogs
      ),
    ] as Dog[];
  }
  return dogs.filter((d: Dog) =>
    (content as EmbedAsGUID<Comment, "dogs">).dogs.includes(d.id)
  );
}

export function findCommentDogs(notif: Notification, dogs: Dog[]): Dog[] {
  return dogs.filter((d) => notif.from.includes(d.id));
}

export function findFriendships(
  notif: Notification,
  friendships: Friendship[]
): Friendship[] {
  return friendships.filter(
    (f) =>
      f.status !== "rejected" &&
      notif.from.includes(f.dog2) &&
      f.dog1 === notif.contentId &&
      f.author === notif.author
  );
}

export function findFriendDogs(
  notif: Notification,
  dogs: Dog[],
  friendships: Friendship[]
): Dog[] {
  const notifDogIds = friendships
    .map(R.prop("dog2"))
    .filter((id) => notif.from.includes(id));
  return dogs.filter((d) => notifDogIds.includes(d.id));
}

export const groupLikeNotifs: (ns: Notification[]) => Notification[] = R.pipe(
  R.groupBy(R.prop("actionType")),
  R.evolve({
    like: R.pipe(
      R.groupBy<Notification>(R.prop("contentId")),
      R.values,
      R.map(
        R.reduce<Notification, Notification>(
          (acc: Notification, n) => ({
            ...n,
            ...acc,
            created: R.max(acc.created || 0, n.created),
            read: !!acc.read && n.read,
            from: [...(acc.from || []), ...n.from],
          }),
          { read: true } as Notification
        )
      )
    ),
  }),
  // @ts-ignore: pretty tired of this typing nonsense
  R.values,
  R.unnest,
  R.sortBy(R.prop("created")),
  R.reverse
);

export const stringifyNotif = (
  notif: Notification | NotificationBuilder,
  fromHuman: Human | undefined,
  fromDogs: Dog[]
) => {
  switch (notif.actionType) {
  case "like":
    if (fromHuman)
      return `@${fromHuman.username} liked your ${notif.contentType}`;
    return `Someone liked your ${notif.contentType}`;
  case "comment":
    const from =
        fromDogs.length > 0
          ? nameList(fromDogs.map((d) => d.fullName))
          : "Someone";
    return `${from} commented on your ${notif.contentType}`;
  case "friend":
    if (fromDogs.length > 0) {
      return `${nameList(
        fromDogs.map((d) => d.fullName)
      )} requested to be friends!`;
    } else {
      return "New Friend request!";
    }
  case "tag":
    return `Your dog was tagged in a ${notif.contentType}!`;
  }
};

export async function sendPushNotification(
  to: string,
  title: string,
  body: string,
  data: any
) {
  const message = {
    to,
    title,
    body,
    data,
    sound: "default",
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}
