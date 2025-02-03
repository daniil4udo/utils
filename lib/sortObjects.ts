import type { Nullable, ParsablePrimitiveType } from 'types'

interface SortableItems {
    [key: string]: Nullable<ParsablePrimitiveType>
}

/**
 * Sorts an array of objects based on a specified key, using locale-aware string comparison.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @template T - The type of the objects in the array. Must extend `SortableItems`.
 *
 * @param {T[]} array - The array of objects to sort.
 * @param {string} key - The key of the objects to sort by. The values of this key should be comparable as strings.
 * @param {string} locale - The locale to use for the string comparison. Defaults to 'en-US'.
 *
 * @returns {T[]} The sorted array of objects.
 *
 * @example
 * ```ts
 * // Sort items by the 'value' key
 * const sortedItemsByValue = sortObjects(items, 'value');
 * console.log(sortedItemsByValue);
 * // Output: [
 * //     { name: 'apple', value: 1 },
 * //     { name: 'banana', value: 2 },
 * //     { name: 'cherry', value: 3 }
 * // ]
 * ```
 *
 * @example
 * ```ts
 * // Sort items using a different locale
 * const sortedItemsLocale = sortObjects(items, 'name', 'de-DE');
 * console.log(sortedItemsLocale);
 * // Output depends on the 'de-DE' locale collation rules
 * ```
 *
 * @public
 */
export function sortObjects<T extends SortableItems>(
    array: T[],
    key: string,
    locale: string = 'en-US',
): T[] {
    const collator = new Intl.Collator(locale, { numeric: true, sensitivity: 'base' });
    return array.sort((a, b) => {
        // If a[key] and b[key] are both null or undefined, they are considered equal
        if ((a[key] === undefined || a[key] === null) && (b[key] === undefined || b[key] === null))
            return 0;

        if ((a[key] === undefined || a[key] === null))
            return -1;

        if ((b[key] === undefined || b[key] === null))
            return 1;

        return collator.compare(`${a[key]}`, `${b[key]}`);
    });
}
