/**
 *
 * Returns the elements of an object that meet the condition specified in a callback function.
 *
 * @param {object} object - Object to filter
 * @param {Function} predicate - A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 *
 * @returns {object} - Filtered object
 */
export function filterObject<T extends object>(
    object: T,
    predicate?: (
        key: keyof T,
        value: T extends ArrayLike<infer U> ? U : (T[keyof T]),
        index: number,
        array: T extends ArrayLike<infer U> ? [string, U][] : { [K in keyof T]: [K, T[K]] }[keyof T][]
    ) => unknown,
) {
    if (typeof predicate != 'function')
        return object

    const f = []
    const entries = Object.entries(object)
    let { length } = entries
    while (length--) {
        const el = entries[length]
        if (predicate(el[0], el[1], length, entries))
            f.push(el)
    }
    return Object.fromEntries(f)
}
