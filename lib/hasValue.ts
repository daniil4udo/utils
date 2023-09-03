/**
 * Checks if a value is null or undefined.
 *
 * This function uses the loose equality operator (`==`) to compare the given value with `null`,
 * which will return `true` for both `null` and `undefined` values.
 * This is useful when you want to check if a variable has been assigned a value or not.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param input - The value to check.
 * @returns `true` if the value is null or undefined, `false` otherwise.
 *
 * @example
 * ```ts
 * import { isNil } from '@democrance/utils';
 *
 * console.log(isNil(null));       // Outputs: true
 * console.log(isNil(undefined));  // Outputs: true
 * console.log(isNil(''));         // Outputs: false
 * ```
 * @public
 */
export function isNil(input: unknown): input is null | undefined {
    return input == null
}

/**
 * Checks if a value is defined, i.e., not null or undefined.
 *
 * This function is the inverse of `isNil()`. It uses `isNil()` to check if a value is null or undefined,
 * and then negates the result. This is useful when you want to ensure that a variable has been
 * assigned a value.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param input - The value to check.
 * @returns `true` if the value is not null or undefined, `false` otherwise.
 *
 * @example
 * ```ts
 * import { isDefined } from '@democrance/utils';
 *
 * console.log(isDefined(null));       // Outputs: false
 * console.log(isDefined(undefined));  // Outputs: false
 * console.log(isDefined(''));         // Outputs: true
 * ```
 * @public
 */
export function isDefined<T>(input: T): input is NonNullable<T> {
    return !isNil(input)
}

/**
 * Checks if a value is defined and not an empty string.
 *
 * This function first checks if a value is null or undefined using `isNil()`. If the value is not null or undefined,
 * it then checks if the value is not an empty string. This is useful when you want to ensure that a string variable
 * has been assigned a non-empty value.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param input - The value to check.
 * @returns `true` if the value is not null, not undefined, and not an empty string, `false` otherwise.
 *
 * @example
 * ```ts
 * import { hasValue } from '@democrance/utils';
 *
 * console.log(hasValue(null));       // Outputs: false
 * console.log(hasValue(undefined));  // Outputs: false
 * console.log(hasValue(''));         // Outputs: false
 * console.log(hasValue('Hello'));    // Outputs: true
 * ```
 * @public
 */
export function hasValue<T>(input: T): input is NonNullable<T> {
    return input != null && (typeof input === 'string' ? input.trim() !== '' : true)
}
