/**
 * Checks if a string represents a valid color in CSS.
 *
 * This function tests if a given string is recognized as a color
 * by the browser's CSS engine. It uses a DOM Option element to set
 * a color style and then checks if the color was recognized.
 *
 * @function isColor
 * @param {string} str - The string to test. This should be a string that
 *      you want to test whether it represents a CSS color. It could be a named color
 *      (like 'red'), a hex color (like '#ff0000'), an rgb color (like 'rgb(255, 0, 0)'),
 *      or any other string that could represent a color in CSS.
 * @returns {boolean} Returns `true` if `str` is a valid color string
 *      as recognized by the browser's CSS engine. Otherwise, returns `false`.
 *
 * @example
 * isColor('red'); // returns true
 * isColor('#ff0000'); // returns true
 * isColor('rgb(255, 0, 0)'); // returns true
 * isColor('invalid color'); // returns false
 */
export function isColor(strColor: string) {
    if (!strColor)
        return false

    const s = new Option().style
    s.color = strColor

    return s.color !== ''
}
