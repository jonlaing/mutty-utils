import * as R from "ramda";
export const not = R.curry((f: (x: any) => boolean, vals: any) => !f(vals));

export const or = R.curry(
  (f: (x: any) => boolean, g: (x: any) => boolean, v: any) => f(v) || g(v)
);

export const and = R.curry(
  (f: (x: any) => boolean, g: (x: any) => boolean, v: any) => f(v) && g(v)
);

export const prop = R.curry(
  <T extends Record<string, any>, K extends keyof T>(k: K, obj: T): T[K] =>
    obj[k]
);

export const propNotIncluded = R.curry(
  <T extends Record<string, any>, K extends keyof T, A extends T[K]>(
    arr: A[],
    key: K,
    obj: T
  ): boolean => !arr.includes(obj[key])
);

export const modify = R.curry(
  (
    key: string,
    f: (v: Record<string, any>) => any,
    obj: Record<string, any>
  ) => ({
    ...obj,
    [key]: f(obj),
  })
);
