import firebase from "firebase";
import * as admin from "firebase-admin";

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
