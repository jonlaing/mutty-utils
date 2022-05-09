import { Query } from "./Firestore";

export type QueryConstraintFn<Q extends Query = Query> = {
  hasDependency?: string;
  (q: Q): Promise<Q>;
};
export type QueryConstraintSyncFn<Q extends Query = Query> = (q: Q) => Q; // for backwards compatibility
