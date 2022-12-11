import { isPrimitive } from './isPrimitive'

export function isIterable(obj: any): boolean {
    // checks for null and undefined
    if (isPrimitive(obj))
        return false

    return typeof obj[Symbol.iterator] === 'function'
}
