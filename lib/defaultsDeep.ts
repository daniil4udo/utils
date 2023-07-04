/**
 * The 'defu' package is a tiny utility to set default values when they're undefined.
 * It's a lightweight alternative to lodash's defaultsDeep function.
 *
 * @see {@link https://github.com/unjs/defu | defu} for more about the functions and their behaviors.
 *
 * @exports
 * @function defaultsDeep
 * @function createDefaultsDeep
 * @function defaultsDeepFn
 * @function defaultsDeepArrayFn
 *
 * @example
 * ```ts
 * import { defaultsDeep } from '@democrance/utils';
 *
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { b: 3, c: 4 };
 *
 * const result = defaultsDeep(obj1, obj2);
 * console.log(result); // Outputs: { a: 1, b: 2, c: 4 }
 * ```
 * @public
 */
export {
    defu as defaultsDeep,
    createDefu as createDefaultsDeep,
    defuFn as defaultsDeepFn,
    defuArrayFn as defaultsDeepArrayFn,
} from 'defu'
