/**
 * Type alias representing JavaScript's primitive types.
 *
 * @typedef {('boolean'|'number'|'bigint'|'string'|'symbol'|'undefined'|'null')} Primitive
 */
export type Primitive =
    | 'boolean'
    | 'number'
    | 'bigint'
    | 'string'
    | 'symbol'
    | 'undefined'
    | 'null'

/**
* Type alias representing JavaScript's Date and RegExp types.
*
* @typedef {('date'|'regexp')} PrimitiveLike
*/
export type PrimitiveLike =
    | 'date'
    | 'regexp'

/**
* Type alias representing JavaScript's non-primitive types.
*
* @typedef {('arguments'|'buffer'|'object'|'array'|'error'|'function'|'generatorfunction'|'map'|'weakmap'|'set'|'weakset'|'int8array'|'uint8array'|'uint8clampedarray'|'int16array'|'uint16array'|'int32array'|'uint32array'|'float32array'|'float64array')} NonPrimitive
*/
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

/**
 * Type alias representing all types in JavaScript, including primitive, PrimitiveLike, and non-primitive types.
 *
 * @typedef {(Primitive | PrimitiveLike | NonPrimitive)} AllTypes
 */
export type AllTypes = Primitive & PrimitiveLike & NonPrimitive

/**
 * Takes any JavaScript value as input and returns its type as a string.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @function toType
 * @param {any} input - The input value for which to get the type.
 * @returns {AllTypes} - The type of the input value, represented as a string.
 *
 * @example
 * ```ts
 * import { toType } from '@democrance/utils';
 *
 * toType(123); // Outputs: 'number'
 * toType(new Date()); // Outputs: 'date'
 * toType([]); // Outputs: 'array'
 * ```
 * @public
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
