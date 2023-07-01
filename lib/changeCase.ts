/**
 * Capitalizes the first letter of a string.
 *
 * @function capitalize
 * @param {string} [str=''] - The input string to capitalize.
 * @returns {string} The capitalized string.
 *
 * @example
 * capitalize('hello'); // Outputs: 'Hello'
 * capitalize('WORLD'); // Outputs: 'WORLD'
 * capitalize(''); // Outputs: ''
 */
export function capitalize(str = '') {
    return typeof str !== 'string'
        ? str
        : str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Converts a string to uppercase.
 *
 * @function toUpper
 * @param {string} [str=''] - The input string to convert.
 * @returns {string} The uppercase string.
 *
 * @example
 * toUpper('hello'); // Outputs: 'HELLO'
 * toUpper('WORLD'); // Outputs: 'WORLD'
 * toUpper(''); // Outputs: ''
 */
export function toUpper(str = '') {
    return typeof str === 'string'
        ? str.toUpperCase()
        : str
}

/**
 * Converts a string to lowercase.
 *
 * @function toLower
 * @param {string} [str=''] - The input string to convert.
 * @returns {string} The lowercase string.
 *
 * @example
 * toLower('HELLO'); // Outputs: 'hello'
 * toLower('world'); // Outputs: 'world'
 * toLower(''); // Outputs: ''
 */
export function toLower(str = '') {
    return typeof str === 'string'
        ? str.toLowerCase()
        : str
}
