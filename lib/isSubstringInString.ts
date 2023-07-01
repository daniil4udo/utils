/**
 * Checks if a substring is in a string.
 *
 * The function converts both the input string and the substring to uppercase before checking,
 * making the check case-insensitive.
 *
 * @function isSubstringInString
 * @param {string} [string=''] - The string in which to check for the substring. Defaults to an empty string.
 * @param {string} [subString=''] - The substring to check for. Defaults to an empty string.
 * @returns {boolean} Returns `true` if the substring is found in the string, otherwise `false`.
 *
 * @example
 * isSubstringInString('Hello world', 'hello') // Outputs: true
 * isSubstringInString('Hello world', 'goodbye') // Outputs: false
 */
export function isSubstringInString(string = '', subString = ''): boolean {
    return String.prototype
        .includes
        .call(string.toString().toUpperCase(), subString.toString().toUpperCase())
}
