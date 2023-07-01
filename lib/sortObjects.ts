/**
 * Represents a collection of sortable items.
 *
 * @interface SortableItems
 * @property {string | number | null | undefined} [key] - The key of the sortable item.
 * @property {string | number | null | undefined} [value] - The value of the sortable item.
 */
export function sortObjects<T extends Record<any, string>>(collection: T[] = [], key: keyof T, locale = 'en') {
    const collator = new Intl.Collator(locale)
    return collection.sort((a, b) => collator.compare(a[key], b[key]))
interface SortableItems {
    [key: string]: string | number | null | undefined
}

/**
 * Sorts an array of objects based on a specific key using string comparison in a specified locale.
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
 * const collection = [{ name: 'Zoe' }, { name: 'Amy' }, { name: 'Mark' }];
 * sortObjects(collection, 'name'); // Outputs: [{ name: 'Amy' }, { name: 'Mark' }, { name: 'Zoe' }]
 */
}
