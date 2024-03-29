import type { Nullable } from 'types'

/**
 * Checks whether the given object is not null and has the specified property.
 * This function narrows down the type of the input object to `T & Record<PropertyKey, T>` when it returns `true`, which helps in TypeScript type inference.
 *
 * @param {Nullable<T>} object - The object to be checked. It can be `null` or `undefined`.
 * @param {PropertyKey} key - The key (property) to check for on the object. Can be a `string`, `number`, or `symbol`.
 * @returns {object is T & Record<PropertyKey, T>} - Returns `true` if the object is not null and has the specified property, otherwise returns `false`.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @example
 * ```typescript
 * import { has } from '@democrance/utils';
 *
 * const obj = { a: 1 };
 * if (has(obj, 'a')) {
 *   console.log(obj.a);  // TypeScript knows that `obj.a` exists and is a number
 * }
 * ```
 * @public
 */
export function has<T, K extends PropertyKey>(
    object: Nullable<T>,
    key: K,
): object is T & Record<K, any> {
    return object != null && Object.prototype.hasOwnProperty.call(object, key)
}
