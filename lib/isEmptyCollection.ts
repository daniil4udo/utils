/**
 *
 * Check if collection is empty
 * Unlike Lodash throw an error on something other the Array or Object
 *
 * @param {Array | object} collection
 */
import { length } from './length'

export function isEmptyCollection(collection: unknown): boolean {
    return length(collection) === 0
}
