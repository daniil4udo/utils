/**
 * Represents an object with string keys and values of type ObjectValue.
 *
 * @template ObjectValue - The type of values in the object.
 *
 * @interface Object
 * @property {ObjectValue} [key] - The value associated with the string key.
 */
interface Object<ObjectValue> { [key: string]: ObjectValue }

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
 * @template ObjectValue - The type of the values of the object's properties.
 *
 * @function filterObject
 * @param {Object<ObjectValue>} object - The object to filter.
 * @param {(key: keyof Object<ObjectValue>, value: ObjectValue, index: number, object: Object<ObjectValue>) => boolean} [predicate] - The function
 *   used to decide whether a property should be included in the returned object. It is called with the
 *   key of the property, the value of the property, the index of the property, and the original object.
 * @returns { { [key: string]: ObjectValue } } - The filtered object.
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
export function filterObject<ObjectValue>(
    object: Object<ObjectValue>,
    predicate?: (
        key: keyof Object<ObjectValue>,
        value: ObjectValue,
        index: number,
        object: Object<ObjectValue>
    ) => boolean,
) {
    if (typeof predicate != 'function')
        return object

    const result: { [key: string]: ObjectValue } = {}
    let key: string
    let value: ObjectValue
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
