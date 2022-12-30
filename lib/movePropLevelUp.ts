import toFastProperties from 'to-fast-properties'

import { deepClone } from './deepClone'
import { toType } from './toType'

/**
 * Moves propertyName value to the same level of parentObject
 * @param parentObject
 * @param propertyName
 *
 * const fakeObj = {
 *      poodle: {
 *          first: {
 *              hey: 'you'
 *          },
 *          second: 'meAgain'
 *      },
 *      person: {
 *          t: 'test
 *      }
 * };
 *
 * const newObj = movePropLevelUp(fakeObj, 'poodle');
 *
 * newObj results into:
 * {
 *     "person": {
 *         "t": [
 *             {
 *                 "a": "b"
 *             }
 *         ]
 *     },
 *     "first": {
 *         "hey": "you"
 *     },
 *     "second": "meAgain"
 * }
 */
export function movePropLevelUp<T extends object>(parentObject: T, propertyName: keyof T) {
    if (toType(parentObject) !== 'object')
        return parentObject

    if (propertyName in parentObject) {
        Object.assign(parentObject, deepClone(parentObject[propertyName]))
        delete parentObject[propertyName]
    }
    return toFastProperties(parentObject)
}
