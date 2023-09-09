/**
 * Safely parses a JSON string and returns the parsed value or the original input string if parsing fails.
 *
 * This function tries to parse the input string as JSON using `JSON.parse()`. If the parsing is successful,
 * the parsed value is returned. If an error occurs during parsing, the original input string is returned.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @typeParam T - The expected type of the parsed JSON.
 * @param input - The JSON string to be parsed.
 * @param reviver - An optional reviver function for transforming the results.
 * @returns The parsed JSON value of type `T`, or the original input string if parsing fails.
 *
 * @example
 * ```ts
 * import { safeJSONParse } from '@democrance/utils';
 *
 * const json = '{ "name": "John", "age": 30 }';
 * const parsed = safeJSONParse(json);
 * console.log(parsed); // Outputs: { name: "John", age: 30 }
 *
 * const invalidJson = '{ "name": "John, "age": 30 }';
 * const result = safeJSONParse(invalidJson);
 * console.log(result); // Outputs: '{ "name": "John, "age": 30 }'
 * ```
 * @public
 */
export function safeJSONParse<T>(input: string, reviver?: Parameters<typeof JSON.parse>[1]): T | string {
    try {
        return JSON.parse(input, reviver) as T
    }
    catch {
        return input
    }
}

/**
 * Default export provides a custom implementation for JSON serialization and
 * deserialization methods (`parse` and `stringify`).
 *
 * This custom implementation replaces the standard `JSON.parse` with `safeJSONParse`,
 * which safely handles parsing errors by returning the original string.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 */
export default {
    parse: safeJSONParse,
    stringify: JSON.stringify,
}
