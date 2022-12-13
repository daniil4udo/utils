/**
 * Sort array of objects by key value
 * @param {Array} collection - Array of objects
 * @param {String} key
 * @returns {Array} - sorted array
 */
export function sortObjects<T extends Record<any, string>>(collection: T[] = [], key: keyof T) {
    return collection.sort((a, b) => a[key].localeCompare(b[key]))
}
