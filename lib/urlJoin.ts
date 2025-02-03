/**
 * urlJoin is a library for joining URL segments in JavaScript.
 * It provides a simple and reliable API to concatenate multiple URL segments into a single URL string, handling leading and trailing slashes, and ensuring proper URL formatting.
 *
 * @module urlJoin
 * @see {@link https://github.com/moxystudio/js-proper-url-join}
 *
 *
 * @example
 * ```ts
 * import { urlJoin } from '@democrance/utils';
 *
 * // Join URL segments
 * const url = urlJoin('https://example.com', 'api', 'users', '123');
 * console.log(url); // Output: "https://example.com/api/users/123"
 *
 * // Join URL segments with leading and trailing slashes
 * const urlWithSlashes = urlJoin('/base/', '/path/', '/to/', '/resource/');
 * console.log(urlWithSlashes); // Output: "/base/path/to/resource/"
 *
 * // Join URL segments with query parameters
 * const queryUrl = urlJoin('https://example.com', 'api', 'users', '123', { limit: 10, sortBy: 'name' });
 * console.log(queryUrl); // Output: "https://example.com/api/users/123?limit=10&sortBy=name"
 * ```
 * @public
 */
export { default as urlJoin } from 'proper-url-join';
