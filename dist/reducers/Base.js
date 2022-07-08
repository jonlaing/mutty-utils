"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAction = exports.tap = exports.moveItem = exports.setProp = exports.updateLike = exports.updateLikesByContentId = exports.updateLikes = exports.updateLikesWhen = exports.removeListItem = exports.updateListItem = exports.appendListUniqBy = exports.prependListUniqBy = exports.appendList = exports.prependList = exports.appendListWith = exports.prependListWith = exports.adjustList = void 0;
const shonad_1 = require("shonad");
/**
 * Adjusts a list in a state by applying a curried function
 *
 * @param f A curried function to be applied to the payload
 *          and then the list
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
exports.adjustList = shonad_1.func.curry((f, lens) => shonad_1.redux.over(lens, (b) => f(b)));
/**
 * Prepends document from an action payload to a list in the state
 * and applies a function to the resulting list
 *
 * @param f A function to be applied to the list after having been prepended
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
exports.prependListWith = shonad_1.func.curry((f, lens) => (0, exports.adjustList)((a) => shonad_1.func.pipe(shonad_1.list.prepend(a), f), lens));
/**
 * Appends document from an action payload to a list in the state
 * and applies a function to the resulting list
 *
 * @param f A function to be applied to the list after having been appended
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
exports.appendListWith = shonad_1.func.curry((f, lens) => (0, exports.adjustList)((a) => shonad_1.func.pipe(shonad_1.list.append(a), f), lens));
/**
 * Prepends document from an action payload to a list in the state
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
exports.prependList = (0, exports.prependListWith)(shonad_1.func.identity);
/**
 * Appends document from an action payload to a list in the state
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
exports.appendList = (0, exports.appendListWith)(shonad_1.func.identity);
/**
 * Prepends document from an action payload to a list in the state
 * and ensures that all elements are unique
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
const prependListUniqBy = (f, lens) => (0, exports.prependListWith)(shonad_1.list.uniqBy(f), lens);
exports.prependListUniqBy = prependListUniqBy;
/**
 * Appends document from an action payload to a list in the state
 * and ensures that all elements are unique
 *
 * @param lens Lens for a list of docs in a state
 * @returns Redux CaseReducer
 */
const appendListUniqBy = (f, lens) => (0, exports.appendListWith)(shonad_1.list.uniqBy(f), lens);
exports.appendListUniqBy = appendListUniqBy;
/**
 * Replaces the properties of an item in the list with the contents of
 * the action payload. It searches by `id` (not `contentId`)
 *
 * @param lens Lens for a list of docs in the state
 * @returns Redux CaseReducer
 */
const updateListItem = (lens) => shonad_1.redux.over(lens, (b) => shonad_1.list.updateWhen(shonad_1.dict.propEq("id", b.id), b));
exports.updateListItem = updateListItem;
/**
 *
 * Removes an item from a list of docs in the state. It searches by
 * `id` (not `contentId`)
 *
 * @param lens Lens for a list of docs in the state
 * @returns Redux CaseReducer
 */
const removeListItem = (lens) => shonad_1.redux.over(lens, (id) => shonad_1.list.reject(shonad_1.dict.propEq("id", id)));
exports.removeListItem = removeListItem;
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
exports.updateLikesWhen = shonad_1.func.curry((pred, lens) => shonad_1.redux.over(lens, ({ contentId, likes, liked }) => shonad_1.list.adjustWhen(pred(contentId), shonad_1.dict.merge({ likes, liked }))));
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
exports.updateLikes = (0, exports.updateLikesWhen)(shonad_1.dict.propEq("id"));
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
exports.updateLikesByContentId = (0, exports.updateLikesWhen)(shonad_1.dict.propEq("contentId"));
/**
 * Updates the likes on a single doc. It checks to ensure that
 * the `id` is correct before making the change.
 *
 * @param lens Lens for a signle doc in the state
 * @returns Redux CaseReducer
 */
const updateLike = (lens) => shonad_1.redux.over(lens, ({ contentId, likes, liked }) => shonad_1.logic.when(shonad_1.dict.propEq("id", contentId), shonad_1.dict.merge({ likes, liked })));
exports.updateLike = updateLike;
/**
 * Replaces the value of a field in the state with the contents of
 * the action payload
 *
 * @param key Name of the field in the state
 * @returns
 */
const setProp = (key) => shonad_1.redux.set(shonad_1.lens.prop(key));
exports.setProp = setProp;
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
const moveItem = (lens) => shonad_1.redux.over(lens, ({ from, to }) => shonad_1.list.move(from, to));
exports.moveItem = moveItem;
/**
 *
 * @param f any function you'd like to run in between
 * @returns unmodified state
 */
const tap = (f) => (state, action) => {
    f(state, action);
    return state;
};
exports.tap = tap;
const logAction = (title) => (0, exports.tap)((state, action) => console.log(title, action));
exports.logAction = logAction;
//# sourceMappingURL=Base.js.map