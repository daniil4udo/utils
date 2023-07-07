import type { AnyFn, Memoized, Options } from 'micro-memoize'

import memoize from 'micro-memoize'

import { deepEqual } from './deepEqual'

/**
 * Creates a memoized version of a function using deep equality comparison for arguments.
 * This is beneficial when the function is often called with the same object arguments (or deep equal objects),
 * and the computation of the function is expensive.
 *
 * @module micro-memoize
 * @see {@link https://github.com/planttheidea/micro-memoize/}
 *
 * @typeParam Fn - The function to be memoized. This function can take any number of arguments of any type.
 * @param fn - The function to be memoized.
 * @param options - Optional configuration object for `micro-memoize`.
 *
 * @returns A memoized version of the input function, with the custom cache strategy.
 *
 * @example
 * ```ts
 * import { memoizeDeep } from '@democrance/utils';
 *
 * function expensiveFunction(arg1, arg2) {
 *   // Expensive computation here...
 *   return result;
 * }
 *
 * const memoizedExpensiveFunction = memoizeDeep(expensiveFunction);
 *
 * // Call it with some arguments
 * memoizedExpensiveFunction({ a: 'some' }, { b: 'arguments' });
 *
 * // Call it again with deep equal arguments (this will use the cached result)
 * memoizedExpensiveFunction({ a: 'some' }, { b: 'arguments' });
 * ```
 * @public
 */
export function memoizeDeep<Fn extends AnyFn>(fn: Fn | Memoized<Fn>, options?: Options<Fn>) {
    return memoize(fn, {
        ...options,
        isEqual: deepEqual,
    })
}

/**
 * Creates a memoized version of a function, with a cache that only stores the result of the last invocation.
 * This is useful when the function is often called with the same arguments, and the computation of the function is expensive.
 *
 * The function uses a simple key-value pair for caching where the key is based on the argument(s) passed to the function.
 * The cache only remembers the latest invocation and doesn't remember the previous invocation when a new argument is passed.
 *
 * @module micro-memoize
 * @see {@link https://github.com/planttheidea/micro-memoize/}
 *
 * @typeParam Fn - The function to be memoized. This function can take any number of arguments of any type.
 * @param fn - The function to be memoized.
 * @param options - Optional configuration object for `micro-memoize`.
 *
 * @returns A memoized version of the input function, with the custom cache strategy.
 *
 * @example
 * ```ts
 * import { memoizeLast } from 'democrance/utils';
 *
 * function expensiveFunction(arg1, arg2) {
 *   // Expensive computation here...
 *   return result;
 * }
 *
 * const memoizedExpensiveFunction = memoizeLast(expensiveFunction);
 *
 * // Call it with some arguments
 * memoizedExpensiveFunction('some', 'arguments');
 *
 * // Call it with different arguments (this will compute the result and update the cache)
 * memoizedExpensiveFunction('different', 'arguments');
*
* // Call it again with the same arguments (this will compute it again)
* memoizedExpensiveFunction('some', 'arguments');
*
 * ```
 * @public
 */
export function memoizeLast<Fn extends AnyFn>(fn: Fn | Memoized<Fn>, options?: Options<Fn>) {
    return memoize(fn, {
        ...options,
        maxSize: 1,
    })
}

export { memoize }
