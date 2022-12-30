/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'

import { isEmptyArray } from '../lib/isEmptyArray'

describe('@/lib/isEmptyArray.ts', () => {
    describe('isEmptyArray with recursive argument as TRUE', () => {
        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray(null)).toBe(true)
        })

        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray([])).toBe(true)
        })

        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray([ [] ])).toBe(true)
        })

        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray([ [ '', null ], [ [ undefined ] ] ])).toBe(true)
        })

        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray([ 0, [], [ 0 ] ])).toBe(false)
        })
    })
    describe('isEmptyArray with recursive argument as FALSE', () => {
        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray(null, { recursive: false })).toBe(true)
        })

        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray([], { recursive: false })).toBe(true)
        })

        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray([ [] ], { recursive: false })).toBe(false)
        })

        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray([ [ '', null ], [ [ undefined ] ] ], { recursive: false })).toBe(false)
        })

        it('should return non-object when given as the first argument', () => {
            expect(isEmptyArray([ 0, [], [ 0 ] ], { recursive: false })).toBe(false)
        })
    })
})
