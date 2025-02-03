import clipper from 'text-clipper';

type ClipOptions = Parameters<typeof clipper>;
type HtmlString = ClipOptions[0];
type MaxLength = ClipOptions[1];
type HtmlTruncateOptions = ClipOptions[2];

/**
 * A function that truncates an HTML string to a specified length.
 *
 * This function uses the 'text-clipper' library to truncate the provided HTML string to a maximum length.
 * It passes the provided parameters to the 'text-clipper' function along with an options object that
 * always includes `{ html: true }` to indicate that the input is an HTML string.
 *
 * Any additional options provided in the `options` parameter are merged with `{ html: true }` and passed
 * to the 'text-clipper' function.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @see {@link https://github.com/arendjr/text-clipper}
 *
 * @typeParam HtmlString - The HTML string to truncate.
 * @typeParam MaxLength - The maximum length of the output string.
 * @typeParam HtmlTruncateOptions - Additional options to pass to the 'text-clipper' function.
 *
 * @param htmlString - The HTML string to truncate.
 * @param maxLength - The maximum length of the output string.
 * @param options - Additional options to pass to the 'text-clipper' function.
 * @returns The truncated HTML string.
 *
 * @example
 * ```ts
 * import { htmlTruncate } from '@democrance/utils';
 *
 * // Truncate an HTML string with a maximum length of 20 characters
 * const html = '<p>This is an <strong>example</strong> HTML string.</p>';
 * console.log(htmlTruncate(html, 20)); // Output: '<p>This is an <strong>exa</strong></p>'
 * ```
 */
export function htmlTruncate(
    htmlString: HtmlString,
    maxLength: MaxLength,
    options: HtmlTruncateOptions = {},
) {
    return clipper(htmlString, maxLength, Object.assign({ html: true }, options));
}
