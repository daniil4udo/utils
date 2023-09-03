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
