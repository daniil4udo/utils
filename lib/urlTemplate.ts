/**
 * Takes a URL template as input and returns an object with an `expand` method.
 *
 * @module zipcelx
 * @see {@link https://github.com/bramstein/url-template}
 *
 * @function
 * @name parseTemplate
 * @param {string} template - The URL template string to parse.
 * @returns {Object} Returns an object with an `expand` method that can be used
 *      to replace expressions in the template with actual values.
 *
 * @example
 * ```ts
 * import { parseURLTemplate } from '@democrance/utils';
 *
 * const template = parseURLTemplate('/search/{term}');
 * const url = template.expand({ term: 'javascript' });
 * console.log(url); // '/search/javascript'
 * ```
 * @public
 */
export { parseTemplate as parseURLTemplate } from 'url-template'
