import clipper from 'text-clipper'

type ClipOptions = Parameters<typeof clipper>

/**
 * Truncates an HTML string to a specified length.
 *
 * This function uses the 'text-clipper' library to truncate the provided HTML string to a maximum length.
 * It passes the provided parameters to the 'text-clipper' function along with an options object that
 * always includes `{ html: true }` to indicate that the input is an HTML string.
 *
 * Any additional options provided in the `options` parameter are merged with `{ html: true }` and passed
 * to the 'text-clipper' function.
 *
 * Please refer to the 'text-clipper' library's documentation for more information about its behavior and
 * the available options: https://github.com/arendjr/text-clipper
 *
 * @see {@link https://github.com/arendjr/text-clipper}
 *
 * @function htmlTruncate
 * @param {ClipOptions[0]} htmlString - The HTML string to truncate.
 * @param {ClipOptions[1]} maxLength - The maximum length of the output string.
 * @param {ClipOptions[2]} [options={}] - Additional options to pass to the 'text-clipper' function.
 * @returns {string} - The truncated HTML string.
 *
 * @example
 * // Truncate an HTML string with a maximum length of 20 characters
 * const html = '<p>This is an <strong>example</strong> HTML string.</p>';
 * const truncated = htmlTruncate(html, 20); // Output: '<p>This is an <strong>exa</strong></p>'
 */
export function htmlTruncate(
    htmlString: ClipOptions[0],
    maxLength: ClipOptions[1],
    options: ClipOptions[2] = {},
) {
    return clipper(htmlString, maxLength, Object.assign({ html: true }, options))
}
