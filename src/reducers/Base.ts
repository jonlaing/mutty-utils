import { Function } from "ts-toolbelt";

import { lens as L, dict, func, list, logic, maybe, redux } from "shonad";

import { LikedDoc, ProcessedDoc } from "../types";

type CaseReducer = redux.CaseReducer<any, redux.PayloadAction<any, any>>;

declare function _adjustList<T extends ProcessedDoc>(
  f: (payload: any) => (list: T[]) => T[]
): (
  lens: L.Lens<any, maybe.Maybe<T[]>>
) => redux.CaseReducer<any, redux.PayloadAction<any, any>>;
declare function _adjustList<T extends ProcessedDoc>(
  f: (payload: any) => (list: T[]) => T[],
  lens: L.Lens<any, maybe.Maybe<T[]>>
): redux.CaseReducer<any, redux.PayloadAction<any, any>>;

/**
 * Adjusts a list in a state by applying a curried function
 *
 * @param f A curried function to be applied to the payload
 *          and then the list
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export const adjustList: typeof _adjustList = func.curry(
  <T extends ProcessedDoc, A = any>(
    f: (payload: A) => (list: T[]) => T[],
    lens: L.Lens<any, maybe.Maybe<T[]>>
  ) => redux.over(lens, (b) => f(b))
);

declare function _prependListWith<T extends ProcessedDoc>(
  f: func.Function<T[], T[]>
): (lens: L.Lens<any, maybe.Maybe<any>>) => CaseReducer;
declare function _prependListWith<T extends ProcessedDoc>(
  f: func.Function<T[], T[]>,
  lens: L.Lens<any, maybe.Maybe<any>>
): CaseReducer;
/**
 * Prepends document from an action payload to a list in the state
 * and applies a function to the resulting list
 *
 * @param f A function to be applied to the list after having been prepended
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export const prependListWith: typeof _prependListWith = func.curry(
  <T extends ProcessedDoc>(
    f: func.Function<T[], T[]>,
    lens: L.Lens<any, maybe.Maybe<any>>
  ) => adjustList((a) => func.pipe<T[], T[]>(list.prepend(a), f), lens)
);

/**
 * Appends document from an action payload to a list in the state
 * and applies a function to the resulting list
 *
 * @param f A function to be applied to the list after having been appended
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export const appendListWith: typeof _prependListWith = func.curry(
  <T extends ProcessedDoc>(
    f: func.Function<T[], T[]>,
    lens: L.Lens<any, maybe.Maybe<any>>
  ) => adjustList((a) => func.pipe<T[], T[]>(list.append(a), f), lens)
);

/**
 * Prepends document from an action payload to a list in the state
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export const prependList = prependListWith(func.identity);

/**
 * Appends document from an action payload to a list in the state
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export const appendList = appendListWith(func.identity);

/**
 * Prepends document from an action payload to a list in the state
 * and ensures that all elements are unique
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export const prependListUniqBy = <A extends ProcessedDoc>(
  f: (a: A) => any,
  lens: L.Lens<any, maybe.Maybe<any>>
) => prependListWith(list.uniqBy<A>(f), lens);

/**
 * Appends document from an action payload to a list in the state
 * and ensures that all elements are unique
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export const appendListUniqBy = <A extends ProcessedDoc>(
  f: (a: A) => any,
  lens: L.Lens<any, maybe.Maybe<any>>
) => appendListWith(list.uniqBy<A>(f), lens);

/**
 * Replaces the properties of an item in the list with the contents of
 * the action payload. It searches by `id` (not `contentId`)
 *
 * @param lens Lens for a list of docs in the state
 * @returns Redux CaseReducer
 */
export const updateListItem = <T extends ProcessedDoc>(
  lens: L.Lens<any, maybe.Maybe<T[]>>
) => redux.over(lens, (b: T) => list.updateWhen(dict.propEq("id", b.id), b));

/**
 *
 * Removes an item from a list of docs in the state. It searches by
 * `id` (not `contentId`)
 *
 * @param lens Lens for a list of docs in the state
 * @returns Redux CaseReducer
 */
export const removeListItem = <T extends ProcessedDoc>(
  lens: L.Lens<any, maybe.Maybe<T[]>>
) => redux.over(lens, (id) => list.reject(dict.propEq("id", id)));

declare function _updateLikesWhen<T extends LikedDoc>(
  pred: Function.Curry<(contentId: string, obj: T) => boolean>
): (
  lens: L.Lens<any, maybe.Maybe<T[]>>
) => redux.CaseReducer<any, redux.PayloadAction<any, string>>;
declare function _updateLikesWhen<T extends LikedDoc>(
  pred: Function.Curry<(contentId: string, obj: T) => boolean>,
  lens: L.Lens<any, maybe.Maybe<T[]>>
): redux.CaseReducer<any, redux.PayloadAction<any, string>>;

/**
 * Updates the likes of an doc in a list with the contents of
 * the action payload when the predicate returns true
 *
 * Important that the payload of the action takes the form of:
 *
 * ```typescript
 * {
 *    contentId: string,
 *    likes: number,
 *    liked:
 * }
 * ```
 * @see {@link updateLikes}
 * @see {@link updateLikesByContentId}
 * @param lens Lens for a list of docs in the state
 * @returns Redux CaseReducer
 */
export const updateLikesWhen: typeof _updateLikesWhen = func.curry(
  <T extends LikedDoc>(
    pred: Function.Curry<(contentId: string, obj: T) => boolean>,
    lens: L.Lens<any, maybe.Maybe<T[]>>
  ) =>
    redux.over(lens, ({ contentId, likes, liked }) =>
      list.adjustWhen<T>(pred(contentId), dict.merge({ likes, liked }))
    )
);

/**
 * Updates the likes of an doc in a list with the contents of
 * the action payload by `id` (not `contentId`)
 *
 * Important that the payload of the action takes the form of:
 *
 * ```typescript
 * {
 *    contentId: string,
 *    likes: number,
 *    liked:
 * }
 * ```
 *
 * @param lens Lens for a list of docs in the state
 * @returns Redux CaseReducer
 */
export const updateLikes = updateLikesWhen(dict.propEq("id"));

/**
 * Updates the likes of an doc in a list with the contents of
 * the action payload by `contentId`
 *
 * Important that the payload of the action takes the form of:
 *
 * ```typescript
 * {
 *    contentId: string,
 *    likes: number,
 *    liked:
 * }
 * ```
 *
 * @param lens Lens for a list of docs in the state
 * @returns Redux CaseReducer
 */
export const updateLikesByContentId = updateLikesWhen<
  LikedDoc & { contentId: string }
>(dict.propEq("contentId"));

/**
 * Updates the likes on a single doc. It checks to ensure that
 * the `id` is correct before making the change.
 *
 * @param lens Lens for a signle doc in the state
 * @returns Redux CaseReducer
 */
export const updateLike = <T extends LikedDoc>(
  lens: L.Lens<any, maybe.Maybe<T>>
) =>
  redux.over(lens, ({ contentId, likes, liked }) =>
    logic.when(dict.propEq("id", contentId), dict.merge({ likes, liked }))
  );

/**
 * Replaces the value of a field in the state with the contents of
 * the action payload
 *
 * @param key Name of the field in the state
 * @returns
 */
export const setProp = <T>(key: string) => redux.set(L.prop<T>(key));

/**
 * Moves an item from one index to another, shifting the rest of
 * the list accordingly.
 *
 * Importantly, the paload of the action must take the form of:
 *
 * ```typescript
 * {
 *  from: number,
 *  to: number,
 * }
 * ```
 *
 * @param lens Lens for a list in a state
 * @returns
 */
export const moveItem = <T>(lens: L.Lens<any, maybe.Maybe<T[]>>) =>
  redux.over(lens, ({ from, to }) => list.move(from, to));

/**
 *
 * @param f any function you'd like to run in between
 * @returns unmodified state
 */
export const tap =
  (
    f: (state: any, action: any) => any
  ): redux.CaseReducer<any, redux.PayloadAction<any, any>> =>
  (state: any, action: any) => {
    f(state, action);
    return state;
  };

export const logAction = (title: string) =>
  tap((state: any, action: any) => console.log(title, action));
