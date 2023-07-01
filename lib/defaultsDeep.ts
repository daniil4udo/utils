/**
 * A re-export of various functions from the 'defu' package under different names.
 *
 * The 'defu' package is a tiny utility to set default values when they're undefined.
 * It's a lightweight alternative to lodash's defaultsDeep function.
 *
 * To learn more about the 'defu' package, view the documentation, or explore the code, please visit its repository at:
 * https://github.com/unjs/defu
 *
 * @module
 * @see {@link https://github.com/unjs/defu}
 *
s {Function} defaultsDeep - The defu function from the 'defu' package.
s {Function} createDefaultsDeep - The createDefu function from the 'defu' package.
s {Function} defaultsDeepFn - The defuFn function from the 'defu' package.
s {Function} defaultsDeepArrayFn - The defuArrayFn function from the 'defu' package.
 *
 * @example
 * import { defaultsDeep } from '@democrance/utils';
 *
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { b: 3, c: 4 };
 *
 * const result = defaultsDeep(obj1, obj2); // Outputs: { a: 1, b: 2, c: 4 }
 */
export {
    defu as defaultsDeep,
    createDefu as createDefaultsDeep,
    defuFn as defaultsDeepFn,
    defuArrayFn as defaultsDeepArrayFn,
} from 'defu'
