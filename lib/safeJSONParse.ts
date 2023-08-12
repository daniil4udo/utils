/**
 * Safely parses a JSON string or returns the input value if parsing fails.
 *
 * This function attempts to parse the input as JSON using `JSON.parse()`. If the parsing succeeds,
 * it returns the parsed value. If an error occurs during parsing, it returns the original input value.
 * The input value is automatically typecasted to a string before parsing to ensure compatibility.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param {JSONParseResult<T>} input - The value to parse as JSON.
 * @returns {JSONParseResult<T>} - The parsed JSON value or the original input value if parsing fails.
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
export function safeJSONParse<T>(input: string): T | string {
    try {
        return JSON.parse(input) as T
    }
    catch {
        return input as string
    }
}
