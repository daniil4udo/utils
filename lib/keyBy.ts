import type { Nullable } from './types';

import { hasValue } from './hasValue';
import { isPropertyKey } from './isPropertyKey';
import { toType } from './toType';

type KeyableFn = (...args: any) => PropertyKey;
type Keyable = Nullable<PropertyKey> | KeyableFn;
type InferredKey<T> = Keyable extends PropertyKey
    ? keyof T
    : PropertyKey;

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
export function keyBy<T extends PropertyKey | Record<PropertyKey, any>>(
    array: T[],
    keyOrFunction?: Keyable,
): Record<InferredKey<T>, T> {
    if (hasValue(keyOrFunction) && typeof keyOrFunction !== 'function' && !isPropertyKey(keyOrFunction))
        throw new TypeError(`[keyBy] - "${toType(keyOrFunction)}" cannot be used to index your Array`);

    const keyedCollection = {} as Record<InferredKey<T>, T>;

    for (let i = 0, l = array.length; i < l; i++) {
        const el = array[i] as T;

        if (typeof keyOrFunction === 'function')
            keyedCollection[keyOrFunction(el, i)] = el;

        else if (isPropertyKey(keyOrFunction) && !isPropertyKey(el))
            keyedCollection[el[keyOrFunction]] = el;

        // If simply array if indexable values -> create object
        else if (isPropertyKey(el))
            keyedCollection[el] = el;
    }

    return keyedCollection;
}
