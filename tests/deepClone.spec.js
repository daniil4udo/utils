import { describe, expect, it } from 'vitest'

import { deepClone } from '../lib/'

describe('@/lib/deepClone.ts', () => {
    it('creates a deep clone of primitives', () => {
        const value = 123
        const clone = deepClone(value)
        expect(clone).toBe(value)
    })

    it('creates a deep clone of arrays', () => {
        const array = [ 1, 2, 3, { a: 1, b: 2 }]
        const clone = deepClone(array)
        expect(clone).toEqual(array)
        // Modify clone and check it doesn't affect the original
        clone[3].a = 5
        expect(array[3].a).toBe(1)
    })

    it('creates a deep clone of objects', () => {
        const object = { a: 1, b: [ 1, 2, 3 ], c: { d: 4 } }
        const clone = deepClone(object)
        expect(clone).toEqual(object)
        // Modify clone and check it doesn't affect the original
        clone.c.d = 5
        expect(object.c.d).toBe(4)
    })

    it('creates a deep clone of dates', () => {
        const date = new Date()
        const clone = deepClone(date)
        expect(clone).toEqual(date)
        // Modify clone and check it doesn't affect the original
        clone.setFullYear(2000)
        expect(date.getFullYear()).not.toBe(2000)
    })

    it('creates a deep clone of nested objects', () => {
        const object = { a: { b: { c: { d: 4 } } } }
        const clone = deepClone(object)
        expect(clone).toEqual(object)
        // Modify clone and check it doesn't affect the original
        clone.a.b.c.d = 5
        expect(object.a.b.c.d).toBe(4)
    })

    it('creates a deep clone of arrays containing objects', () => {
        const array = [{ a: 1 }, { b: 2 }, { c: 3 }]
        const clone = deepClone(array)
        expect(clone).toEqual(array)
        // Modify clone and check it doesn't affect the original
        clone[1].b = 5
        expect(array[1].b).toBe(2)
    })

    it('creates a deep clone of objects containing arrays', () => {
        const object = { a: [ 1, 2, 3 ], b: [ 4, 5, 6 ] }
        const clone = deepClone(object)
        expect(clone).toEqual(object)
        // Modify clone and check it doesn't affect the original
        clone.a[1] = 5
        expect(object.a[1]).toBe(2)
    })

    it('returns undefined when input is undefined', () => {
        const undefinedValue = undefined
        const clone = deepClone(undefinedValue)
        expect(clone).toBeUndefined()
    })

    it('returns null when input is null', () => {
        const nullValue = null
        const clone = deepClone(nullValue)
        expect(clone).toBeNull()
    })

    it('creates a deep clone of a complex object', () => {
        const complexObject = {
            a: 1,
            b: 'string',
            c: [ 1, 2, 3 ],
            d: { e: 4, f: [ 5, 6, 7 ], g: { h: 8 } },
            i: null,
            j: undefined,
            k: new Date(),
            l: Symbol('symbol'),
        }
        const clone = deepClone(complexObject)
        expect(clone).toEqual(complexObject)
        // Modify clone and check it doesn't affect the original
        clone.d.f[1] = 10
        expect(complexObject.d.f[1]).toBe(6)
    })
})
