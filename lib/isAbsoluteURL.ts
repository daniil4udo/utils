/**
 * Checks if a URL is an absolute URL.
 *
 * This function checks if the provided URL is absolute based on its syntax. According to RFC 3986,
 * a URL is considered absolute if it begins with a scheme name followed by '://', or if it begins
 * with '//' (protocol-relative URL). A scheme name is a sequence of characters that begins with
 * a letter and is followed by any combination of letters, digits, plus signs, periods, or hyphens.
 *
 * The function uses a regular expression to check if the URL matches either of these patterns.
 *
 * @function isAbsoluteURL
 * @param {string} [url=''] - The URL to check. Defaults to an empty string.
 * @returns {boolean} - `true` if the URL is absolute, `false` otherwise.
 *
 * @example
 * isAbsoluteURL('https://example.com'); // Output: true
 * isAbsoluteURL('//example.com'); // Output: true
 * isAbsoluteURL('/path/to/resource'); // Output: false
 * isAbsoluteURL('mailto:test@example.com'); // Output: false
 */
export function isAbsoluteURL(url = '') {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:(?=\/\/))?\/\//i.test(url)
}
