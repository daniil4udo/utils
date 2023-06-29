import { deepClone } from './deepClone'

interface Options {
    shallow?: boolean
    deep?: boolean
}

export function toArray<T>(arr: T | T[], options: Options = { shallow: false, deep: false }): T[] {
    if (!arr)
        return []
    if (Array.isArray(arr)) {
        if (options.shallow === true)
            return [ ...arr ]
        if (options.deep === true)
            return deepClone(arr)
        return arr
    }
    return [ arr ]
}
