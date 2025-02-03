/*
    'a[href]',
    'area[href]',
    'button',
    'details',
    'input',
    'iframe',
    'select',
    'textarea',

    // these are actually case sensitive but i'm not listing out all the possible variants
    '[contentEditable=""]',
    '[contentEditable="true"]',
    '[contentEditable="TRUE"]',

    '[tabindex]:not([tabindex^="-"])',
    ':not([disabled])';
 */
export const POSSIBLE_FOCUSABLE_TAGS = `a[href], area[href], button, details, input, textarea, select, [tabindex]:not([tabindex^="-"])` as const;

/**
 * Toggles the keyboard focus state for all focusable elements in the specified scope.
 *
 * This function iterates over all the elements in the given scope that have a tag specified in POSSIBLE_FOCUSABLE_TAGS.
 * If an element is not disabled, it assigns the given tabIndex value to the element's tabIndex attribute. The tabIndex
 * attribute defines the tab order of an element (when the "tab" button is used for navigating).
 *
 * Note: This function requires 'requestAnimationFrame' to apply the tabIndex, which might not be available in all environments.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param {HTMLElement} [scope] - The scope within which to toggle the keyboard focus state.
 *      Default is the document body. It is expected to be an HTML element.
 * @param {number} [tabIndex] - The tabIndex value to assign to each focusable element.
 *      Default is -1 which makes the element focusable, but not reachable via sequential keyboard navigation.
 *      But it can be focused by calling its focus method programmatically.
 * @returns {void} This function does not return a value.
 *
 * @example
 * ```ts
 * import { toggleKeyboardFocus } from '@democrance/utils';
 *
 * // Toggle the keyboard focusability of all focusable elements within the document body.
 * toggleKeyboardFocus();
 *
 * // Toggle the keyboard focusability of all focusable elements within a specific element.
 * const container = document.getElementById('container');
 * toggleKeyboardFocus(container);
 *
 * // Toggle the keyboard focusability of all focusable elements within a specific element and set tabIndex to 0.
 * toggleKeyboardFocus(container, 0);
 * ```
 * @public
 */
export function toggleKeyboardFocus(
    scope: HTMLElement = document.body,
    tabIndex: number = -1,
): void {
    if (!window || !scope)
        return;

    const elArr: HTMLElement[] = Array.from(scope.querySelectorAll(POSSIBLE_FOCUSABLE_TAGS));
    let i = elArr.length;

    while (i--) {
        const el = elArr[i];

        if (el == null)
            continue;

        requestAnimationFrame(() => {
            if (!el.hasAttribute('disabled'))
                el.tabIndex = tabIndex;
        });
    }
}
