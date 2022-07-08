import { Function } from "ts-toolbelt";
import { lens as L, func, maybe, redux } from "shonad";
import { LikedDoc, ProcessedDoc } from "../types";
declare type CaseReducer = redux.CaseReducer<any, redux.PayloadAction<any, any>>;
declare function _adjustList<T extends ProcessedDoc>(f: (payload: any) => (list: T[]) => T[]): (lens: L.Lens<any, maybe.Maybe<T[]>>) => redux.CaseReducer<any, redux.PayloadAction<any, any>>;
declare function _adjustList<T extends ProcessedDoc>(f: (payload: any) => (list: T[]) => T[], lens: L.Lens<any, maybe.Maybe<T[]>>): redux.CaseReducer<any, redux.PayloadAction<any, any>>;
/**
 * Adjusts a list in a state by applying a curried function
 *
 * @param f A curried function to be applied to the payload
 *          and then the list
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export declare const adjustList: typeof _adjustList;
declare function _prependListWith<T extends ProcessedDoc>(f: func.Function<T[], T[]>): (lens: L.Lens<any, maybe.Maybe<any>>) => CaseReducer;
declare function _prependListWith<T extends ProcessedDoc>(f: func.Function<T[], T[]>, lens: L.Lens<any, maybe.Maybe<any>>): CaseReducer;
/**
 * Prepends document from an action payload to a list in the state
 * and applies a function to the resulting list
 *
 * @param f A function to be applied to the list after having been prepended
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export declare const prependListWith: typeof _prependListWith;
/**
 * Appends document from an action payload to a list in the state
 * and applies a function to the resulting list
 *
 * @param f A function to be applied to the list after having been appended
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export declare const appendListWith: typeof _prependListWith;
/**
 * Prepends document from an action payload to a list in the state
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export declare const prependList: (lens: L.Lens<any, maybe.Maybe<any>>) => CaseReducer;
/**
 * Appends document from an action payload to a list in the state
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export declare const appendList: (lens: L.Lens<any, maybe.Maybe<any>>) => CaseReducer;
/**
 * Prepends document from an action payload to a list in the state
 * and ensures that all elements are unique
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export declare const prependListUniqBy: <A extends ProcessedDoc>(f: (a: A) => any, lens: L.Lens<any, maybe.Maybe<any>>) => CaseReducer;
/**
 * Appends document from an action payload to a list in the state
 * and ensures that all elements are unique
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
export declare const appendListUniqBy: <A extends ProcessedDoc>(f: (a: A) => any, lens: L.Lens<any, maybe.Maybe<any>>) => CaseReducer;
/**
 * Replaces the properties of an item in the list with the contents of
 * the action payload. It searches by `id` (not `contentId`)
 *
 * @param lens Lens for a list of docs in the state
 * @returns Redux CaseReducer
 */
export declare const updateListItem: <T extends ProcessedDoc>(lens: L.Lens<any, maybe.Maybe<T[]>>) => redux.CaseReducer<any, redux.PayloadAction<any, string>>;
/**
 *
 * Removes an item from a list of docs in the state. It searches by
 * `id` (not `contentId`)
 *
 * @param lens Lens for a list of docs in the state
 * @returns Redux CaseReducer
 */
export declare const removeListItem: <T extends ProcessedDoc>(lens: L.Lens<any, maybe.Maybe<T[]>>) => redux.CaseReducer<any, redux.PayloadAction<any, string>>;
declare function _updateLikesWhen<T extends LikedDoc>(pred: Function.Curry<(contentId: string, obj: T) => boolean>): (lens: L.Lens<any, maybe.Maybe<T[]>>) => redux.CaseReducer<any, redux.PayloadAction<any, string>>;
declare function _updateLikesWhen<T extends LikedDoc>(pred: Function.Curry<(contentId: string, obj: T) => boolean>, lens: L.Lens<any, maybe.Maybe<T[]>>): redux.CaseReducer<any, redux.PayloadAction<any, string>>;
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
export declare const updateLikesWhen: typeof _updateLikesWhen;
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
export declare const updateLikes: (lens: L.Lens<any, maybe.Maybe<LikedDoc[]>>) => redux.CaseReducer<any, redux.PayloadAction<any, string>>;
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
export declare const updateLikesByContentId: (lens: L.Lens<any, maybe.Maybe<(LikedDoc & {
    contentId: string;
})[]>>) => redux.CaseReducer<any, redux.PayloadAction<any, string>>;
/**
 * Updates the likes on a single doc. It checks to ensure that
 * the `id` is correct before making the change.
 *
 * @param lens Lens for a signle doc in the state
 * @returns Redux CaseReducer
 */
export declare const updateLike: <T extends LikedDoc>(lens: L.Lens<any, maybe.Maybe<T>>) => redux.CaseReducer<any, redux.PayloadAction<any, string>>;
/**
 * Replaces the value of a field in the state with the contents of
 * the action payload
 *
 * @param key Name of the field in the state
 * @returns
 */
export declare const setProp: <T>(key: string) => redux.CaseReducer<any, redux.PayloadAction<T, string>>;
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
export declare const moveItem: <T>(lens: L.Lens<any, maybe.Maybe<T[]>>) => redux.CaseReducer<any, redux.PayloadAction<any, string>>;
/**
 *
 * @param f any function you'd like to run in between
 * @returns unmodified state
 */
export declare const tap: (f: (state: any, action: any) => any) => redux.CaseReducer<any, redux.PayloadAction<any, any>>;
export declare const logAction: (title: string) => redux.CaseReducer<any, redux.PayloadAction<any, any>>;
export {};
