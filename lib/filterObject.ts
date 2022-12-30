export function filterObject<T extends object>(
    object: T,
    cb?: (
        key: keyof T,
        value: T extends ArrayLike<infer U> ? U : (T[keyof T]),
        index: number,
        array: T extends ArrayLike<infer U> ? [string, U][] : { [K in keyof T]: [K, T[K]] }[keyof T][]
    ) => unknown,
) {
    if (typeof cb != 'function')
        return object

    const f = []
    const entries = Object.entries(object)
    let { length } = entries
    while (length--) {
        const el = entries[length]
        if (cb(el[0], el[1], length, entries))
            f.push(el)
    }
    return Object.fromEntries(f)
}
