import { describe, expect, it } from 'vitest'

import { applyCurrencySign, formatValue, parseLocaleNumber, price } from '../lib/price'

describe('@/lib/price.ts', () => {
    describe('parseLocaleNumber', () => {
        it('should parse a localized number string', () => {
            expect(parseLocaleNumber('1,234.56')).to.equal(1234.56)
            expect(parseLocaleNumber('1.234,56', 'de-DE')).to.equal(1234.56)
        })

        it('should parse a number value without changing it', () => {
            expect(parseLocaleNumber(1234.56)).to.equal(1234.56)
        })
    })

    describe('formatValue', () => {
        it('should format number with maximum fractions when fractions is true', () => {
            expect(formatValue(1000.123456789123456789, true, 'en')).toBe('1,000.1234567891235')
        })

        it('should format number with no fractions when fractions is false', () => {
            expect(formatValue(1000.123456789123456789, false, 'en')).toBe('1,000')
        })

        it('should format number with specific number of fractions', () => {
            expect(formatValue(1000.123456789123456789, 5, 'en')).toBe('1,000.12346')
        })

        it('should throw error when fractions is neither a boolean or a number', () => {
            expect(() => formatValue(1000.123456789123456789, 'invalid', 'en')).toThrow(TypeError)
        })

        it('should format number based on the locale', () => {
            expect(formatValue(1000.123456789123456789, true, 'de')).toBe('1.000,1234567891235')
        })

        it('should format a number value with default options', () => {
            expect(formatValue(1234.5678)).to.equal('1,234.5678')
        })

        it('should format a number value with custom fraction digits', () => {
            expect(formatValue(1234.5678, 3)).to.equal('1,234.568')
        })

        it('should format a number value with a different locale', () => {
            expect(formatValue(1234.5678, 2, 'de-DE')).to.equal('1.234,57')
        })
    })

    describe('applyCurrencySign', () => {
        it('should apply currency sign and format to a price string', () => {
            const formattedPrice = applyCurrencySign('1,234.56', {
                currencySign: '$',
                priceFormat: '{currency}{amount}',
            })
            expect(formattedPrice).to.equal('$1,234.56')
        })

        it('should apply currency sign and format with default options', () => {
            const formattedPrice = applyCurrencySign('1,234.56', {})
            expect(formattedPrice).to.equal('1,234.56')
        })
    })

    describe('price', () => {
        it('should format a price value with default options', () => {
            expect(price(1234.5678, { currencySign: '$', priceFormat: '{currency} {amount}' }, 2)).to.equal('$ 1,234.57')
        })

        it('should format a negative price value with default options', () => {
            expect(price(-1234.5678, { currencySign: '$', priceFormat: '{currency} {amount}' }, 2)).to.equal('-$ 1,234.57')
        })

        it('should format a price value with custom options', () => {
            expect(price(1234.5678, { currencySign: '€', priceFormat: '{currency}{amount}' }, 3)).to.equal('€1,234.568')
        })

        it('should return the input value as string if it is not a number', () => {
            expect(price('Invalid Value', { currencySign: '$', priceFormat: '{currency} {amount}' }, 2)).to.equal('Invalid Value')
        })
    })
})
