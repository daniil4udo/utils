import { toType } from './toType'

export function isTuple<T extends number, V extends number>(input: unknown): input is [T, V] {
    return Array.isArray(input) && input.length === 2
}

export function isNumber(input: unknown): input is number {
    if (typeof input === 'number')
        return input - input === 0

    if (typeof input === 'string' && input.trim() !== '')
        return Number.isFinite(+input)

    return false
};

/**
 * Determines if a given input can not be treated as a number.
 *
 * @remarks
 * This function utilizes the isNumber function to verify if the input can not be treated as a number.
 *
 * @param input - The value to check.
 * @returns True if the input can not be treated as a number, false otherwise.
 */
export function isProperNaN<T>(input: T): input is Exclude<T, number> {
    return Number.isNaN(input) || !isNumber(input)
}

export function isPlainObject(input: unknown): input is Record<PropertyKey, unknown> {
    if (input == null || toType(input) !== 'object')
        return false

    const proto = Object.getPrototypeOf(input)
    return proto === null || proto === Object.prototype
}
