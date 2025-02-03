import type { Nullable } from './types';

import { hasValue } from './hasValue';
import { toType } from './toType';

/**
 * The `MatchRange` type is an array of tuples.
 *
 * Each tuple represents a match range with two elements:
 * - The first element is the start index of a match within a string
 * - The second element is the end index of a match within a string
 *
 * The array can be of any length, including zero (i.e., no matches).
 *
 * The indices are inclusive and based on zero-indexed positions in the string.
 * Negative indices or indices outside the string's length are ignored.
 */
type MatchRange = ReadonlyArray<[number, number]>;

/**
 * The `Options` interface is used to customize the behavior of the `highlightMatch` function.
 *
 */
interface Options {
    /**
     * The HTML tag to use for wrapping matches within the input string. If not specified, the default is 'strong'.
     *
     * @defaultValue `strong`
     */
    tag?: string
    attrs?: Nullable<string | Record<string, string> | Record<string, string>[]>
}

/**
 * This function formats attributes that can be in different formats (string, array, or object)
 * into a string format suitable for HTML attributes.
 *
 * If the input is a string, it's returned as is.
 * If it's an array, each item is processed recursively and joined into a space-separated string.
 * If it's an object, each entry is converted into a key-value string with a format of 'key="value"',
 * then all entries are joined into a space-separated string.
 *
 * If the input isn't one of these types, a TypeError is thrown.
 *
 * @param {Nullable<string | Record<string, string> | Record<string, string>[]>} input - The input to format.
 *
 * @returns {string} The formatted attributes.
 *
 * @throws {TypeError} Will throw an error if the input is not a string, an array, or an object.
 *
 * @example
 * // If the input is a string:
 * createTagAttributes("class='example'")
 * // Returns: "class='example'"
 *
 * @example
 * // If the input is an array:
 * createTagAttributes(['class="example"', 'id="test"'])
 * // Returns: 'class="example" id="test"'
 *
 * @example
 * // If the input is an object:
 * createTagAttributes({ class: "example", id: "test" })
 * // Returns: 'class="example" id="test"'
 *
 * @example
 * // If the input is not a string, an array or an object:
 * createTagAttributes(42)
 * // Throws: TypeError: Unsupported attributes type: number
 */
function createTagAttributes<T extends Nullable<string | Record<string, string> | Record<string, string>[]>>(input: T): string {
    if (typeof input === 'string') {
        return input;
    }
    else if (Array.isArray(input)) {
        return input.map(createTagAttributes).join(' ');
    }
    else if (toType(input) === 'object' && input !== null) {
        let result = '';
        for (const [ key, value ] of Object.entries(input)) {
            if (hasValue(value))
                result += `${key}="${value}" `;
        }
        result = result.trim();
        return result;
    }
    else {
        throw new TypeError(`[createTagAttributes] - Unsupported attributes type: ${toType(input)}`);
    }
}

/**
 * A function that highlights matches in a `str` string by wrapping them in HTML tags.
 *
 * This function takes a `str` string and an array of match ranges, and returns a new string where each match range is
 * wrapped in the specified HTML tag. A match range is a two-element array where the first element is the start index
 * of the match and the second element is the end index of the match. The indices are inclusive.
 *
 * If no match ranges are provided or if the `str` string is empty, the function returns the original `str` string.
 * If no tag is specified, the function uses 'strong' as the default tag.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param {string} str - The string in which to highlight matches.
 * @param {[number, number]} indices - An array of match ranges. Each match range is a two-element array containing the start and
 *      end indices of the match. Defaults to an empty array.
 * @param {{ tag: string; attrs: string }} options - An options object. It currently supports one option: 'tag', which specifies the HTML tag to
 *      use for wrapping matches. Defaults to an object with 'tag' set to 'strong'.
 *
 * @returns The string with matches highlighted.
 *
 * @example
 * ```ts
 * import { highlightMatch } from '@democrance/utils';
 *
 * const str1 = 'Hello, world!';
 * const matches1 = [[7, 11]]; // Matches the word 'world'
 * console.log(highlightMatch(str1, matches1)); // Output: 'Hello, <strong>world</strong>!'
 *
 * const str2 = 'Hello, world!';
 * const matches2 = [[0, 4], [7, 11]]; // Matches the words 'Hello' and 'world'
 * console.log(highlightMatch(str2, matches2, { tag: 'span' })); // Output: '<span>Hello</span>, <span>world</span>!'
 *
 * const str3 = 'Hello, world!';
 * const matches3 = [[-5, 5]]; // Matches nothing'
 * console.log(highlightMatch(str3, matches3)); // Output: 'Hello, world!'
 *
 * const str4 = 'Hello, world!';
 * const matches4 = [[0, 20]]; // Matches the entire string
 * console.log(highlightMatch(str4, matches4));  // Output: '<strong>Hello, world!</strong>'
 *
 * const str5 = 'Hello, world!';
 * const matches5 = [[0, 4]];
 * const options5 = { tag: 'em' };
 * console.log(highlightMatch(str5, matches5, options5)); // Output: '<em>Hello</em>, world!'
 * ```
 * @public
 */
export function highlightMatch(
    str: string,
    indices: MatchRange,
    { tag = 'strong', attrs = null }: Options = {},
) {
    if (!str || indices.length === 0)
        return str;

    const openTag = attrs
        ? `${tag} ${createTagAttributes(attrs)}`
        : tag;

    // Sort matches by start index
    const matches = indices.slice().sort((a, b) => a[0] - b[0]);

    // Merge overlapping or adjacent ranges
    const mergedMatches: Array<[number, number]> = [];
    let currentMatch = matches[0] as [number, number];

    for (let i = 1, l = matches.length; i < l; i++) {
        const [ nextStart, nextEnd ] = matches[i] as [number, number];

        // If the next match overlaps or is adjacent with the current match, merge them
        if (nextStart <= currentMatch[1] + 1) {
            currentMatch[1] = Math.max(nextEnd, currentMatch[1]);
        }
        else {
            // If the next match doesn't overlap or is adjacent,
            // add the current match to the merged list and start a new current match
            mergedMatches.push(currentMatch);
            currentMatch = matches[i] as [number, number];
        }
    }
    mergedMatches.push(currentMatch); // Add the last match

    let result = '';
    let lastMatchEndIndex = 0;

    for (const match of mergedMatches) {
        let [ startIndex, endIndex ] = match;

        // Ignore negative indices or entirely out of range indices
        if (startIndex < 0 || endIndex < 0 || startIndex >= str.length)
            continue;

        // Treat indices beyond the length of the string as the end of the string
        startIndex = Math.min(startIndex, str.length);
        endIndex = Math.min(endIndex, str.length);

        // Handle non-sequential matches
        if (startIndex > lastMatchEndIndex)
            result += str.slice(lastMatchEndIndex, startIndex);

        const matchText = str.slice(startIndex, endIndex + 1); // Add 1 to endIndex in the slice call
        result += `<${openTag}>${matchText}</${tag}>`;

        lastMatchEndIndex = endIndex + 1;
    }

    // Append remaining str
    if (lastMatchEndIndex < str.length)
        result += str.slice(lastMatchEndIndex);

    return result;
}
