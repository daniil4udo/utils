/**
 * Type definition for an object with string keys and values of a certain type
 *
 * @typedef {Object} TargetObject
 * @template T The type of the values in the object.
 */
type TargetObject<T> = Record<string, T>

/**
 * Predicate function type definition.
 *
 * @callback PredicateFunction
 * @template T The type of the values in the object.
 * @param {string} key - The key of the current element being processed in the object.
 * @param {T} value - The value of the current element being processed in the object.
 * @param {number} index - The index of the current element being processed in the object.
 * @param {TargetObject} object - The object filterObject was called upon.
 * @return {boolean} True if the current element should be included in the filtered object; otherwise, false.
 */
type PredicateFunction<T> = (
    key: string,
    value: T,
    index: number,
    object: TargetObject<T>
) => boolean

/**
 * Filters the properties of an object based on a predicate function.
 *
 * This function iterates over the properties of the given object and includes them in the returned object
 * if the predicate function returns `true` for the given property. The predicate function receives the
 * key of the property, the value of the property, the index of the property, and the original object as
 * arguments.
 *
 * If no predicate function is provided, or if the provided predicate is not a function, the original
 * object is returned without any filtering.
 *
 * Note: The type parameter `ObjectValue` is used for the values of the object's properties, and `Object<ObjectValue>` is assumed
 * to be a type that represents an object with values of type `ObjectValue`. Please replace `Object<ObjectValue>` with the correct
 * type if this assumption is incorrect.
 *
 * @template T The type of the values in the object.
 *
 * @function filterObject
 * @param {TargetObject<T>} object The object to filter.
 * @param {PredicateFunction<T>} predicate The function used to test each item of the object.
 *      This function should return `true` to keep the item, or `false` otherwise.
 *      It accepts four arguments:
 *      `key` The key of the current element being processed in the object.
 *      `value` The value of the current element being processed in the object.
 *      `index` The index of the current element being processed in the object.
 *      `object` The object `filterObject` was called upon.
 * @returns {TargetObject<T>} A new object with the properties that passed the test.
 *          If no properties pass the test, an empty object will be returned.
 * @throws {TypeError} If `predicate` is not a function.
 *
 * @example
 * const myObj = { a: 1, b: 2, c: 3 }
 * // Filter the object to include only key-value pairs where the value is greater than 1
 * const filteredObj = filterObject(myObj, (key, value) => value > 1)
 * // filteredObj is { b: 2, c: 3 }
 * // Filter the object to include only key-value pairs where the key starts with 'a'
 * const filteredObj2 = filterObject(myObj, (key) => key.startsWith('a'))
 * // filteredObj2 is { a: 1 }
 *
 */
export function filterObject<T>(
    object: TargetObject<T>,
    predicate: PredicateFunction<T>,
): TargetObject<T> {
    if (typeof predicate !== 'function')
        throw new TypeError('[filterObject] - Expected a function as the second argument')

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
