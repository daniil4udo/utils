import type { Length } from 'types'

/**
 * Splits an array at a specific index into two separate arrays.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @template T - The type of the elements.
 *
 * @function splitByIndex
 * @param {T[]} array - The array to split.
 * @param {Length<T>} [splitIndex=0] - The index at which to split the array.
 * @returns {[T[], T[]]} An array of two arrays - the first one is the part before the index and the second one is the part after (and including) the index.
 *
 * @example
 * ```ts
 * import { splitByIndex } from '@democrance/utils';
 *
 * splitByIndex([1, 2, 3, 4, 5], 2); // Outputs: [[1, 2], [3, 4, 5]]
 * ```
 * @public
 */
export function splitByIndex<T>(array: T[], splitIndex: Length<T[]> = array.length): [T[], T[]] {
    // given a default value of array.length, so when no index is provided,
    // the function will return the original array as the first element in the result array,
    // and an empty array as the second element.
    if (splitIndex > array.length)
        throw new Error(`[splitByIndex] - splitIndex is out of bound`)

    const x = array.slice(0, splitIndex)
    const y = array.slice(splitIndex)

    return [ x, y ]
}
