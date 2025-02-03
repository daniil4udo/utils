/**
 * This function performs a deep comparison between two values to determine if they are equivalent.
 * It considers object types, prototypes, and has a good performance profile.
 *
 * @see {@link https://github.com/planttheidea/fast-equals | fast-equals} for more about the function and its behaviors.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns A boolean indicating whether the two values are deeply equal.
 *
 * @example
 * ```ts
 * import { deepEqual } from '@democrance/utils';
 *
 * const obj1 = { a: 1, b: 2, c: { d: 4 } };
 * const obj2 = { a: 1, b: 2, c: { d: 4 } };
 *
 * console.log(deepEqual(obj1, obj2));  // Outputs: true
 * ```
 * @public
 */
export {
    circularDeepEqual,
    circularShallowEqual,
    createCustomEqual,
    deepEqual,
    sameValueZeroEqual,
    shallowEqual,
    strictCircularDeepEqual,
    strictCircularShallowEqual,
    strictDeepEqual,
    strictShallowEqual,
} from 'fast-equals';
