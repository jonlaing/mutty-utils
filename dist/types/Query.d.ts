import { Query } from "./Firestore";
export declare type QueryConstraintFn<Q extends Query = Query> = {
    hasDependency?: string;
    (q: Q): Promise<Q>;
};
export declare type QueryConstraintSyncFn<Q extends Query = Query> = (q: Q) => Q;
