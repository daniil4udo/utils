import { hasValue } from './hasValue'
import { isNumber } from './isPrimitive'
import { toType } from './toType'

type Keyable = Nullable<PropertyKey> | ((...args) => string)
type InferredKey<T> = Keyable extends ((...args: any) => PropertyKey)
    ? PropertyKey
    : Keyable extends string
        ? keyof T
        : PropertyKey

function isKey(input: any): boolean {
    return typeof input === 'string' || isNumber(input) || typeof input === 'symbol'
}
/**
 * Creates an object composed of keys generated from the results of running each element of `array` through `keyOrFunction`.
 * If `keyOrFunction` is a function, it's invoked with one argument: the array element.
 * If `keyOrFunction` is a string, it's used as a property key on each element to create the returned object key.
 * If `keyOrFunction` is undefined or not provided, the array element itself is used as the key.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @template T the type of elements in the input array.
 *
 * @function keyBy
 * @param {T[]} array - The array to iterate over.
 * @param {Keyable} [keyOrFunction] - The key generation criterion. It can be a function, a string, or undefined.
 * @returns {Record<InferredKey<T>, T>} Returns the composed aggregate object.
 *
 * @example
 * ```ts
 * import { keyBy } from '@democrance/utils';
 *
 * keyBy(['a', 'b', 'c']) // Outputs: {a: 'a', b: 'b', c: 'c'}
 * keyBy([{id: 1}, {id: 2}], 'id') // Outputs: {1: {id: 1}, 2: {id: 2}}
 * keyBy([{id: 1}, {id: 2}], obj => 'prefix' + obj.id) // Outputs: {prefix1: {id: 1}, prefix2: {id: 2}}
 * ```
 * @public
 */
export function keyBy<T>(array: T[], keyOrFunction?: Keyable) {
    const keyedCollection = {} as Record<InferredKey<T>, T>
    const { length } = array

    if (hasValue(keyOrFunction) && typeof keyOrFunction !== 'function' && !isKey(keyOrFunction))
        throw new TypeError(`[keyBy] - "${toType(keyOrFunction)}" cannot be used to index your Array`)

    for (let i = 0, l = length; i < l; i++) {
        const el = array[i]

        if (typeof keyOrFunction === 'function')
            keyedCollection[keyOrFunction(el, i)] = el

        else if (typeof keyOrFunction === 'string')
            keyedCollection[el[keyOrFunction]] = el

        // If simply array if indexable values -> create object
        else if (!hasValue(keyOrFunction) && isKey(el))
            keyedCollection[el as PropertyKey] = el
    }

    return keyedCollection
}
