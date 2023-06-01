/**
 *
 * Capitalizes the first letter of a given string
 *
 * @param {string} [text=''] - The string to capitalize.
 *
 * @returns {string} The capitalized string.
 */
export function capitalize(text = '') {
    if (typeof text !== 'string')
        return text

    return text.toString().charAt(0).toUpperCase() + text.slice(1)
}

/**
 *
 * Converts text to uppercase.
 * @param {string} [text=''] - The text to be converted to uppercase.
 *
 * @returns {string} - The uppercase version of the input text.
 *
 * @example console.log(upper('hello')); // Output: HELLO
*/
export function upper(text = '') {
    if (typeof text === 'string')
        return text.toUpperCase()
    return text
}
