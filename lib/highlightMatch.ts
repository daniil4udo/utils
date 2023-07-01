/**
 * Highlights matches in a str string by wrapping them in HTML tags.
 *
 * This function takes a str string and an array of match ranges, and returns a new string where each match range is
 * wrapped in the specified HTML tag. A match range is a two-element array where the first element is the start index
 * of the match and the second element is the end index of the match. The indices are inclusive.
 *
 * If no match ranges are provided or if the str string is empty, the function returns the original str string. If no
 * tag is specified, the function uses 'strong' as the default tag.
 *
 * @function highlightMatch
 * @param {string} str - The str string in which to highlight matches.
 * @param {[number, number][]} [matches=[]] - An array of match ranges. Each match range is a two-element array
 *   containing the start and end indices of the match. Defaults to an empty array.
 * @param {{ tag?: string }} [options={}] - An options object. Currently supports one option: 'tag', which specifies
 *   the HTML tag to use for wrapping matches. Defaults to an object with 'tag' set to 'strong'.
 * @returns {string} - The str string with matches highlighted.
 *
 * @example
 * const str1 = 'Hello, world!';
 * const matches1 = [[7, 11]]; // Matches the word 'world'
 * const result1 = highlightMatch(str1, matches1); // Output: 'Hello, <strong>world</strong>!'
 *
 * const str2 = 'Hello, world!';
 * const matches2 = [[0, 4], [7, 11]]; // Matches the words 'Hello' and 'world'
 * const result2 = highlightMatch(str2, matches2, { tag: 'span' });
 * console.log(result2); // Output: '<span>Hello</span>, <span>world</span>!'
 *
 * const str3 = 'Hello, world!';
 * const matches3 = [[-5, 5]]; // Matches the substring 'Hello'
 * const result3 = highlightMatch(str3, matches3);
 * console.log(result3); // Output: 'Hello, world!'
 *
 * const str4 = 'Hello, world!';
 * const matches4 = [[0, 20]]; // Matches the entire string
 * const result4 = highlightMatch(str4, matches4);
 * console.log(result4);  // Output: '<strong>Hello, world!</strong>'
 *
 * const str5 = 'Hello, world!';
 * const matches5 = [[0, 4]];
 * const options5 = { tag: 'em' };
 * const result5 = highlightMatch(str5, matches5, options5);
 * console.log(result5); // Output: '<em>Hello</em>, world!'
 */
export function highlightMatch(
    text: string,
    matches: [number, number][] = [],
    { tag = 'strong' } = {},
) {
    let output = ''
    let lastIndex = 0

    if (text === '' || matches.length === 0)
        return text

    const sortedMatches = matches.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < sortedMatches.length; i++) {
        const [ startIndex, endIndex ] = sortedMatches[i]

        // append the non-matching part of the text
        output += text.substring(lastIndex, startIndex)

        // append the matching part of the text wrapped in <strong> tags
        output += `<${tag}>${text.substring(startIndex, endIndex + 1)}</${tag}>`

        lastIndex = endIndex + 1
    }

    // append the remaining non-matching part of the text
    output += text.substring(lastIndex)

    return output
}
