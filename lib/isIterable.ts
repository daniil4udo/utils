/**
 * Checks if a given input is iterable.
 *
 * An object is iterable if it defines its iteration behavior, such as what values
 * are looped over in a `for..of` construct. Some built-in types, like `Array` or
 * `Map`, have a default iteration behavior, while other types (such as `Object`)
 * do not. In order to be iterable, an object must implement the `@@iterator` method.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @function isIterable
 * @param {any} input - The input to check for iterability.
 * @returns {boolean} Returns `true` if the input is iterable, otherwise `false`.
 *
 * @example
 * ```ts
 * import { isIterable } from '@democrance/utils';
 *
 * isIterable([1, 2, 3]); // Outputs: true
 * isIterable(123); // Outputs: false
 * ```
 * @public
 */
export function isIterable<T>(input: T | Iterable<T>): input is Iterable<T> {
    try {
        return typeof input[Symbol.iterator] === 'function'
    }
    catch {
        return false
    }
}
