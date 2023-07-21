/**
 * Checks if a string represents a valid color in CSS.
 *
 * This function tests if a given string is recognized as a color
 * by the browser's CSS engine. It uses a DOM Option element to set
 * a color style and then checks if the color was recognized.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param str - The string to test. This should be a string that
 *      you want to test whether it represents a CSS color. It could be a named color
 *      (like 'red'), a hex color (like '#ff0000'), an rgb color (like 'rgb(255, 0, 0)'),
 *      or any other string that could represent a color in CSS.
 *
 * @returns `true` if `str` is a valid color string
 *      as recognized by the browser's CSS engine. Otherwise, returns `false`.
 *
 * @example
 * ```ts
 * import { isColor } from '@democrance/utils';
 *
 * console.log(isColor('red')); // returns true
 * console.log(isColor('#ff0000')); // returns true
 * console.log(isColor('rgb(255, 0, 0)')); // returns true
 * console.log(isColor('invalid color')); // returns false
 * ```
 * @public
 */
export function isColor(str: string) {
    if (!str)
        return false

    const s = new Option().style
    s.color = str

    return s.color !== ''
}
