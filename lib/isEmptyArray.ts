import { hasValue } from './hasValue'

/**
 *
 * Check if given Array or nested Arrays are empty
 *
 * @param {any[]} arr - Array to check for emptiness
 * @param {Options} opts – Options object
 * @param {boolean} opts.recursive – Option's property that determines weather we should check array recursively or just top-level values
 * @param {(value: any) => boolean} opts.comparator – Option's comparator functions
 *
 * @returns
 */
interface Options {
    recursive?: boolean;
    comparator?: (value: any) => boolean;
}
export function isEmptyArray(arr, opts: Options = {}) {
    if (arr == null)
        return true

    if (Array.isArray(arr)) {
        if (arr.length === 0)
            return true

        const {
            recursive = true,
            comparator = hasValue,
        } = opts

        let isEmpty = true
        if (arr.length > 0) {
            let { length } = arr
            while (length--) {
                isEmpty = recursive && Array.isArray(arr[length])
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
