import { describe, expect, it } from 'vitest'

import { capitalize, toLower, toUpper } from '../lib/'

describe('@/lib/changeCase.ts', () => {
    describe('capitalize', () => {
        it('capitalizes the first letter of a lowercase word', () => {
            expect(capitalize('hello')).toBe('Hello')
        })

        it('keeps the first letter capitalized if it already is', () => {
            expect(capitalize('WORLD')).toBe('WORLD')
        })

        it('returns empty string when given an empty string', () => {
            expect(capitalize('')).toBe('')
        })

        it('returns the original value when given a non-string', () => {
            expect(() => capitalize(123)).toThrow(TypeError)
        })
    })

    describe('toUpper', () => {
        it('converts a lowercase string to uppercase', () => {
            expect(toUpper('hello')).toBe('HELLO')
        })

        it('keeps the string the same if it is already in uppercase', () => {
            expect(toUpper('WORLD')).toBe('WORLD')
        })

        it('returns empty string when given an empty string', () => {
            expect(toUpper('')).toBe('')
        })

        it('returns the original value when given a non-string', () => {
            expect(() => toUpper(123)).toThrow(TypeError)
        })
    })

    describe('toLower', () => {
        it('converts an uppercase string to lowercase', () => {
            expect(toLower('HELLO')).toBe('hello')
        })

        it('keeps the string the same if it is already in lowercase', () => {
            expect(toLower('world')).toBe('world')
        })

        it('returns empty string when given an empty string', () => {
            expect(toLower('')).toBe('')
        })

        it('returns the original value when given a non-string', () => {
            expect(() => toLower(123)).toThrow(TypeError)
        })
    })
})
