/**
 * Type alias to get the length of an array.
 *
 * @template T - The type of the array.
 * @typedef {T['length']} Length
 */
type Length<T extends any[]> = T['length']

export function splitByIndex<T extends unknown[]>(arr: T, i: Length<T> = 0) {
    const x = arr.slice(0)
    const y = x.splice(i)
/**
 * Splits an array at a specific index into two separate arrays.
 *
 * @template T - The type of the elements.
 *
 * @function splitByIndex
 * @param {T[]} arr - The array to split.
 * @param {Length<T>} [splitIndex=0] - The index at which to split the array.
 * @returns {[T[], T[]]} An array of two arrays - the first one is the part before the index and the second one is the part after (and including) the index.
 *
 * @example
 * splitByIndex([1, 2, 3, 4, 5], 2); // Outputs: [[1, 2], [3, 4, 5]]
 */

    return [ x, y ]
}
