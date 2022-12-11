export interface IFormat {
    readonly currencySign?: string
    readonly priceFormat?: string
}

export interface ILocate extends IFormat {
    readonly defaultLocale?: string
}

/**
 * Parse a localized number to a float.
 * @param {String} value - the localized number
 * @param {String} locale - [optional] the locale that the number is represented in. Omit this parameter to use the current locale.
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
 * Localize either number or already formatted string to the price format.
 * @param {String|Number} value - the localized number
 * @param {String} fractions - how many of the equal parts of the number are being considered
 * @param {String} locale - [optional] the locale that the number is represented in. Omit this parameter to use the current locale.
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

const applyCurrencySign = (formattedPrice: string, { currencySign = '', priceFormat = '{currency} {amount}' }: IFormat) => priceFormat
    .replace('{currency}', currencySign)
    .replace('{amount}', formattedPrice)
    .trim()

/**
 * Converts number to price string
 * @param {Number} value
 * USAGE:
 *      price(unformattedPrice, {
 *           currencySign: 'AED',
 *           priceFormat: '{amount}{currency}',
 *      });
 * DEFAULTS:
 *      currencySign = ''
 *      priceFormat = '{currency} {amount}'
 *      minimumFractionDigits = 2
 *      maximumFractionDigits = 2
 */

export function price(value: string | number = 0, locale: ILocate, fractions: number) {
    if (isNaN(Number(value)))
        return String(value)

    const { defaultLocale, ...priceOpts } = locale || {}

    const formattedValue = formatValue(String(value), fractions, defaultLocale)
    const valueWithSign = applyCurrencySign(formattedValue, priceOpts)

    if (value >= 0)
        return valueWithSign

    return `-${valueWithSign}`
}
