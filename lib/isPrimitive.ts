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

/**
 * Determines if a given input can be treated as a number.
 *
 * @remarks
 * This function first checks if the input type is a number.
 * If it is, it verifies if the input is not NaN by subtracting the input from itself and comparing it to 0.
 * If the input type is a string, it trims the string and checks if it can be converted to a finite number.
 *
 * @param input - The value to check.
 * @returns True if the input can be treated as a number, false otherwise.
 */
export function isNumber(input: any) {
    if (typeof input === 'number')
        return input - input === 0

    if (typeof input === 'string' && input.trim() !== '')
        return Number.isFinite(+input)

    return false
}

/**
 * Determines if a given input can not be treated as a number.
 *
 * @remarks
 * This function utilizes the isNumber function to verify if the input can not be treated as a number.
 *
 * @param input - The value to check.
 * @returns True if the input can not be treated as a number, false otherwise.
 */
export function isProperNaN(input: any) {
    return !isNumber(input)
}
