import { deepClone } from './deepClone'

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
 * @template T - The type of the elements.
 *
 * @function toArray
 * @param {T | T[]} arr - The value to be converted into an array.
 * @param {Options} [options={ shallow: false, deep: false }] - Options for handling arrays.
 * @returns {T[]} The value converted into an array.
 *
 * @example
 * toArray(5); //  Outputs: [5]
 * toArray([1, 2, 3], { shallow: true }); //  Outputs: [1, 2, 3]
 * toArray([1, [2, 3]], { deep: true }); //  Outputs: [1, [2, 3]]
 */
export function toArray<T>(arr: T | T[], options: Options = { shallow: false, deep: false }): T[] {
    if (!arr)
        return []
    if (Array.isArray(arr)) {
        if (options.shallow === true)
            return [ ...arr ]
        if (options.deep === true)
            return deepClone(arr)
        return arr
    }
    return [ arr ]
}
