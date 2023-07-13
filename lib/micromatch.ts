/**
 * micromatch module
 *
 * Micromatch is a glob matching library with a variety of features.
 *
 * @module micromatch
 * @see {@link https://github.com/micromatch/micromatch|Micromatch} for further information.
 *
 * @example
 * ```ts
 * import { micromatch } from '@democrance/utils';
 *
 * console.log(micromatch(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*'])) //=> ['foo', 'bar', 'baz']
 * console.log(micromatch(['foo', 'bar', 'baz', 'qux'], ['*', '!b*'])) //=> ['foo', 'qux']
 * ```
 * @public
 */
export { default as micromatch } from 'micromatch'
