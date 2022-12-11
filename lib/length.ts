import { isPrimitive } from './isPrimitive'
import { toType } from './toType'

/**
 *
 * @param collection
 */
export function length(collection: any) {
    if (isPrimitive(collection))
        return 0
    return Array.isArray(collection)
        ? collection.length
        : toType(collection) === 'set' || toType(collection) === 'map'
            ? collection.size
            : Object.keys(collection).length
}
