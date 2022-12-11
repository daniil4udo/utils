import { describe, expect, it } from 'vitest'

import { isPrimitive } from '../lib/isPrimitive'

describe('@/utils/toType.ts', () => {
    describe('toType with 1 argument', () => {
        it('truthy isPrimitive for Boolean type', () => {
            const primitive = isPrimitive(true)

            expect(primitive).toBeTruthy()
        })

        it('truthy isPrimitive for Empty String type', () => {
            const primitive = isPrimitive('')

            expect(primitive).toBeTruthy()
        })

        it('truthy isPrimitive for String type', () => {
            const primitive = isPrimitive('string')

            expect(primitive).toBeTruthy()
        })

        it('truthy isPrimitive for zero type', () => {
            const primitive = isPrimitive(0)

            expect(primitive).toBeTruthy()
        })

        it('truthy isPrimitive for Number type', () => {
            const primitive = isPrimitive(2307)

            expect(primitive).toBeTruthy()
        })

        it('truthy isPrimitive for Symbol type', () => {
            const primitive = isPrimitive(Symbol('symbol'))

            expect(primitive).toBeTruthy()
        })

        it('truthy isPrimitive for Null type', () => {
            const primitive = isPrimitive(null)

            expect(primitive).toBeTruthy()
        })

        it('truthy isPrimitive for undefined type', () => {
            const primitive = isPrimitive(undefined)

            expect(primitive).toBeTruthy()
        })
    })
})
