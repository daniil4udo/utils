export function toArray<T>(arr: T | T[]): T[] {
    if (!arr)
        return []
    if (Array.isArray(arr))
        return arr
    return [ arr ]
}
