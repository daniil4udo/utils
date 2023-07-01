import { hasValue, isNil } from './hasValue'

/**
 * Represents options for the isEmptyArray function.
 *
 * @template T - The type of value being processed.
 *
 * @interface Options
 * @property {boolean} [recursive] - A flag indicating whether to check nested arrays recursively.
 * @property {(value: T) => boolean} [comparator] - A comparator function used to determine if an array element is considered "empty".
 */

interface Options<T> {
    recursive?: boolean
    comparator?: (value: T) => boolean
}

/**
 * Checks whether the given array is "empty". The criteria for an array being considered "empty" is that either the array itself is null/undefined,
 * the array has no elements, or all elements of the array are themselves "empty" according to the provided `comparator` function.
 * If the `recursive` option is true (the default), then nested arrays are checked recursively.
 *
 * @function isEmptyArray
 * @param {any[]} arr - The array to check.
 * @param {Options} [opts={}] - An options object.
 * @param {boolean} [opts.recursive=true] - Whether to check nested arrays recursively.
 * @param {(value: any) => boolean} [opts.comparator=hasValue] - A comparator function used to determine if an array element is considered "empty".
 * @returns {boolean} Returns true if the array is considered "empty", false otherwise.
 *
 * @example
 * isEmptyArray([1, 2, 3]) // Returns false
 * isEmptyArray([]) // Returns true
 * isEmptyArray([[], [[], []]]) // Returns true
 * isEmptyArray([[], [[], [1]]]) // Returns false
 */
export function isEmptyArray<T>(arr: T | T[] = [], opts: Options<T> = {}) {
    if (isNil(arr))
        return true

    if (Array.isArray(arr)) {
        let { length } = arr
        if (length === 0)
            return true

        const {
            recursive = true,
            comparator = hasValue,
        } = opts

        let isEmpty = true
        if (length > 0) {
            while (length--) {
                isEmpty = (recursive && Array.isArray(arr[length]))
                    ? isEmptyArray(arr[length], opts)
                    : !comparator(arr[length])

                if (!isEmpty)
                    break
            }
        }
        return isEmpty
    }

    return false
}
