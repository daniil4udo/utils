const escapeStringRegExp = (str: string) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

/**
 *
 * Convert regexp-alike string to the actual Regexp object
 *
 * @param {string} str - String to convert to Regexp
 *
 * @returns {RegExp} - Regexp object
 *
 */
export const strToRegexp = (str: string) => new RegExp(escapeStringRegExp(str))
