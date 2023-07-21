import { isNumber } from './isPrimitive'
import { toType } from './toType'

export function length(collection: any, { includeString = false } = {}) {
    try {
        // Object.keys converts string to Array
        if ((!includeString && typeof collection === 'string'))
            return 0

        if (toType(collection) !== 'object' && isNumber(collection?.length))
            return collection.length

        if (toType(collection) !== 'object' && isNumber(collection?.size))
            return collection.size

        return Object.keys(collection).length
    }
    catch {
        return 0
    }
}
