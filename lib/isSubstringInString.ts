import { toUpper } from './changeCase'

/**
 * Checks if a substring exists within a string in a case-insensitive manner.
 *
 * It converts both the input string and the substring to uppercase before checking,
 * making the check case-insensitive.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param str - The string in which to check for the substring. Defaults to an empty string.
 * @param subString - The substring to check for. Defaults to an empty string.
 * @returns `true` if the substring is found in the string, otherwise `false`.
 *
 * @throws {TypeError} If the input is not of type 'string'.
 *
 * @example
 * ```ts
 * import { isSubstringInString } from '@democrance/utils';
 *
 * console.log(isSubstringInString('Hello world', 'hello')); // Outputs: true
 * console.log(isSubstringInString('Hello world', 'goodbye')); // Outputs: false
 * ```
 * @public
 */
export function isSubstringInString(str = '', subString = '', { caseSensitive = false } = {}): boolean {
    if (typeof str !== 'string' || typeof subString !== 'string')
        throw new TypeError(`[isSubstringInString] - input should be type 'string'. Got ${typeof str}`)

    return (caseSensitive ? str : toUpper(str)).includes(caseSensitive ? subString : toUpper(subString))
}
