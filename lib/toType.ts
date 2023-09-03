import type { AnyTypesName } from '../types'

const toString = ({}).toString

/**
 * Takes any JavaScript value as input and returns its type as a string.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @function toType
 * @param {any} input - The input value for which to get the type.
 * @returns {AnyTypesName} - The type of the input value, represented as a string.
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
export function toType(input: unknown): AnyTypesName {
    const [ , protoName ] = toString.call(input).match(/\s([a-zA-Z]+)/) as RegExpMatchArray

    if (protoName === 'Object' || protoName === 'Arguments')
        return protoName.toLowerCase() as AnyTypesName

    const ctrName = input?.constructor?.name ?? ''
    return (ctrName.toLowerCase() || protoName!.toLowerCase()) as AnyTypesName
}
