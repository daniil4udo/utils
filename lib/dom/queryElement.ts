import { toArray } from '../toArray';

/**
 * Queries for elements in the DOM based on a selector string.
 *
 * @param selector - The CSS selector string to match elements against.
 *  For simple selectors like IDs, classes, or tags, the function redirects
 *  to more performant methods (`getElementById`, `getElementsByClassName`, or `getElementsByTagName`).
 *
 * @param context - The DOM context within which to search. Defaults to `document`.
 *
 * @returns An array of matching elements. May contain `null` for ID-based queries if no element is found.
 *
 * @example
 * ```typescript
 * // Query by class
 * queryElement('.my-class');
 *
 * // Query by ID
 * queryElement('#my-id');
 *
 * // Query by tag
 * queryElement('div');
 *
 * // Complex query
 * queryElement('div > .my-class');
 * ```
 */
export function queryElement(selector: string, context: Document | Element = document) {
    if (context == null)
        throw new TypeError('[queryElement]: context must be a Document | Element');

    try {
        // Redirect simple selectors to the more performant function
        // eslint-disable-next-line regexp/strict, regexp/no-unused-capturing-group
        if (/^(#?[\w-]+|\.[\w-.]+)$/.test(selector)) {
            const classes = selector.slice(1).replace(/\./g, ' ');
            switch (selector.charAt(0)) {
                case '#':
                    // Handle ID-based selectors
                    // Check if the context is a Document because only Document has getElementById
                    if ('getElementById' in context) {
                        const el = context.getElementById(selector.slice(1));
                        if (el != null)
                            return toArray(el);
                    }
                    break;
                case '.':
                    // Handle class-based selectors
                    // Query by multiple classes by converting the selector
                    // string into single spaced class names
                    return Array.from(context.getElementsByClassName(classes)).filter(Boolean);
                default:
                    // Handle tag-based selectors
                    return Array.from(context.getElementsByTagName(selector)).filter(Boolean);
            }
        }

        return Array.from(context.querySelectorAll(selector)).filter(Boolean);
    }
    catch {
        return [];
    }
}
