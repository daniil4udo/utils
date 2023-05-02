/**
 *
 * Capitalizes the first letter of a given string
 *
 * @param {string} [text=''] - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalize(text = '') {
    if (typeof text !== 'string')
        return text

    return text.toString().charAt(0).toUpperCase() + text.slice(1)
}
