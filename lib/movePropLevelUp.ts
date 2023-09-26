import toFastProperties from 'to-fast-properties'

import { deepClone } from './deepClone'
import { has } from './has'
import { isPlainObject } from './isPlainObject'

/**
 * Moves a property level up in an object, while maintaining the original property order.
 * The function uses deep cloning to avoid mutation of the nested property.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @template T The type of the object
 *
 * @function movePropLevelUp
 * @param {T} parentObject - The object containing the property to be moved.
 * @param {K} propertyName - The name of the property to be moved a level up.
 * @returns A new object with the specified property moved up a level.
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
 * ```ts
 * import { movePropLevelUp } from '@democrance/utils';
 *
 * const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
 * const result = movePropLevelUp(obj, 'b'); // Outputs: { a: 1, c: 2, d: 3, e: 4 }
 * ```
 * @public
 */
export function movePropLevelUp<T extends Record<PropertyKey, any>, K extends keyof T>(
    parentObject: T,
    propertyName: K,
) {
    if (!isPlainObject(parentObject) || !has(parentObject, propertyName))
        return parentObject

    const parentObjectClone = { ...parentObject }

    Object.assign(parentObjectClone, deepClone(parentObjectClone[propertyName]))
    delete parentObjectClone[propertyName]

    return toFastProperties(parentObjectClone) as Omit<T, K> & T[K]
}
