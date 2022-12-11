/**
 * Sort array of objects by key value
 * @param {Array} arr - Array of objects
 * @param {String} k
 * @returns {Array} - sorted array
 */
export function sortObjects(arr: Record<string, any>[] = [], k: string) {
    return arr.sort((a, b) => a[k].localeCompare(b[k]))
}
