import { hasValue } from './hasValue'

type Key = undefined | string | number | symbol | ((...args) => string)
type InferredKey<T> = Key extends ((...args) => string)
    ? string
    : Key extends string
        ? keyof T
        : string | number | symbol

/**
 * Creates an object composed of keys generated from the results of running each element of `a` through `k`.
 * If `k` is a function, it's invoked with one argument: the array element.
 * If `k` is a string, it's used as a property key on each element to create the returned object key.
 * If `k` is undefined or not provided, the array element itself is used as the key.
 *
 * @template T the type of elements in the input array.
 *
 * @function keyBy
 * @param {T[]} a - The array to iterate over.
 * @param {Key} [k] - The key generation criterion. It can be a function, a string, or undefined.
 * @returns {Record<InferredKey<T>, T>} Returns the composed aggregate object.
 *
 * @example
 * keyBy(['a', 'b', 'c']) // Outputs: {a: 'a', b: 'b', c: 'c'}
 * keyBy([{id: 1}, {id: 2}], 'id') // Outputs: {1: {id: 1}, 2: {id: 2}}
 * keyBy([{id: 1}, {id: 2}], obj => 'prefix' + obj.id) // Outputs: {prefix1: {id: 1}, prefix2: {id: 2}}
 */
export function keyBy<T>(a: T[], k?: Key) {
    const keyedCollection = {} as Record<InferredKey<T>, T>

    for (let i = 0, l = a.length; i < l; i++) {
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
