export type Primitives =
    | boolean
    | number
    | bigint
    | string
    | symbol
    | null
    | undefined

export type PrimitiveLike =
    | RegExp
    | Date

export type PrimitiveTypes =
    | 'primitive'
    | 'boolean'
    | 'number'
    | 'bigint'
    | 'string'
    | 'symbol'
    | 'undefined'
    | 'null'

export type PrimitiveLikeTypes =
    | 'date'
    | 'regexp'

export type AllTypes =
    | 'primitive'
    | 'boolean'
    | 'number'
    | 'bigint'
    | 'string'
    | 'symbol'
    | 'null'
    | 'undefined'

    | 'object'
    | 'array'
    | 'arguments'
    | 'buffer'
    | 'function'
    | 'generatorfunction'
    | 'map'
    | 'weakmap'
    | 'set'
    | 'weakset'
    | 'regexp'
    | 'date'

export function toType(val: any): AllTypes {
    return {}.toString
        .call(val)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase()
}
