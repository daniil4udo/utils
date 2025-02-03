import { isNumber } from './isNumber';

/**
 * Determines if a given input can not be treated as a number.
 *
 * @remarks
 * This function utilizes the isNumber function to verify if the input can not be treated as a number.
 *
 * @param input - The value to check.
 * @returns True if the input can not be treated as a number, false otherwise.
 */
export function isProperNaN<T>(input: T): input is Exclude<T, number> {
    return Number.isNaN(input) || !isNumber(input);
}
