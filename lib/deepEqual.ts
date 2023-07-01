/**
 * The deepEqual function from the 'fast-equals' package.
 *
 * This function performs a deep comparison between two values to determine if they are equivalent.
 * It considers object types, prototypes, and has a good performance profile.
 *
 * To learn more about the 'fast-equals' package, view the documentation, or explore the code, please visit its repository at:
 * https://github.com/planttheidea/fast-equals
 *
 * @module deepEqual
 * @see {@link https://github.com/planttheidea/fast-equals}
 *
 * @function
 * @name deepEqual
 *
 * @example
 * import { deepEqual } from '@democrance/utils';
 *
 * const obj1 = { a: 1, b: 2, c: { d: 4 } };
 * const obj2 = { a: 1, b: 2, c: { d: 4 } };
 *
 * deepEqual(obj1, obj2);  // Outputs: true
 */
export { deepEqual } from 'fast-equals'
