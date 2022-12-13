type Length<T extends readonly any[]> = T['length']

export function splitByIndex<T extends any[]>(arr: T, i: Length<T> = 0) {
    const x = arr.slice(0)
    const y = x.splice(i)

    return [ x, y ]
}
