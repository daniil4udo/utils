export function keyBy(a: readonly any[] = [], k?: string | ((...args) => string)) {
    const o = {}
    const l = a.length

    for (let i = 0; i < l; i++) {
        if (typeof k === 'function')
            o[k(a[i])] = a[i]

        else
            o[k ? a[i][k] : a[i]] = a[i]
    }

    return o
}
