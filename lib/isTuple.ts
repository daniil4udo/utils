/**
 * This function checks whether the given input is a tuple of two numbers.
 *
 * A tuple is considered valid if it is an array with exactly two elements.
 * The generic parameters `T` and `V` are placeholders for any type of number.
 * The type predicate `input is [T, V]` ensures that TypeScript will narrow
 * the type of `input` to `[T, V]` in the scope where this function returns true.
 *
 * @template T - The type of the first element in the tuple.
 * @template V - The type of the second element in the tuple.
 *
 * @param input - The value to be checked.
 *
 * @returns A type predicate indicating whether `input` is a tuple of two numbers.
 *
 * @example
 * const tuple: unknown = [1, 2];
 * if (isTuple<number, number>(tuple)) {
 *   console.log(tuple[0]);  // Output: 1
 *   console.log(tuple[1]);  // Output: 2
 * }
 */
export function isTuple<T, V>(input: unknown): input is [T, V] {
    return Array.isArray(input) && input.length === 2;
}
