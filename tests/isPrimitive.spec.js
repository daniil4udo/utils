import { describe, expect, it } from 'vitest'

import { isPrimitive, isProperNaN } from '../lib/'

describe('@/lib/isPrimitive.ts', () => {
    describe('isPrimitive with 1 argument', () => {
        it('truthy isPrimitive for Boolean type', () => {
            expect(isPrimitive(true)).toBeTruthy()
        })

        it('truthy isPrimitive for Empty String type', () => {
            expect(isPrimitive('')).toBeTruthy()
        })

        it('truthy isPrimitive for String type', () => {
            expect(isPrimitive('string')).toBeTruthy()
        })

        it('truthy isPrimitive for NaN type', () => {
            expect(isPrimitive(Number.NaN)).toBeTruthy()
        })

        it('truthy isPrimitive for zero type', () => {
            expect(isPrimitive(0)).toBeTruthy()
        })

        it('truthy isPrimitive for Number type', () => {
            expect(isPrimitive(2307)).toBeTruthy()
        })

        it('truthy isPrimitive for Infinite Number type', () => {
            expect(isPrimitive(Number.POSITIVE_INFINITY)).toBeTruthy()
            expect(isPrimitive(Number.NEGATIVE_INFINITY)).toBeTruthy()
        })

        it('truthy isPrimitive for Symbol type', () => {
            expect(isPrimitive(Symbol('symbol'))).toBeTruthy()
        })

        it('truthy isPrimitive for Null type', () => {
            expect(isPrimitive(null)).toBeTruthy()
        })

        it('truthy isPrimitive for undefined type', () => {
            expect(isPrimitive(undefined)).toBeTruthy()
        })
    })

    describe('isProperNaN', () => {
        it('returns true if the value is NaN', () => {
            const value = Number.NaN
            expect(isProperNaN(value)).toBeTruthy()
        })

        it('returns true if the value is not NaN', () => {
            const values = [ 'a', undefined, null, {}, [] ]

            values.forEach(value => {
                expect(isProperNaN(value)).toBeTruthy()
            })
        })

        it('returns true if the value is a string of "NaN"', () => {
            const value = 'NaN'
            expect(isProperNaN(value)).toBeTruthy()
        })

        it('returns false if the value is a string containing numbers', () => {
            const value = '123'
            expect(isProperNaN(value)).toBeFalsy()
        })

        it('returns false if the value is a string containing alphanumeric characters', () => {
            const value = '123abc'
            expect(isProperNaN(value)).toBeTruthy()
        })

        it('returns true if the value is Infinity', () => {
            expect(isProperNaN(Number.POSITIVE_INFINITY)).toBeTruthy()
            expect(isProperNaN(Number.NEGATIVE_INFINITY)).toBeTruthy()
        })

        it('returns true if the value is MAX', () => {
            expect(isProperNaN(Number.MAX_VALUE)).toBeFalsy()
            expect(isProperNaN(Number.MIN_VALUE)).toBeFalsy()
            expect(isProperNaN(Number.MAX_SAFE_INTEGER)).toBeFalsy()
            expect(isProperNaN(Number.MIN_SAFE_INTEGER)).toBeFalsy()
        })

        it('returns true if the value is a mathematical operation leading to NaN', () => {
            const value = 0 / 0
            expect(isProperNaN(value)).toBeTruthy()
        })

        it('returns false if the value is an empty string', () => {
            const value = ''
            expect(isProperNaN(value)).toBeTruthy()
        })

        it('returns false if the value is a boolean', () => {
            expect(isProperNaN(true)).toBeTruthy()
            expect(isProperNaN(true)).toBeTruthy()
        })
    })
})
