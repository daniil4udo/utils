/**
 * Represents a collection of sortable items.
 *
 * @interface SortableItems
 * @property {string | number | null | undefined} [key] - The key of the sortable item.
 * @property {string | number | null | undefined} [value] - The value of the sortable item.
 */
interface SortableItems {
    [key: string]: string | number | null | undefined
}

/**
 * Sorts an array of objects based on a specific key using string comparison in a specified locale.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @template T - A subtype of `Localizable` where every property value is a string.
 *
 * @function sortObjects
 * @param {T[]} [collection=[]] - The collection of objects to sort.
 * @param {keyof T} key - The key to sort the objects by.
 * @param {string} [locale='en'] - The locale to use for string comparison.
 * @returns {T[]} The sorted collection.
 *
 * @example
 * ```ts
 * import { sortObjects } from '@democrance/utils';
 *
 * const collection = [{ name: 'Zoe' }, { name: 'Amy' }, { name: 'Mark' }];
 * sortObjects(collection, 'name'); // Outputs: [{ name: 'Amy' }, { name: 'Mark' }, { name: 'Zoe' }]
 * ```
 * @public
 */
export function sortObjects(array: SortableItems[], key: string, locale = 'en-US'): SortableItems[] {
    const collator = new Intl.Collator(locale, { numeric: true, sensitivity: 'base' })
    return array.sort((a, b) => {
        // If a[key] and b[key] are both null or undefined, they are considered equal
        if ((a[key] === undefined || a[key] === null) && (b[key] === undefined || b[key] === null))
            return 0

        if ((a[key] === undefined || a[key] === null))
            return -1

        if ((b[key] === undefined || b[key] === null))
            return 1

        return collator.compare(String(a[key]), String(b[key]))
    })
}
