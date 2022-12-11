/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @see has, hasIn, set, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */
import stringToPath from 'lodash-es/_stringToPath'

export function getPropValue(
    collection: Record<any, any> | readonly any[],
    path = '',
    defaultValue?: any,
) {
    const result = collection == null
        ? undefined
        : stringToPath(path)
            .filter(el => (el != null && el !== ''))
            .reduce((o: any, x) => (o == undefined ? o : o[x]), collection)
    return result === undefined ? defaultValue : result
}
