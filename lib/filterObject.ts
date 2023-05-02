/**
 *
 * Returns a new object containing only the key-value pairs from the input object that satisfy a given predicate function.
 * @template T - The type of the values in the input object.
 *
 * @param {O<T>} object - The input object to filter.
 * @param {(key: keyof O<T>, value: T, index: number, object: O<T>) => boolean} [predicate] - An optional function to test each key-value pair in the input object. The function is called with the key, value, index, and input object as arguments, and should return a boolean indicating whether the key-value pair should be included in the result.
 *
 * @returns {Object.<string, T>} - A new object containing only the key-value pairs from the input object that satisfy the predicate function.
 *
 * @example
 * const myObj = { a: 1, b: 2, c: 3 }
 * // Filter the object to include only key-value pairs where the value is greater than 1
 * const filteredObj = filterObject(myObj, (key, value) => value > 1)
 * // filteredObj is { b: 2, c: 3 }
 * // Filter the object to include only key-value pairs where the key starts with 'a'
 * const filteredObj2 = filterObject(myObj, (key) => key.startsWith('a'))
 * // filteredObj2 is { a: 1 }
 *
 */
interface O<T> { [key: string]: T }

export function filterObject<T>(
    object: O<T>,
    predicate?: (
        key: keyof O<T>,
        value: T,
        index: number,
        object: O<T>
    ) => boolean,
) {
    if (typeof predicate != 'function')
        return object

    const result: { [key: string]: T } = {}
    let key: string
    let value: T
    let index = 0

    for (key in object) {
        value = object[key]
        if (predicate(key, value, index, object))
            result[key] = value

        index++
    }

    return result
}
