import _deepClone from 'rfdc'

/**
 * Creates a deep clone of the input value.
 *
 * This function first tries to clone the input using the `structuredClone` method, which is a structured clone algorithm that can create deep copies of structured data.
 * If `structuredClone` fails (throws an error), the function resorts to using a fallback `_deepClone` method.
 *
 * The function is generic and can handle inputs of any type, but the fallback `_deepClone` method will only be called if `structuredClone` throws an error.
 * If `structuredClone` doesn't throw an error, the input is assumed to be structured data and a deep copy of it is returned.
 * If `structuredClone` throws an error, it's assumed the input is not structured data and the fallback method is used.
 *
 * @see {@link https://github.com/davidmarkclements/rfdc | rfdc} for the fallback deep clone method.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/structuredClone | structuredClone} for more about the structured clone algorithm.
 *
 * @typeParam T - The type of the input and the returned value.
 *
 * @param input - The input value to clone.
 * @returns A deep clone of the input value.
 *
 * @example
 * ```ts
 * import { deepClone } from '@democrance/utils';
 *
 * const obj = { foo: { bar: { baz: 'qux' } } };
 * const clonedObj = deepClone(obj);
 * console.log(clonedObj); // Output: { foo: { bar: { baz: 'qux' } } }
 * console.log(clonedObj === obj); // Output: false (clonedObj is a deep clone of obj)
 *
 * const array = [1, [2, [3, [4]]]];
 * const clonedArr = deepClone(array);
 * console.log(clonedArr); // Output: [1, [2, [3, [4]]]]
 * console.log(clonedArr === array); // Output: false (clonedArr is a deep clone of array)
 * ```
 * @public
 */
export function deepClone<T>(input: T): T {
    try {
        return structuredClone(input)
    }
    catch {
        return _deepClone({ proto: false })(input)
    }
}
