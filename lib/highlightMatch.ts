/**
 * A function that highlights matches within a string by wrapping them in HTML tags.
 *
 * @param {string} text - The string to highlight matches within.
 * @param {Array.<[number, number]>} [matches=[]] - An optional array of [startIndex, endIndex] tuples representing the indices of the matches to highlight.
 *
 * @returns {string} - The input string with the specified matches highlighted with HTML tags.
 *
 * @example
 *
 * // Returns '<strong>Hello</strong>, World!'
 * highlightMatch('Hello, World!', [[0, 4]]);
 *
 * // Returns '<strong>Hello</strong>, <strong>World</strong>!'
 * highlightMatch('Hello, World!', [[0, 4], [7, 11]]);
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
