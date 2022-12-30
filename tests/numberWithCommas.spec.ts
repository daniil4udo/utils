/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'

import { getNumberFractionsLength, numberWithCommas } from '../lib/numberWithCommas'

describe('@/lib/numberWithCommas.ts', () => {
    describe('@/lib/getNumberFractionsLength.ts', () => {
        it('should return correct amount of the number fractions', () => {
            expect(getNumberFractionsLength('qwe.qwe')).toBe(0)

            expect(getNumberFractionsLength(123)).toBe(0)
            expect(getNumberFractionsLength(123.00)).toBe(0)
            expect(getNumberFractionsLength(123.12)).toBe(2)
            expect(getNumberFractionsLength(123.123)).toBe(3)

            expect(getNumberFractionsLength('123')).toBe(0)
            expect(getNumberFractionsLength('123.00')).toBe(0)
            expect(getNumberFractionsLength('123.12')).toBe(2)
            expect(getNumberFractionsLength('123.123')).toBe(3)
            expect(getNumberFractionsLength('0.1234')).toBe(4)
        })
    })

    describe('@/lib/numberWithCommas.ts', () => {
        it('should return formatted number', () => {
            expect(numberWithCommas(123)).toBe('123')
            expect(numberWithCommas(1234)).toBe('1,234')

            expect(numberWithCommas('123')).toBe('123')
            expect(numberWithCommas('1234')).toBe('1,234')
        })

        it('should return formatted number with fractions', () => {
            expect(numberWithCommas(123.01)).toBe('123.01')
            expect(numberWithCommas(1234.99)).toBe('1,234.99')

            expect(numberWithCommas('123456.123451234512345123451')).toBe('123,456.12345123451')
            expect(numberWithCommas('1234.99')).toBe('1,234.99')
        })

        it('should return formatted number with boolean dp', () => {
            expect(numberWithCommas(123, { fractions: true })).toBe('123')
            expect(numberWithCommas(123.01, { fractions: true })).toBe('123.01')
            expect(numberWithCommas(1234.99, { fractions: true })).toBe('1,234.99')

            expect(numberWithCommas(123, { fractions: false })).toBe('123')
            expect(numberWithCommas(123.01, { fractions: false })).toBe('123')

            expect(numberWithCommas(1234.99, { fractions: false })).toBe('1,234')
        })

        it('should return formatted number with numeric dp', () => {
            expect(numberWithCommas(123, { fractions: 2 })).toBe('123.00')
            expect(numberWithCommas(123.01, { fractions: 2 })).toBe('123.01')
            expect(numberWithCommas(1234.99, { fractions: 5 })).toBe('1,234.99000')
        })
    })
})
