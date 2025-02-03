import { parseTemplate } from 'url-template';

export type UrlTemplateContext = Parameters<ReturnType<typeof parseTemplate>['expand']>[0];

export function urlTemplate(
    url: string,
    context: UrlTemplateContext,
): string {
    return parseTemplate(url).expand(context);
}

/**
 * Takes a URL template as input and returns an object with an `expand` method.
 *
 * @module parseURLTemplate
 * @see {@link https://github.com/bramstein/url-template}
 *
 * @param {string} template - The URL template string to parse.
 * @returns {object} Returns an object with an `expand` method that can be used
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
export { parseTemplate as parseURLTemplate };
