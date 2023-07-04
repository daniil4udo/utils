/**
 * Creates a memoized version of a function.
 *
 * The memoized function caches the compute result for given arguments,
 * and returns the cached result when called with the same arguments,
 * instead of recomputing the result again.
 *
 * @module fast-memoize
 * @see {@link https://github.com/caiogondim/fast-memoize.js}
 *
 * @function
 * @name memoize
 * @param {Function} fn - The function to memoize.
 * @param {Object} [options] - The options for memoization.
 * @param {Function} [options.strategy=fast-memoize.strategies.variadic] - The strategy to use for memoization.
 * @param {Function} [options.serializer=fast-memoize.serializer] - The serializer to use for the memoization cache.
 * @param {Function} [options.cache=fast-memoize.Cache] - The cache to use for storing memoization results.
 * @returns {Function} The new memoized function.
 *
 * @example
 * ```ts
 * import { memoize } from '@democrance/utils';
 *
 * function compute(a, b) {
 *   return a + b;
 * }
 *
 * const memoizedCompute = memoize(compute);
 * // This will compute the result
 * memoizedCompute(1, 2); // Outputs: 3
 * // This will return the cached result
 * memoizedCompute(1, 2); // Outputs: 3
 * ```
 * @public
 */
export { default as memoize } from 'fast-memoize'
