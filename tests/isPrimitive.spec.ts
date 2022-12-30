import { describe, expect, it } from 'vitest'

import { isPrimitive } from '../lib/isPrimitive'

describe('@/lib/isPrimitive.ts', () => {
    describe('isPrimitive with 1 argument', () => {
        it('truthy isPrimitive for Boolean type', () => {
            expect(isPrimitive(true)).toBe(true)
        })

        it('truthy isPrimitive for Empty String type', () => {
            expect(isPrimitive('')).toBe(true)
        })

        it('truthy isPrimitive for String type', () => {
            expect(isPrimitive('string')).toBe(true)
        })

        it('truthy isPrimitive for zero type', () => {
            expect(isPrimitive(0)).toBe(true)
        })

        it('truthy isPrimitive for Number type', () => {
            expect(isPrimitive(2307)).toBe(true)
        })

        it('truthy isPrimitive for Symbol type', () => {
            expect(isPrimitive(Symbol('symbol'))).toBe(true)
        })

        it('truthy isPrimitive for Null type', () => {
            expect(isPrimitive(null)).toBe(true)
        })

        it('truthy isPrimitive for undefined type', () => {
            expect(isPrimitive(undefined)).toBe(true)
        })
    })
})
