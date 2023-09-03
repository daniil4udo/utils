export type Nullish = null | undefined | void
export type Nullable<T> = T | null

/**
 * Type alias to get the length of an array.
 *
 * @template T - The type of the array.
 * @typedef {T['length']} Length
 */
export type Length<T extends unknown[]> = T['length']
