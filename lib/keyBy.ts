import { hasValue } from './hasValue'

type Key = undefined | string | ((...args) => string)
type InferredKey<T> = Key extends ((...args) => string)
    ? string
    : Key extends string
        ? keyof T
        : string | number | symbol

export function keyBy<T>(a: T[], k?: Key) {
    const keyedCollection = {} as Record<InferredKey<T>, T>
    const l = a.length

    for (let i = 0; i < l; i++) {
        const el = a[i]

        if (typeof k === 'function')
            keyedCollection[k(el)] = el

        else if (typeof k === 'string')
            keyedCollection[el[k]] = el

        // If simply array if indexable values -> create object
        else if (!hasValue(k) && (typeof el === 'string' || (typeof el === 'number' && Number(el) === el) || typeof el === 'symbol'))
            keyedCollection[el] = el
    }

    return keyedCollection
}

export default keyBy
