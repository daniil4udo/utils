export type Primitive =
    | 'boolean'
    | 'number'
    | 'bigint'
    | 'string'
    | 'symbol'
    | 'undefined'
    | 'null'

export type PrimitiveLike =
    | 'date'
    | 'regexp'

export type NonPrimitive =
    | 'arguments'
    | 'buffer'
    | 'object'
    | 'array'
    | 'error'
    | 'function'
    | 'generatorfunction'
    | 'map'
    | 'weakmap'
    | 'set'
    | 'weakset'
    | 'int8array'
    | 'uint8array'
    | 'uint8clampedarray'
    | 'int16array'
    | 'uint16array'
    | 'int32array'
    | 'uint32array'
    | 'float32array'
    | 'float64array'

export type AllTypes = Primitive & PrimitiveLike & NonPrimitive

/**
 *
 * @param {any} input - Input value to get type from
 * @returns {AllTypes} – Type representation as string
 */
export function toType(input: any): AllTypes {
    const protoName = {}.toString.call(input).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    if (protoName === 'object' || protoName === 'arguments')
        return protoName as AllTypes
    const ctorName = input?.constructor
        ? input.constructor.name.toLowerCase()
        : ''
    return ((ctorName || protoName)) as AllTypes
}
