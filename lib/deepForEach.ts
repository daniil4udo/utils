import { toType } from './toType'

type Fn = (value, index, array, deepPath: string, depth: number) => void

function forEachObject(object, fn: Fn, path: string, depth: number) {
    for (let index = 0, keys = Object.keys(object), len = keys.length; index < len; index++) {
        const key = keys[index]
        const deepPath = path ? `${path}.${key as string | number}` : String(key)

        // Note that we always use object[key] because it might be mutated by forEach
        fn.call(object, object[key], key, object, deepPath, depth)

        deepForEach(object[key], fn, deepPath, depth)
    }
}

function forEachArray(array, fn: Fn, path: string, depth: number) {
    for (let index = 0, len = array.length; index < len; index++) {
        const value = array[index]
        const deepPath = `${path}[${index}]`

        fn.call(array, value, index, array, deepPath, depth)

        // Note that we use array[index] because it might be mutated by forEach
        deepForEach(array[index], fn, deepPath, depth)
    }
}

export function deepForEach<Collection>(value: Collection[] | Record<string, Collection>, fn: Fn, path = '', depth = -1) {
    // eslint-disable-next-line no-param-reassign
    depth += 1

    if (Array.isArray(value))
        forEachArray(value, fn, path, depth)

    else if (toType(value) === 'object')
        forEachObject(value, fn, path, depth)
}
