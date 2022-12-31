/**
 *
 * Test if given string is HTML
 *
 * @param {string} str - String to test
 * @returns {boolean}
 *
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
