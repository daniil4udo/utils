import { describe, expect, it } from 'vitest'

import { filterObject } from '../lib/filterObject'

describe('@/lib/filterObject.ts', () => {
    it('returns the same object if predicate is not a function', () => {
        const object = { a: 1, b: 2, c: 3 }
        const filteredObject = filterObject(object)
        expect(filteredObject).toEqual(object)
    })

    it('filters object based on provided predicate', () => {
        const object = { a: 1, b: 2, c: 3 }
        const predicate = (key, value) => value > 2
        const filteredObject = filterObject(object, predicate)
        expect(filteredObject).toEqual({ c: 3 })
    })

    it('ignores inherited properties', () => {
        const parentObject = { a: 1 }
        const object = Object.create(parentObject)
        object.b = 2
        object.c = 3
        const predicate = (key, value) => value > 1
        const filteredObject = filterObject(object, predicate)
        expect(filteredObject).toEqual({ b: 2, c: 3 })
    })

    it('handles an empty object', () => {
        const object = {}
        const predicate = (key, value) => value > 2
        const filteredObject = filterObject(object, predicate)
        expect(filteredObject).toEqual({})
    })

    it('correctly uses the index and object arguments in the predicate', () => {
        const object = { a: 1, b: 2, c: 3, d: 4 }
        const predicate = (key, value, index, obj) => value === obj.b && index === 1
        const filteredObject = filterObject(object, predicate)
        expect(filteredObject).toEqual({ b: 2 })
    })

    it('filters object with non-numeric values', () => {
        const object = { a: 'hello', b: 'world', c: 'filter', d: 'test' }
        const predicate = (key, value) => value.includes('o')
        const filteredObject = filterObject(object, predicate)
        expect(filteredObject).toEqual({ a: 'hello', b: 'world' })
    })

    it('filters object with boolean values', () => {
        const object = { a: true, b: false, c: true, d: false }
        const predicate = (key, value) => value === true
        const filteredObject = filterObject(object, predicate)
        expect(filteredObject).toEqual({ a: true, c: true })
    })

    it('filters object with nested objects', () => {
        const object = { a: { x: 1 }, b: { y: 2 }, c: { z: 3 } }
        const predicate = (key, value) => value.z !== undefined
        const filteredObject = filterObject(object, predicate)
        expect(filteredObject).toEqual({ c: { z: 3 } })
    })

    it('handles null values in object', () => {
        const object = { a: 1, b: null, c: 3 }
        const predicate = (key, value) => value !== null
        const filteredObject = filterObject(object, predicate)
        expect(filteredObject).toEqual({ a: 1, c: 3 })
    })

    it('filters object based on key values', () => {
        const object = { first: 1, second: 2, third: 3, fourth: 4 }
        const predicate = (key, value) => key.startsWith('f')
        const filteredObject = filterObject(object, predicate)
        expect(filteredObject).toEqual({ first: 1, fourth: 4 })
    })
})
