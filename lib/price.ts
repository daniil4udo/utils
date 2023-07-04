import { toType } from './toType'

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
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
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
 * ```ts
 * import { parseLocaleNumber } from '@democrance/utils';
 *
 * // returns 1000000.1
 * parseLocaleNumber('1,000,000.1', 'en-US');
 *
 * // returns 1000000.1
 * parseLocaleNumber('1.000.000,1', 'de-DE');
 * ```
 * @public
 */
export function parseLocaleNumber(value, locale: string) {
    const format = new Intl.NumberFormat(locale).format(1000.1)
    const [ thousandsSeparator, decimalSeparator ] = format.match(/[\D]/g) as RegExpMatchArray

    const normalized = value
        .toString()
        .replace(new RegExp(`\\${thousandsSeparator}`, 'g'), '') // Remove thousands separators
        .replace(new RegExp(`\\${decimalSeparator}`), '.') // Replace decimal separator with '.'

    return parseFloat(normalized)
}

/**
 * Function to format a value to a locale string with the ability to control the fraction digits.
 * It takes the value as a string or number, and an optional fractions parameter which can be a boolean or number.
 * If fractions is a boolean and is true, the number will be formatted with the maximum safe fraction digits (20).
 * If fractions is a boolean and is false, the number will be formatted without fraction digits.
 * If fractions is a number, the number will be formatted with the fractions provided. However, if the fractions
 * provided exceeds the maximum safe fraction digits, the maximum safe fraction digits will be used.
 *
 * The function throws an error if the fractions parameter is not a boolean or number.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param {string | number} value - The value to be formatted. If it is a string, it will be converted to a number.
 * @param {boolean | number} [fractions=true] - Determines the number of fraction digits in the formatted output.
 * @param {string} [locale='en'] - The locale in which the number should be formatted. Default is 'en' for English.
 * @throws {TypeError} - Will throw an error if fractions is not a boolean or a number.
 *
 * @returns {string} - The formatted number as a string.
 *
 * @example
 * ```ts
 * import { formatValue } from '@democrance/utils';
 *
 * formatValue(1234.5678); // Outputs: "1,234.57"
 * formatValue(1234.5678, 3); // Outputs: "1,234.568"
 * formatValue(1234.5678, 2, 'de-DE'); // Outputs: "1.234,57"
 * ```
 * @public
 */
export function formatValue(value: string | number, fractions: boolean | number = true, locale = 'en'): string {
    const MAX_SAFE_FRACTIONS = 20

    const valueNumber = isNaN(Number(value)) ? parseLocaleNumber(value, locale) : Number(value)
    const valueType = toType(fractions)

    if (valueType !== 'boolean' && valueType !== 'number')
        throw new TypeError(`[formatValue] - fractions should be either Boolean or Number. Got ${valueType}`)

    let options: Intl.NumberFormatOptions = {}

    if (valueType === 'boolean') {
        options = {
            maximumFractionDigits: fractions ? MAX_SAFE_FRACTIONS : 0,
        }
    }
    else {
        const safeFractions = Math.min(fractions as number, MAX_SAFE_FRACTIONS)
        options = {
            minimumFractionDigits: safeFractions,
            maximumFractionDigits: safeFractions,
        }
    }

    return valueNumber.toLocaleString(locale, options)
}

/**
 * Applies currency sign and price format to a formatted price string.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @function applyCurrencySign
 * @param {string} formattedPrice - The formatted price value.
 * @param {IFormat} options - The currency format options.
 * @returns {string} The formatted price with currency sign and format applied.
 *
 * @example
 * ```ts
 * import { formattedPrice } from '@democrance/utils';
 *
 * const formattedPrice = applyCurrencySign('1,234.56', { currencySign: '$', priceFormat: '{currency}{amount}' });
 * console.log(formattedPrice); // Outputs: "$1,234.56"
 * ```
 * @public
 */
export function applyCurrencySign(formattedPrice: string, { currencySign = '', priceFormat = '{currency} {amount}' }: IFormat) {
    return priceFormat
        .replace('{currency}', currencySign)
        .replace('{amount}', formattedPrice)
        .trim()
}

/**
 * Formats a price value with currency sign and formatting options.
 *
 * @remarks
 * This function is a part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @function price
 * @param {string | number} [value=0] - The price value to format. Can be a string or number. Defaults to 0.
 * @param {ILocate} locale - The localization options for number and currency formatting.
 * @param {number} fractions - The number of decimal places to display.
 * @returns {string} The formatted price string.
 *
 * @example
 * ```ts
 * import { price } from '@democrance/utils';
 *
 * price(1234.5678, { currencySign: '$', priceFormat: '{currency}{amount}' }, 2); // Outputs "$1,234.57"
 * price(1234.5678, { currencySign: '€', priceFormat: '{currency} {amount}' }, 3); // Outputs "€ 1,234.568"
 * ```
 * @public
 */
export function price(value: number, locale: ILocate, fractions: number) {
    if (isNaN(value))
        return value

    const { defaultLocale, ...priceOpts } = locale || {}

    const formattedValue = formatValue(Math.abs(value), fractions, defaultLocale)
    const valueWithSign = applyCurrencySign(formattedValue, priceOpts)

    if (value >= 0)
        return valueWithSign

    return `-${valueWithSign}`
}
