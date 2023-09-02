import type { Nullable } from 'types'

/**
 * Scrolls the window to a specified element.
*
* If the `element` parameter is provided, the function calculates the scroll position based on the element's position
* and the current scroll position, taking into account the specified `offset` value.
*
* If the `element` parameter is not provided or is null/undefined, the function scrolls to the top of the window.
*
* The function uses the 'scrollRestoration' feature of the browser's history API to restore the scroll position
* after a page navigation or refresh. If the 'scrollRestoration' feature is not supported, it does not change
* the default behavior of the browser.
*
* The scrolling is performed using the browser's native `scrollTo` method with 'smooth' behavior for a smooth scrolling effect.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @function scrollTo
 * @param {HTMLElement | null | undefined} element - The element to scroll to. Can be an HTMLElement, null, or undefined.
 * @param {number} [offset=0] - The offset value to adjust the scroll position. Defaults to 0.
 * @returns {void}
 *
 * @example
 * ```ts
 * import { scrollTo } from '@democrance/utils';
 *
 * // Scroll to an element with the default offset
 * const element = document.getElementById('my-element');
 * scrollTo(element);
 *
 * // Scroll to an element with a custom offset
 * const element = document.getElementById('my-element');
 * scrollTo(element, 100);
 *
 * // Scroll to the top of the window
 * scrollTo();
 * ```
 * @public
 */
export function scrollTo(element: Nullable<HTMLElement>, offset = 0) {
    if (typeof window === 'undefined')
        return

    const top = element
        ? element.getBoundingClientRect().top
            + (window.scrollY || document.documentElement.scrollTop)
            - offset
        : 0

    if ('scrollRestoration' in history)
        history.scrollRestoration = 'auto'

    requestAnimationFrame(() => {
        window.scrollTo(({ top, left: 0, behavior: 'smooth' }))
    })
}
