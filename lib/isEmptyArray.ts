import type { Nullable } from './types';

import { hasValue } from './hasValue';

/**
 * Represents options for the isEmptyArray function.
 *
 * @template T - The type of value being processed.
 *
 * @interface Options
 * @property {boolean} [deep] - A flag indicating whether to check nested arrays deeply.
 * @property {(value: T) => boolean} [comparator] - A comparator function used to determine if an array element is considered "empty".
 */
interface Options<T> {
    /**
     * Whether to check nested arrays deeply.
     *
     * @defaultValue `true`
     */
    deep?: boolean
    /**
     * A comparator function used to determine if an array element is considered "empty".
     *
     * @defaultValue `hasValue`
     */
    comparator?: (value: Nullable<T | undefined>) => boolean
}

/**
 * Checks whether the given array is "empty". The criteria for an array being considered "empty" is that either the array itself is null/undefined,
 * the array has no elements, or all elements of the array are themselves "empty" according to the provided `comparator` function.
 * If the `deep` option is true (the default), then nested arrays are checked deeply.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param array - The array to check.
 * @param options - An options object.
 * @returns `true` if the array is considered "empty", `false` otherwise.
 *
 * @example
 * ```ts
 * import { isEmptyArray } from '@democrance/utils';
 *
 * console.log(isEmptyArray([1, 2, 3])); // Returns false
 * console.log(isEmptyArray([])); // Returns true
 * console.log(isEmptyArray([[], [[], []]])); // Returns true
 * console.log(isEmptyArray([[], [[], [1]]])); // Returns false
 * ```
 * @public
 */
export function isEmptyArray<T>(array?: T, options: Options<T> = {}): boolean {
    if (Array.isArray(array)) {
        let { length } = array;
        if (length === 0)
            return true;

        const {
            deep = true,
            comparator = hasValue,
        } = options;

        let isEmpty = true;
        while (length--) {
            if (deep === true && Array.isArray(array[length]))
                isEmpty = isEmptyArray(array[length], options);
            else
                isEmpty = !comparator(array[length]);

            if (!isEmpty)
                break;
        }

        return isEmpty;
    }

    return true;
}
