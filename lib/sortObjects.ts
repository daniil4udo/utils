import type { Nullable, ParsablePrimitiveType } from 'types'

interface SortableItems {
    [key: string]: Nullable<ParsablePrimitiveType>
}

/**
 * Sorts an array of objects based on a specific key using string comparison in a specified locale.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @template T - A subtype of `SortableItems` where every property value can be compared as a string.
 *
 * @param {string} str - The string in which to highlight matches.
 * @param {Array<[number, number]>} indices - An array of match ranges. Each match range is a two-element array containing the start and
 *      end indices of the match. Defaults to an empty array.
 * @param {object} [options] - An options object. Defaults to an object with 'tag' set to 'strong'.
 * @param {string} [options.tag] - Specifies the HTML tag to use for wrapping matches.
 * @param {object} [options.attrs] - Specifies the HTML attributes to add to the tag.
 *
 * @returns {T[]} The sorted array.
 *
 * @example
 * ```ts
 * import { sortObjects } from '@democrance/utils';
 *
 * const array = [{ name: 'Zoe' }, { name: 'Amy' }, { name: 'Mark' }];
 * sortObjects(array, 'name'); // Outputs: [{ name: 'Amy' }, { name: 'Mark' }, { name: 'Zoe' }]
 * ```
 * @public
 */
export function sortObjects<T extends SortableItems>(
    array: T[],
    key: string,
    locale: string = 'en-US',
): T[] {
    const collator = new Intl.Collator(locale, { numeric: true, sensitivity: 'base' })
    return array.sort((a, b) => {
        // If a[key] and b[key] are both null or undefined, they are considered equal
        if ((a[key] === undefined || a[key] === null) && (b[key] === undefined || b[key] === null))
            return 0

        if ((a[key] === undefined || a[key] === null))
            return -1

        if ((b[key] === undefined || b[key] === null))
            return 1

        return collator.compare(`${a[key]}`, `${b[key]}`)
    })
}
