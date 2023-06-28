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
 * Converts text to upper case.
 * @param {string} [text=''] - The text to be converted to upper case.
 *
 * @returns {string} - The upper case version of the input text.
 *
 * @example console.log(upper('hello')); // Output: HELLO
*/
export function toUpper(text = '') {
    if (typeof text === 'string')
        return text.toUpperCase()
    return text
}

/**
 *
 * Converts text to lower case.
 * @param {string} [text=''] - The text to be converted to lower case.
 *
 * @returns {string} - The lower case version of the input text.
 *
 * @example console.log(upper('hello')); // Output: HELLO
*/
export function toLower(text = '') {
    if (typeof text === 'string')
        return text.toLowerCase()
    return text
}
