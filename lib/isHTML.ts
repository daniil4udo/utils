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
export function isHTML(str: string): boolean {
    try {
        const fragment = new DOMParser().parseFromString(str, 'text/html')
        const hasChildren = fragment.body.children.length > 0
        const hasErrors = fragment.querySelector('parsererror') !== null || !hasChildren
        return hasChildren && !hasErrors
    }
    catch (error) {
        return false
    }
}
