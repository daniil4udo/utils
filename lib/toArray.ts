import { deepClone } from './external/deepClone'
import { isIterable } from './isIterable'

/**
 * Options to configure how the `toArray` function should handle arrays.
 *
 * @interface Options
 *
 * @property {boolean} [shallow=false] - If true, returns a shallow copy of the array.
 * @property {boolean} [deep=false] - If true, returns a deep copy of the array.
 */
interface Options {
    shallow?: boolean
    deep?: boolean
}

/**
 * Converts a value into an array. If the value is already an array, it returns
 * the array as-is, a shallow copy, or a deep clone depending on the options.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @template T - The type of the elements.
 *
 * @function toArray
 * @param {T | T[]} input - The value to be converted into an array.
 * @param {Options} [options] - Options for handling arrays.
 * @returns {T[]} The value converted into an array.
 *
 * @example
 * ```ts
 * import { toArray } from '@democrance/utils';
 *
 * toArray(5); //  Outputs: [5]
 * toArray([1, 2, 3], { shallow: true }); //  Outputs: [1, 2, 3]
 * toArray([1, [2, 3]], { deep: true }); //  Outputs: [1, [2, 3]]
 * ```
 * @public
 */
export function toArray<T>(input: T | T[], options: Options = { shallow: false, deep: false }): T[] {
    if (input == null)
        return []

    if (Array.isArray(input)) {
        if (options.deep === true)
            return deepClone(input)

        if (options.shallow === true)
            return [ ...input ]

        return input
    }

    if (typeof input !== 'string' && isIterable(input))
        return [ ...input ]

    return [ input ]
}
