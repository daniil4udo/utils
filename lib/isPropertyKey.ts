import type { ParsablePropertyKey } from './types';

import { isNumber } from './isNumber';

/**
 * Checks if the given input is a valid JavaScript property key.
 *
 * @param input - The value to be checked.
 * @returns A type predicate that narrows down the type of `input` to `PropertyKey` if the function returns `true`.
 *
 * @remarks
 * A property key in JavaScript can be a `string`, `symbol`, or `number`. This function uses type narrowing to assert whether a given unknown input conforms to these types.
 *
 * @public
 */
export function isPropertyKey(input: unknown): input is PropertyKey {
    const type = typeof input;
    return type === 'string' || type === 'symbol' || isNumber(input);
}

/**
 * Checks if the given input can be parsed as a property key.
 *
 * @param input - The value to be checked.
 * @returns A type predicate that narrows down the type of `input` to `ParsablePropertyKey` if the function returns `true`.
 *
 * @remarks
 * A parsable property key is a value that can be easily converted to a valid JavaScript property key. This function considers `string` and `number` types as parsable property keys.
 *
 * @public
 */
export function isParsablePropertyKey(input: unknown): input is ParsablePropertyKey {
    return typeof input === 'string' || isNumber(input);
}
