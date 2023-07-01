import { describe, expect, it } from 'vitest'

import { splitByIndex } from '../lib/splitByIndex'

describe('@/lib/splitByIndex.ts', () => {
    it('splits an array at the specified index', () => {
        expect(splitByIndex([ 1, 2, 3, 4, 5 ], 2)).toEqual([ [ 1, 2 ], [ 3, 4, 5 ] ])
    })

    it('splits an array with strings at the specified index', () => {
        expect(splitByIndex([ 'a', 'b', 'c', 'd', 'e' ], 3)).toEqual([ [ 'a', 'b', 'c' ], [ 'd', 'e' ] ])
    })

    it('returns an empty array and the original array if index is 0', () => {
        expect(splitByIndex([ 1, 2, 3, 4, 5 ], 0)).toEqual([ [], [ 1, 2, 3, 4, 5 ] ])
    })

    it('returns the original array and an empty array if index is equal to array length', () => {
        expect(splitByIndex([ 1, 2, 3, 4, 5 ], 5)).toEqual([ [ 1, 2, 3, 4, 5 ], [] ])
    })

    it('returns the original array and an empty array if index is not provided', () => {
        expect(splitByIndex([ 1, 2, 3, 4, 5 ])).toEqual([ [ 1, 2, 3, 4, 5 ], [] ])
    })

    it('returns two empty arrays if the original array is empty', () => {
        expect(splitByIndex([], 0)).toEqual([ [], [] ])
    })

    it('throws an error if the index is out of bounds', () => {
        expect(() => splitByIndex([ 1, 2, 3, 4, 5 ], 10)).toThrow()
    })
})
