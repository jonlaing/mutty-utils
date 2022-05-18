import { QueryConstraintSyncFn } from "../types/Query";
import { ProcessedDoc } from "../types/FirestoreBaseTypes";
import { DocumentData, FieldPath, Query } from "../types/Firestore";
export declare const dataToDoc: <T extends ProcessedDoc>(res: DocumentData) => T;
export declare const reduceQuery: (constraints: QueryConstraintSyncFn[], query: Query) => Query;
export declare const reduceDocs: <T extends ProcessedDoc>(q: Query) => Promise<T[]>;
export declare const reduceQueryToDocs: <T extends ProcessedDoc>(cs: QueryConstraintSyncFn[], q: Query) => Promise<T[]>;
export declare function batchField<U>(constraints: QueryConstraintSyncFn[], field: string | FieldPath, vals: U[]): QueryConstraintSyncFn[][];
export declare function batchGetByFieldWithConstraints<T extends ProcessedDoc, U = string>(query: Query, field: string | FieldPath, constraints: QueryConstraintSyncFn<Query>[], vals: U[]): Promise<T[]>;
export declare function batchGetByField<T extends ProcessedDoc, U = string>(query: Query, field: string | FieldPath, vals: U[]): Promise<T[]>;
