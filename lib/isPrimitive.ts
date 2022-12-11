import { toType } from './toType'

export function isPrimitive(val: any): boolean {
    const allPrimitives = new Set([
        'boolean',
        'number',
        'bigint',
        'string',
        'symbol',
        'null',
        'undefined',
    ])

    return allPrimitives.has(toType(val))
}

export function isPrimitiveLike(val: any): boolean {
    const allPrimitivesLike = new Set([
        'date',
        'regexp',
    ])

    return isPrimitive(val) || allPrimitivesLike.has(toType(val))
}
