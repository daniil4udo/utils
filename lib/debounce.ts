/**
 * Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called.
 * Useful in scenarios such as waiting for the user to stop resizing the window or stop typing in a text input field.
 *
 * @module debounce
 * @see {@link https://github.com/unjs/perfect-debounce}
 *
 * @example
 * ```ts
 * import { debounce } from '@democrance/utils';
 *
 * const debouncedFunction = debounce(() => {
 *   console.log('This will be logged once the debounce delay has passed!');
 * }, 500);
 *
 * window.addEventListener('resize', debouncedFunction);
 * ```
 * @public
 */
export { debounce } from 'perfect-debounce'

export type { DebounceOptions } from 'perfect-debounce'
