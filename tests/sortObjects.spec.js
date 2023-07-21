import { describe, expect, it } from 'vitest'

import { sortObjects } from '../lib/'

describe('@/lib/sortObjects.ts', () => {
    it('should correctly sort an array of objects in ascending order', () => {
        const collection = [{ name: 'Zoe' }, { name: 'Amy' }, { name: 'Mark' }]
        const expected = [{ name: 'Amy' }, { name: 'Mark' }, { name: 'Zoe' }]
        expect(sortObjects(collection, 'name')).toEqual(expected)
    })

    it('should correctly sort an array of objects with special characters in ascending order', () => {
        const collection = [{ name: 'Zoë' }, { name: 'Amélie' }, { name: 'Mårk' }]
        const expected = [{ name: 'Amélie' }, { name: 'Mårk' }, { name: 'Zoë' }]
        expect(sortObjects(collection, 'name', 'fr')).toEqual(expected)
    })

    it('should handle an empty array', () => {
        const collection = []
        const expected = []
        expect(sortObjects(collection, 'name')).toEqual(expected)
    })

    it('should handle an array of objects with the same key value', () => {
        const collection = [{ name: 'Amy' }, { name: 'Amy' }, { name: 'Amy' }]
        const expected = [ ...collection ]
        expect(sortObjects(collection, 'name')).toEqual(expected)
    })

    it('should return the original array when the key is not present in the objects', () => {
        const collection = [{ name: 'Mark' }, { name: 'Amy' }, { name: 'Zoe' }]
        const expected = [ ...collection ]
        expect(sortObjects(collection, 'age')).toEqual(expected)
    })

    it('should correctly sort an array of objects with numeric key values', () => {
        const collection = [{ age: 30 }, { age: 20 }, { age: 50 }]
        const expected = [{ age: 20 }, { age: 30 }, { age: 50 }]
        expect(sortObjects(collection, 'age')).toEqual(expected)
    })

    it('should correctly sort an array of mixed string and numeric key values', () => {
        const collection = [{ id: '20' }, { id: 10 }, { id: 30 }]
        const expected = [{ id: 10 }, { id: '20' }, { id: 30 }]
        expect(sortObjects(collection, 'id')).toEqual(expected)
    })

    it('should handle an array of objects where some have the key and others do not', () => {
        const collection = [{ name: 'Amy' }, { age: 24 }, { name: 'Zoe' }]
        const expected = [{ age: 24 }, { name: 'Amy' }, { name: 'Zoe' }]
        expect(sortObjects(collection, 'name')).toEqual(expected)
    })

    it('should correctly sort an array of objects with non-alphanumeric key values', () => {
        const collection = [{ name: '!Amy' }, { name: '#Zoe' }, { name: '@Mark' }]
        const expected = [{ name: '!Amy' }, { name: '@Mark' }, { name: '#Zoe' }]
        expect(sortObjects(collection, 'name')).toEqual(expected)
    })

    it('should handle an array of objects where some have null or undefined key values', () => {
        const collection = [{ name: 'Amy' }, { name: null }, { name: 'Zoe' }, { name: undefined }]
        const expected = [{ name: null }, { name: undefined }, { name: 'Amy' }, { name: 'Zoe' }]
        expect(sortObjects(collection, 'name')).toEqual(expected)
    })
})
