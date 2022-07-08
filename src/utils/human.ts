import * as R from "ramda";

import { GUID, Human } from "../types";
import { Firestore } from "../types/Firestore";

export const validateUsername = R.cond([
  [R.isEmpty, R.always("none")],
  [R.pipe(R.length, R.gt(4)), R.always("tooShort")],
  [R.complement(R.test(/(^[^\s]+$)/)), R.always("badCharacters")],
  [R.T, R.always("")],
]);

export const getByUser = (fs: Firestore, userId: GUID): Promise<Human> =>
  fs
    .collection("humans")
    .where("userid", "==", userId)
    .get()
    .then((docs) =>
      docs.size > 0
        ? docs.docs[0]
        : Promise.reject("Couldn't find human with userid:" + userId)
    )
    .then((doc) => doc.data() as Human);

export async function updatePushToken(
  fs: Firestore,
  userId: GUID,
  pushToken: string
) {
  const docs = await fs
    .collection("humans")
    .where("userid", "==", userId)
    .get();

  const human = docs.docs[0];

  if (human?.data().pushToken === pushToken) {
    return;
  }

  return human?.ref.update({ pushToken });
}
