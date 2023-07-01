import { describe, expect, it } from 'vitest'

import { movePropLevelUp } from '../lib/movePropLevelUp'

describe('@/lib/movePropLevelUp.ts', () => {
    it('should return the same value when input is not an object', () => {
        const result = movePropLevelUp(10, 'a')
        expect(result).toBe(10)
    })

    it('should return the same object when property name does not exist', () => {
        const obj = { a: 1, b: 2 }
        const result = movePropLevelUp(obj, 'c')
        expect(result).toEqual(obj)
    })

    it('should move property level up when property exists', () => {
        const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 }
        const result = movePropLevelUp(obj, 'b')
        expect(result).toEqual({ a: 1, c: 2, d: 3, e: 4 })
    })

    it('should deeply clone the nested property', () => {
        const obj = { a: 1, b: { c: 2, d: { e: 3, f: 4 } }, g: 5 }
        const result = movePropLevelUp(obj, 'b')
        expect(result).toEqual({ a: 1, c: 2, d: { e: 3, f: 4 }, g: 5 })
        expect(result.d).not.toBe(obj.b.d)
    })
})
