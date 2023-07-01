/**
 * The debounce function from the 'perfect-debounce' package.
 *
 * Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called.
 * Useful in scenarios such as waiting for the user to stop resizing the window or stop typing in a text input field.
 *
 * To learn more about the 'perfect-debounce' package, view the documentation, or explore the code, please visit its repository at:
 * https://github.com/unjs/perfect-debounce
 *
 * @module debounce
 * @see {@link https://github.com/unjs/perfect-debounce}
 *
 * @function
 * @name debounce
 *
 * @example
 * import { debounce } from '@democrance/utils';
 *
 * const debouncedFunction = debounce(() => {
 *   console.log('This will be logged once the debounce delay has passed!');
 * }, 500);
 *
 * window.addEventListener('resize', debouncedFunction);
 */
export { debounce } from 'perfect-debounce'
