import * as R from "ramda";
import { QueryConstraintSyncFn } from "../types/Query";
import { ProcessedDoc } from "../types/FirestoreBaseTypes";
import { DocumentData, FieldPath, Query } from "../types/Firestore";

export const dataToDoc = <T extends ProcessedDoc>(res: DocumentData) => {
  const data = res.data();
  return {
    ...data,
    id: res.id,
    created: data?.created?.seconds || data?.created,
  } as T;
};

export const reduceQuery = (
  constraints: QueryConstraintSyncFn[],
  query: Query
) => constraints.reduce((acc, c) => c(acc), query);

export const reduceDocs = <T extends ProcessedDoc>(q: Query) =>
  q.get().then(({ docs }) => docs.map<T>(dataToDoc));

export const reduceQueryToDocs = R.pipe(reduceQuery, reduceDocs) as <
  T extends ProcessedDoc
>(
  cs: QueryConstraintSyncFn[],
  q: Query
) => Promise<T[]>;

export function batchField<U>(
  constraints: QueryConstraintSyncFn[],
  field: string | FieldPath,
  vals: U[]
): QueryConstraintSyncFn[][] {
  const fieldBatch: U[][] = vals.length < 10 ? [vals] : R.splitEvery(9, vals);
  return fieldBatch.map((vs) => {
    return [
      (q) => q.where(field, "in", vs),
      ...constraints,
    ] as QueryConstraintSyncFn[];
  });
}

export async function batchGetByFieldWithConstraints<
  T extends ProcessedDoc,
  U = string
>(
  query: Query,
  field: string | FieldPath,
  constraints: QueryConstraintSyncFn<Query>[],
  vals: U[]
): Promise<T[]> {
  if (vals.length === 0) return [];

  const promiseBatch = batchField<U>(constraints, field, vals).map(
    (extendedConstraints) => reduceQueryToDocs<T>(extendedConstraints, query)
  );
  const docBatch = await Promise.all(promiseBatch);
  const docs = R.unnest(docBatch);
  return docs;
}

export async function batchGetByField<T extends ProcessedDoc, U = string>(
  query: Query,
  field: string | FieldPath,
  vals: U[]
): Promise<T[]> {
  if (vals.length === 0) return [];

  const promiseBatch = batchField<U>([], field, vals).map((constraints) =>
    reduceQueryToDocs<T>(constraints, query)
  );
  const docBatch = await Promise.all(promiseBatch);
  const docs = R.unnest(docBatch);
  return docs;
}
