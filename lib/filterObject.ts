/**
 * Filter objects
 * @param {Array} object - Array of objects
 * @param {String} cb
 */
export function filterObject(object: Record<any, any>, cb: (value: [string, any], index: number, array: [string, any][]) => unknown) {
    return Object.fromEntries(Object.entries(object).filter(cb))
}
