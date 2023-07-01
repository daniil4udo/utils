/**
 * Represents the format options for currency and price.
 *
 * @interface IFormat
 * @property {string} [currencySign] - The currency sign to use.
 * @property {string} [priceFormat] - The format to use for displaying prices.
 */
interface IFormat {
    readonly currencySign?: string
    readonly priceFormat?: string
}

/**
 * Represents the localization options including format options.
 *
 * @interface ILocate
 * @extends {IFormat}
 * @property {string} [defaultLocale] - The default locale to use.
 */
interface ILocate extends IFormat {
    readonly defaultLocale?: string
}

/**
 * Parses a string containing a locale-formatted number into a JavaScript number.
 *
 * The function uses the Intl.NumberFormat object to determine the thousands and decimal separators for
 * the specified locale. It then removes the thousands separators and replaces the decimal separator
 * with a dot to create a string that can be parsed by JavaScript's parseFloat function.
 *
 * @function parseLocaleNumber
 * @param {string} value - The string to be parsed. This should contain a number formatted according
 *      to the rules of the specified locale. For example, if the locale is 'de-DE',
 *      then the number should be formatted with '.' as the thousands separator
 *      and ',' as the decimal separator.
 * @param {string} locale - The IETF language tag of the locale that the number is formatted in.
 *      This is used to determine the thousands and decimal separators that are
 *      used in the number string.
 *
 * @returns {number} The parsed number. If the number string is not a valid number in the specified locale,
 *      the function will return NaN.
 *
 * @example
 * // returns 1000000.1
 * parseLocaleNumber('1,000,000.1', 'en-US');
 *
 * // returns 1000000.1
 * parseLocaleNumber('1.000.000,1', 'de-DE');
 */
export function parseLocaleNumber(value: string | number, locale = 'en') {
    const thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '')
    const decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '')

    return parseFloat(value
        .toString()
        .replace(new RegExp(`\\${thousandSeparator}`, 'g'), '')
        .replace(new RegExp(`\\${decimalSeparator}`), '.'))
}

/**
 * Formats a number value with localized formatting options.
 *
 * @function formatValue
 * @param {string | number} value - The number value to format. Can be a string or number.
 * @param {number} [fractions=2] - The number of decimal places to display. Defaults to 2.
 * @param {string} [locale='en'] - The locale identifier for number formatting. Defaults to 'en'.
 * @returns {string} The formatted number as a string.
 *
 * @example
 * formatValue(1234.5678); // Outputs: "1,234.57"
 * formatValue(1234.5678, 3); // Outputs: "1,234.568"
 * formatValue(1234.5678, 2, 'de-DE'); // Outputs: "1.234,57"
 */
export function formatValue(value: string | number, fractions = 2, locale = 'en') {
    const _price = parseLocaleNumber(value, locale)

    if (fractions > 20)
        fractions = 20

    return _price.toLocaleString(locale, {
        minimumFractionDigits: fractions, // minimumFractionDigits <= 2
        maximumFractionDigits: fractions, // maximumFractionDigits <= 20
    })
}

function applyCurrencySign(formattedPrice: string, { currencySign = '', priceFormat = '{currency} {amount}' }: IFormat) {
/**
 * Applies currency sign and price format to a formatted price string.
 *
 * @function applyCurrencySign
 * @param {string} formattedPrice - The formatted price value.
 * @param {IFormat} options - The currency format options.
 * @returns {string} The formatted price with currency sign and format applied.
 *
 * @example
 * const formattedPrice = applyCurrencySign('1,234.56', { currencySign: '$', priceFormat: '{currency}{amount}' });
 * console.log(formattedPrice); // Outputs: "$1,234.56"
 */
    return priceFormat
        .replace('{currency}', currencySign)
        .replace('{amount}', formattedPrice)
        .trim()
}

/**
 * Formats a price value with currency sign and formatting options.
 *
 * @function price
 * @param {string | number} [value=0] - The price value to format. Can be a string or number. Defaults to 0.
 * @param {ILocate} locale - The localization options for number and currency formatting.
 * @param {number} fractions - The number of decimal places to display.
 * @returns {string} The formatted price string.
 *
 * @example
 * price(1234.5678, { currencySign: '$', priceFormat: '{currency}{amount}' }, 2); // Outputs "$1,234.57"
 * price(1234.5678, { currencySign: '€', priceFormat: '{currency} {amount}' }, 3); // Outputs "€ 1,234.568"
 */

export function price(value: string | number = 0, locale: ILocate, fractions: number) {
    if (isNaN(Number(value)))
        return String(value)

    const { defaultLocale, ...priceOpts } = locale || {}

    const formattedValue = formatValue(String(value), fractions, defaultLocale)
    const valueWithSign = applyCurrencySign(formattedValue, priceOpts)

    if (Number(value) >= 0)
        return valueWithSign

    return `-${valueWithSign}`
}
