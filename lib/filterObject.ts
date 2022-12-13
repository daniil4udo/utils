export function filterObject<T extends object>(object: T, cb: (value: [string, any], index: number, array: [string, any][]) => unknown) {
    return Object.fromEntries(Object.entries(object).filter(cb))
}
