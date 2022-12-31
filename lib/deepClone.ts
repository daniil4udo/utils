import _deepClone from 'rfdc'

/**
 * Clones input into new input
 *
 * @param {any} input
 *
 * @returns {any} new input
 *
 */
export function deepClone<T>(input: T): T {
    try {
        return structuredClone(input)
    }
    catch {
        return _deepClone({ proto: false })(input)
    }
}
