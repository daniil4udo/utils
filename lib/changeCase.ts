export {
    camelCase,
    capitalCase,
    constantCase,
    dotCase,
    kebabCase,
    noCase,
    pascalCase,
    pascalSnakeCase,
    pathCase,
    sentenceCase,
    snakeCase,
    trainCase,
} from 'change-case';
/**
 * Capitalizes the first letter of a string.
 *
 * This method takes a string as an input and returns a new string
 * with the first letter converted to uppercase and the rest of the string preserved.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param str - The input string to capitalize. Default is an empty string.
 * @returns The capitalized string.
 * @throws {TypeError} If the input is not of type 'string'.
 *
 * @example
 * ```ts
 * import { capitalize } from '@democrance/utils';
 *
 * console.log(capitalize('hello')); // Outputs: 'Hello'
 * console.log(capitalize('WORLD')); // Outputs: 'WORLD'
 * console.log(capitalize('')); // Outputs: ''
 * ```
 * @public
 */
export function capitalize<T extends string>(str: T) {
    if (typeof str !== 'string')
        throw new TypeError(`[capitalize] - input should be type 'string'. Got ${typeof str}`);
    return str.charAt(0).toUpperCase() + str.slice(1) as Capitalize<T>;
}

/**
 * Converts a string to uppercase.
 *
 * This method takes a string as an input and returns a new string
 * with all characters converted to uppercase.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param str - The input string to convert. Default is an empty string.
 * @returns The uppercase string.
 * @throws {TypeError} If the input is not of type 'string'.
 *
 * @example
 * ```ts
 * console.log(toUpper('hello')); // Outputs: 'HELLO'
 * console.log(toUpper('WORLD')); // Outputs: 'WORLD'
 * console.log(toUpper('')); // Outputs: ''
 * ```
 * @public
 */
export function toUpper<T extends string>(str: T) {
    if (typeof str !== 'string')
        throw new TypeError(`[toUpper] - input should be type 'string'. Got ${typeof str}`);
    return str.toUpperCase() as Uppercase<T>;
}

/**
 * Converts a string to lowercase.
 *
 * This method takes a string as an input and returns a new string
 * with all characters converted to lowercase.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param str - The input string to convert. Default is an empty string.
 * @returns The lowercase string.
 * @throws {TypeError} If the input is not of type 'string'.
 *
 * @example
 * ```ts
 * console.log(toLower('HELLO')); // Outputs: 'hello'
 * console.log(toLower('world')); // Outputs: 'world'
 * console.log(toLower('')); // Outputs: ''
 * ```
 * @public
 */
export function toLower<T extends string>(str: T) {
    if (typeof str !== 'string')
        throw new TypeError(`[toLower] - input should be type 'string'. Got ${typeof str}`);
    return str.toLowerCase() as Lowercase<T>;
}
