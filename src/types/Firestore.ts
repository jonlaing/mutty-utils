import firebase from "firebase";
import * as admin from "firebase-admin";

/**
 * Base types trying to make `mutty-utils` work with both `firebase`
 * and `firebase-admin`. Pretty ridiculous, but they apparently have
 * different, but very closely related types. I would love to get this
 * out of here and not need to import both libraries, but I guess
 * that's where I'm at for now.
 */

export type Firestore =
  | firebase.firestore.Firestore
  | admin.firestore.Firestore;

export type Query =
  | firebase.firestore.Query<DocumentData>
  | admin.firestore.Query<DocumentData>
  | firebase.firestore.CollectionReference<DocumentData>
  | admin.firestore.CollectionReference<DocumentData>;

export type DocumentData =
  | firebase.firestore.DocumentData
  | admin.firestore.DocumentData;

export type FieldPath =
  | firebase.firestore.FieldPath
  | admin.firestore.FieldPath;

/*
BIG IDEA


Query = State (string, Maybe<Either<Err, Res>>) () -> Promise<State (string, Maybe<Either<Err, Res>>) Maybe<Either<Err, Res>>>
FirestoreQueryState = State Query[] (string, Maybe<Either<Err, Res>>)[]

  getNext :: State FirestoreQueryState (Maybe Query)
  getNext = do
    (results, state) <- get
    let lefts = getLefts results
    if (len lefts) == 0 then
      (query, queries) = state.queryStack.pluck(isNothing)
      (_, res) = await $ runState $ query (State results ())
      if (isJust res) then
        put queries
        return res : results
      else
        getNext
    else
      return (filter isJust results)
    
*/
