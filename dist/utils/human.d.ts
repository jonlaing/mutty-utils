import { GUID, Human } from "../types";
import { Firestore } from "../types/Firestore";
export declare const validateUsername: (str: string) => string;
export declare const getByUser: (fs: Firestore, userId: GUID) => Promise<Human>;
export declare function updatePushToken(fs: Firestore, userId: GUID, pushToken: string): Promise<void | FirebaseFirestore.WriteResult>;
