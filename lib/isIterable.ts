/**
 * Checks if a given input is iterable.
 *
 * An object is iterable if it defines its iteration behavior, such as what values
 * are looped over in a `for..of` construct. Some built-in types, like `Array` or
 * `Map`, have a default iteration behavior, while other types (such as `Object`)
 * do not. In order to be iterable, an object must implement the `@@iterator` method.
 *
 * @function isIterable
 * @param {any} input - The input to check for iterability.
 * @returns {boolean} Returns `true` if the input is iterable, otherwise `false`.
 *
 * @example
 * isIterable([1, 2, 3]) // Outputs: true
 * isIterable(123) // Outputs: false
 */
export function isIterable(input: any): boolean {
    try {
        return typeof input[Symbol.iterator] === 'function'
    }
    catch {
        return false
    }
}
