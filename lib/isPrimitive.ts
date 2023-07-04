import { toType } from './toType'

/**
 * Checks if a given input is a primitive value.
 *
 * In JavaScript, a primitive (primitive value, primitive data type) is data that
 * is not an object and has no methods. There are 7 primitive data types:
 * `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and special case `null`.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @function isPrimitive
 * @param {any} input - The input to check for being a primitive value.
 * @returns {boolean} Returns `true` if the input is a primitive value, otherwise `false`.
 *
 * @example
 * ```ts
 * import { isPrimitive } from '@democrance/utils';
 *
 * isPrimitive('Hello') // Outputs: true
 * isPrimitive({}) // Outputs: false
 * ```
 * @public
 */
export function isPrimitive(input: any): boolean {
    const allPrimitives = new Set([
        'boolean',
        'number',
        'bigint',
        'string',
        'symbol',
        'null',
        'undefined',
    ])

    return allPrimitives.has(toType(input))
}

/**
 * Checks if a given input is a primitive or primitive-like value.
 *
 * In addition to JavaScript primitive data types, Date and RegExp objects are considered
 * as primitive-like as they hold primitive values and can be immutable if their state is not changed.
 *
 * @param {any} input - The input to check for being a primitive-like value.
 * @returns {boolean} Returns `true` if the input is a primitive-like value, otherwise `false`.
 *
 * @example
 * ```ts
 * import { isPrimitiveLike } from '@democrance/utils';
 *
 * // returns true
 * isPrimitiveLike(new Date())
 *
 * // returns false
 * isPrimitiveLike({})
 * ```
 * @public
 */
export function isPrimitiveLike(input: any): boolean {
    const allPrimitivesLike = new Set([
        'date',
        'regexp',
    ])

    return isPrimitive(input) || allPrimitivesLike.has(toType(input))
}
