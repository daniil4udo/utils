/**
 *
 * Capitalize first letter of provided text
 *
 * @param {string} text
 *
 * @returns {string} - string with first capital letter
 *
 */
export function capitalize(text = '') {
    if (typeof text !== 'string')
        return ''

    return text.toString().charAt(0).toUpperCase() + text.slice(1)
}
