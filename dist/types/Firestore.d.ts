import firebase from "firebase";
import * as admin from "firebase-admin";
export declare type Firestore = firebase.firestore.Firestore | admin.firestore.Firestore;
export declare type Query = firebase.firestore.Query<DocumentData> | admin.firestore.Query<DocumentData> | firebase.firestore.CollectionReference<DocumentData> | admin.firestore.CollectionReference<DocumentData>;
export declare type DocumentData = firebase.firestore.DocumentData | admin.firestore.DocumentData;
export declare type FieldPath = firebase.firestore.FieldPath | admin.firestore.FieldPath;
