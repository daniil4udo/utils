/**
 * Checks if a given string is a valid HTML.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param {string} str - The string to validate as HTML.
 * @returns {boolean} Returns `true` if the string is valid HTML, otherwise `false`.
 *
 * @example
 * ```ts
 * import { isHTML } from '@democrance/utils';
 *
 * isHTML('<p>Hello, World!</p>'); // Outputs: true
 * isHTML('<p>Hello, World!'); // Outputs: true (valid HTML despite missing closing tag)
 * isHTML('Hello, World!'); // Outputs: false (plain text is not considered valid HTML)
 * ```
 * @public
 */
export function isHTML(str: string): boolean {
    try {
        const fragment = new DOMParser().parseFromString(str, 'text/html');
        const hasChildren = fragment.body.children.length > 0;
        const hasErrors = fragment.querySelector('parsererror') !== null || !hasChildren;
        return hasChildren && !hasErrors;
    }
    catch {
        return false;
    }
}
