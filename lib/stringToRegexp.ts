/**
 * Escapes any special characters in a string so it can be used in a regular expression.
 *
 * @function escapeStringRegExp
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string.
 *
 * @example
 * escapeStringRegExp('[abc]'); // Outputs: '\\[abc\\]'
 */
const escapeStringRegExp = (str: string) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

/**
 * Converts a string into a RegExp instance, escaping any special characters.
 *
 * @function strToRegexp
 * @param {string} str - The string to convert into a RegExp.
 * @returns {RegExp} The RegExp instance.
 *
 * @example
 * strToRegexp('[abc]'); // Outputs: /\[abc\]/
 */
export const strToRegexp = (str: string) => new RegExp(escapeStringRegExp(str))
