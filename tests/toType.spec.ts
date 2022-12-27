import { describe, expect, it } from 'vitest'

import { isPrimitive } from '../lib/isPrimitive'

describe('@/lib/toType.ts', () => {
    describe('toType with 1 argument', () => {
        it('truthy isPrimitive for Boolean type', () => {
            expect(isPrimitive(true)).toEqual(true)
        })

        it('truthy isPrimitive for Empty String type', () => {
            expect(isPrimitive('')).toEqual(true)
        })

        it('truthy isPrimitive for String type', () => {
            expect(isPrimitive('string')).toEqual(true)
        })

        it('truthy isPrimitive for zero type', () => {
            expect(isPrimitive(0)).toEqual(true)
        })

        it('truthy isPrimitive for Number type', () => {
            expect(isPrimitive(2307)).toEqual(true)
        })

        it('truthy isPrimitive for Symbol type', () => {
            expect(isPrimitive(Symbol('symbol'))).toEqual(true)
        })

        it('truthy isPrimitive for Null type', () => {
            expect(isPrimitive(null)).toEqual(true)
        })

        it('truthy isPrimitive for undefined type', () => {
            expect(isPrimitive(undefined)).toEqual(true)
        })
    })
})
