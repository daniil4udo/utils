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
    return input == null;
}
