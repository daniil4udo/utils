import { describe, expect, it } from 'vitest'

import { keyBy } from '../lib/'

describe('@/lib/keyBy.ts', () => {
    it('should return object keyed by array elements if no key is provided', () => {
        const inputArray = [ 'a', 'b', 'c' ]
        const expectedResult = { a: 'a', b: 'b', c: 'c' }
        expect(keyBy(inputArray)).toEqual(expectedResult)
    })

    it('should return object keyed by string property', () => {
        const inputArray = [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }]
        const expectedResult = { 1: { id: 1, name: 'item1' }, 2: { id: 2, name: 'item2' } }
        expect(keyBy(inputArray, 'id')).toEqual(expectedResult)
    })

    it('should return object keyed by function result', () => {
        const inputArray = [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }]
        const expectedResult = { prefix1: { id: 1, name: 'item1' }, prefix2: { id: 2, name: 'item2' } }
        expect(keyBy(inputArray, obj => `prefix${obj.id}`)).toEqual(expectedResult)
    })

    it('should handle empty arrays correctly', () => {
        const inputArray = []
        const expectedResult = {}
        expect(keyBy(inputArray)).toEqual(expectedResult)
    })

    it('should handle number elements correctly when no key is provided', () => {
        const inputArray = [ 1, 2, 3 ]
        const expectedResult = { 1: 1, 2: 2, 3: 3 }
        expect(keyBy(inputArray)).toEqual(expectedResult)
    })

    it('should overwrite duplicate keys', () => {
        const inputArray = [{ id: 1, name: 'item1' }, { id: 1, name: 'item2' }]
        const expectedResult = { 1: { id: 1, name: 'item2' } }
        expect(keyBy(inputArray, 'id')).toEqual(expectedResult)
    })

    it('should throw TypeError if invalid key is generated', () => {
        const inputArray = [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }]
        const keyFunc = obj => obj.name
        const r = {
            item1: { id: 1, name: 'item1' },
            item2: { id: 2, name: 'item2' },
        }
        expect(keyBy(inputArray, keyFunc)).toEqual(r)
    })

    // TODO: fix it in the future versions
    it('should handle null values correctly when no key is provided', () => {
        expect(keyBy([ null ])).toEqual({})
        expect(keyBy([ undefined ])).toEqual({})
    })

    it('should throw TypeError if non-string/non-function key is provided', () => {
        const inputArray = [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }]
        const key = { notAStringOrFunction: true }
        expect(() => keyBy(inputArray, key)).toThrow(TypeError)
    })
})
