import { isNil } from './isNil'

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
