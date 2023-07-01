/**
 * Checks if a value is null or undefined.
 *
 * This function uses the loose equality operator (`==`) to compare the given value with `null`, which will return `true`
 * for both `null` and `undefined` values.
 *
 * @function isNil
 * @param {*} input - The value to check.
 * @returns {boolean} - `true` if the value is null or undefined, `false` otherwise.
 */
export function isNil(input: any) {
    return input == null
}

/**
 * Checks if a value is defined, i.e., not null or undefined.
 *
 * This function is the inverse of `isNil()`. It uses `isNil()` to check if a value is null or undefined, and then negates
 * the result.
 *
 * @function isDefined
 * @param {*} input - The value to check.
 * @returns {boolean} - `true` if the value is not null or undefined, `false` otherwise.
 */
export function isDefined(input: any) {
    return !isNil(input)
}

/**
 * Checks if a value is defined and not an empty string.
 *
 * This function first checks if a value is null or undefined using `isNil()`. If the value is not null or undefined,
 * it then checks if the value is not an empty string. If the value is not null, not undefined, and not an empty string,
 * the function returns `true`.
 *
 * @function hasValue
 * @param {*} input - The value to check.
 * @returns {boolean} - `true` if the value is not null, not undefined, and not an empty string, `false` otherwise.
 */
export function hasValue(input: any) {
    return !isNil(input) && input !== ''
}
