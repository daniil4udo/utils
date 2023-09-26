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
