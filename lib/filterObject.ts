/**
 * Type definition for an object with string keys and values of a certain type
 *
 * @typedef {Object} TargetObject
 * @template T The type of the values in the object.
 */
export type TargetObject<T> = Record<PropertyKey, T>

/**
 * Predicate function type definition.
 *
 * @callback PredicateFunction
 * @template T The type of the values in the object.
 * @param {string} key - The key of the current element being processed in the object.
 * @param {T} value - The value of the current element being processed in the object.
 * @param {number} index - The index of the current element being processed in the object.
 * @param {TargetObject<T>} object - The object filterObject was called upon.
 * @return {boolean} True if the current element should be included in the filtered object; otherwise, false.
 */
export type PredicateFunction<T> = (
    key: PropertyKey,
    value: T,
    index: number,
    object: TargetObject<T>
) => boolean

/**
 * This utility function iterates over the properties of the given object and includes them in the
 * returned object if the predicate function returns `true` for the given property.
 *
 * The function is especially useful when you need to filter properties of an object based on some
 * custom condition.
 *
 * If no predicate function is provided, or if the provided predicate is not a function, the original
 * object is returned without any filtering.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @typeParam T - The type of the values in the object.
 *
 * @param object - The object to filter.
 * @param predicate - The function used to test each item of the object.
 *      This function should return `true` to keep the item, or `false` otherwise.
 *      It accepts four arguments:
 *      `key` The key of the current element being processed in the object.
 *      `value` The value of the current element being processed in the object.
 *      `index` The index of the current element being processed in the object.
 *      `object` The object `filterObject` was called upon.
 * @returns A new object with the properties that passed the test.
 *      If no properties pass the test, an empty object will be returned.
 *
 * @example
 * ```ts
 * import { filterObject } from '@democrance/utils';
 *
 * const myObj = { a: 1, b: 2, c: 3 }
 * // Filter the object to include only key-value pairs where the value is greater than 1
 * const filteredObj = filterObject(myObj, (key, value) => value > 1)
 * console.log(filteredObj) // { b: 2, c: 3 }
 * // Filter the object to include only key-value pairs where the key starts with 'a'
 * const filteredObj2 = filterObject(myObj, (key) => key.startsWith('a'))
 * console.log(filteredObj2) // { a: 1 }
 * ```
 * @public
 */
export function filterObject<T>(object: TargetObject<T>, predicate: PredicateFunction<T>): TargetObject<T> {
    if (typeof predicate !== 'function')
        return object

    const result: TargetObject<T> = {}
    let key: string
    let value: T
    let index = 0

    for (key in object) {
        if (!Object.prototype.hasOwnProperty.call(object, key))
            continue

        value = object[key]
        if (predicate(key, value, index, object))
            result[key] = value

        index++
    }

    return result
}
