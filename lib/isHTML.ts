/**
 * Checks if a string is a valid HTML.
 *
 * @function isHTML
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a valid HTML, false otherwise.
 *
 * @example
 * isHTML('<p>Hello, World!</p>'); // Returns true
 * isHTML('<p>Hello, World!'); // Returns true (for now)
 * isHTML('Hello, World!'); // Returns false
 */
export function isHTML(str: string) {
    try {
        const fragment = new DOMParser().parseFromString(str, 'text/html')
        return fragment.body.children.length > 0
    }
    catch (error) {
        return false
    }
}
