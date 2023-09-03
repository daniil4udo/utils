/**
 * Escapes any special characters in a string so it can be used in a regular expression.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @function escapeStringRegExp
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string.
 *
 * @example
 * ```ts
 * import { escapeStringRegExp } from '@democrance/utils';
 *
 * escapeStringRegExp('[abc]'); // Outputs: '\\[abc\\]'
 * ```
 * @public
 */
const escapeStringRegExp = (str: string): string => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

/**
 * Converts a string into a RegExp instance, escaping any special characters.
 *
 * @function strToRegexp
 * @param {string} str - The string to convert into a RegExp.
 * @returns {RegExp} The RegExp instance.
 *
 * @example
 * ```ts
 * import { strToRegexp } from '@democrance/utils';
 *
 * strToRegexp('[abc]'); // Outputs: /\[abc\]/
 * ```
 * @public
 */
export const strToRegexp = (str: string): RegExp => new RegExp(escapeStringRegExp(str))
