import * as R from "ramda";

export const nameList = (ss: string[]): string => {
  if (ss.length === 0) return "";
  if (ss.length === 1) return ss[0];

  const [ultName, penUltName, ...names] = R.reverse(ss);
  const listEnd = `${penUltName} & ${ultName}`;
  return R.join(", ", R.reverse([listEnd, ...names]));
};

export const titleCase = R.ifElse(
  R.isNil,
  R.always(undefined),
  R.pipe(R.split(""), R.adjust(0, R.toUpper), R.join(""))
) as (x: string | undefined) => string | undefined;
