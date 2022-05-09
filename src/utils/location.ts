import * as R from "ramda";

const KM_IN_DEGREE_LAT = 110.574;
const KM_COEF_LONG = 111.32;
const PHI = 2 / KM_IN_DEGREE_LAT;

const toRad = (deg: number) => deg * (Math.PI / 180);
// const toDeg = (rad: number) => rad * (180 / Math.PI);
const LAMDA = (lat: number) => 2 / (KM_COEF_LONG * Math.cos(toRad(lat)));

export function coordToFullID(lat: number, long: number) {
  const x = (90 - lat) / PHI;
  const y = (90 - long) / LAMDA(lat);

  return [x, y];
}

export function coordToID(lat: number, long: number) {
  const [x, y] = coordToFullID(lat, long);
  return [Math.round(x), Math.round(y)];
}

export function coordToIDString(lat: number, long: number) {
  const [x, y] = coordToID(lat, long);
  return `${x}x${y}`;
}

export function idToCoord(x: number, y: number) {
  const lat = 90 - x * PHI;
  const long = 90 - y * LAMDA(lat);

  return [lat, long];
}

export function coordToMatrix(lat: number, long: number, delta: number) {
  const [x, y] = coordToID(lat, long);

  const posC = R.times(R.identity, delta + 1);
  const C = R.uniq(
    R.concat(posC, R.map(R.ifElse(R.equals(0), R.identity, R.negate), posC))
  );
  const xs = R.map(R.add(x), C);
  const ys = R.map(R.add(y), C);
  const M = R.xprod(xs, ys).map(([x, y]) => `${x}x${y}`);

  return M;
}
