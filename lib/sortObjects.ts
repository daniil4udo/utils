/**
 * Sort array of objects by key value
 * @param {Record<any,any>[]} collection - Array of objects
 * @param {string} key
 * @returns {Record<any,any>[]} - sorted array
 */
export function sortObjects<T extends Record<any, string>>(collection: T[] = [], key: keyof T) {
    return collection.sort((a, b) => a[key].localeCompare(b[key]))
}
