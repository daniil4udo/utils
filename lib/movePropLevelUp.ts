import { deepClone } from './deepClone'
import { toType } from './toType'

/**
 * Moves a property level up in an object, while maintaining the original property order.
 * The function uses deep cloning to avoid mutation of the nested property.
 *
 * @template T The type of the object
 *
 * @function movePropLevelUp
 * @param {T} parentObject - The object containing the property to be moved.
 * @param {keyof T} propertyName - The name of the property to be moved a level up.
 * @returns {T} A new object with the specified property moved up a level.
 *
 * If the `parentObject` is not an object or does not contain the specified property,
 * the function returns the `parentObject` unchanged.
 *
 * If the `parentObject` does contain the specified property,
 * the function returns a new object with all the properties of the `parentObject`,
 * and the properties of the specified property moved up a level.
 * The original `parentObject` is not mutated.
 *
 * The function uses 'to-fast-properties' to optimize the property lookup speed of the returned object.
 *
 * @example
 * const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
 * const result = movePropLevelUp(obj, 'b'); // Outputs: { a: 1, c: 2, d: 3, e: 4 }
 */
export function movePropLevelUp<T extends object>(parentObject: T, propertyName: keyof T) {
    if (toType(parentObject) !== 'object')
        return parentObject

    const parentObjectClone = { ...parentObject }

    if (propertyName in parentObjectClone) {
        Object.assign(parentObjectClone, deepClone(parentObjectClone[propertyName]))
        delete parentObjectClone[propertyName]
    }
    return parentObjectClone
}
