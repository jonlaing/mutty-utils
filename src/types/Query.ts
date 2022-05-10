import { Query } from "./Firestore";

export type QueryConstraintSyncFn<Q extends Query = Query> = (q: Q) => Q; // for backwards compatibility
