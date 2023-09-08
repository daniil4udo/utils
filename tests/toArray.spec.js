import { describe, expect, it } from 'vitest'

import { toArray } from '../lib'

describe('@/lib/toArray.ts', () => {
    it('should return an empty array when input is null or undefined', () => {
        expect(toArray(null)).toEqual([])
        expect(toArray(undefined)).toEqual([])
    })

    it('should return an array when input is a string', () => {
        expect(toArray('foo')).toStrictEqual([ 'foo' ])
    })

    it('should return an array when input is iterable', () => {
        expect(toArray(new Map([ [ 1, 2 ] ]))).toStrictEqual([ [ 1, 2 ] ])
        expect(toArray(new Set([ 1, 2 ]))).toStrictEqual([ 1, 2 ])
    })

    it('should return an array when input is an object', () => {
        expect(toArray({ foo: 'bar' })).toStrictEqual([{ foo: 'bar' }])
    })

    it('should return an array when input is an array', () => {
        const fooArray = [ 'foo' ]
        // checks referential identity of the array instances
        expect(toArray(fooArray)).toBe(fooArray)
        expect(toArray(fooArray)).toStrictEqual(fooArray)

        const fooObjectArray = [
            { foo: 'foo' },
            { bar: 'bar' },
        ]
        const fooDeepCopy = toArray(fooObjectArray, { deep: true })
        // copy should not be same referential identity
        expect(fooDeepCopy).not.toBe(fooObjectArray)
        expect(fooDeepCopy).toStrictEqual(fooObjectArray)

        const fooShallowCopy = toArray(fooObjectArray, { shallow: true })
        // copy should not be same referential identity
        expect(fooShallowCopy).not.toBe(fooObjectArray)
        expect(fooShallowCopy).toStrictEqual(fooObjectArray)
    })
})
