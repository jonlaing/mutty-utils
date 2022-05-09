import { GUID } from "../types/GUID";
import * as R from "ramda";
import { Like, Likeable } from "../types/Like";
import { batchGetByFieldWithConstraints } from "./firestore";
import { Firestore } from "../types/Firestore";

export const updateLikes = R.curry(
  (val: number, liked: boolean, docs: Likeable[], id: GUID) =>
    docs.map((d) =>
      d.id === id ? { ...d, likes: (d.likes || 0) + val, liked } : d
    )
);

export const incLikes = updateLikes(1, true);
export const decLikes = updateLikes(-1, false);

export async function getLikesByUser(
  fs: Firestore,
  userId: GUID,
  docIds: GUID[]
): Promise<Like[]> {
  return batchGetByFieldWithConstraints<Like>(
    fs.collection("likes"),
    "content",
    [(q) => q.where("user", "==", userId)],
    docIds
  );
}
