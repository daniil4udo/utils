export function scrollTo(
    element?: HTMLElement,
    offset = 0,
): void {
    if (!window)
/**
 * Scrolls the window to a specified element.
 *
 * @function scrollTo
 * @param {HTMLElement | null | undefined} element - The element to scroll to. Can be an HTMLElement, null, or undefined.
 * @param {number} [offset=0] - The offset value to adjust the scroll position. Defaults to 0.
 * @returns {void}
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
 * @example
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
 */
        return

    const top = element
        ? element.getBoundingClientRect().top
          + (window.pageYOffset || document.documentElement.scrollTop)
          - offset
        : 0

    if ('scrollRestoration' in history)
        history.scrollRestoration = 'manual'

    requestAnimationFrame(() => {
        window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth',
        })
    })
}
