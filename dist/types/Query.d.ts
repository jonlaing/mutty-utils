import { Query } from "./Firestore";
export declare type QueryConstraintSyncFn<Q extends Query = Query> = (q: Q) => Q;
