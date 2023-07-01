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
export function capitalize(text = '') {
    if (typeof text !== 'string')
        return text

    return text.toString().charAt(0).toUpperCase() + text.slice(1)
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
}
