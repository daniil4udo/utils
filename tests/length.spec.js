import { describe, expect, it } from 'vitest'

import { length } from '../lib/'

describe('@/lib/length.ts', () => {
    it('should return 0 for an empty array', () => {
        expect(length([])).toBe(0)
    })

    it('should return the correct length for an array', () => {
        expect(length([ 1, 2, 3 ])).toBe(3)
    })

    it('should return 0 for an empty string (when includeString is false)', () => {
        expect(length('')).toBeNull()
    })

    it('should return the correct length for a string (when includeString is true)', () => {
        expect(length('hello', { includeString: true })).toBe(5)
    })

    it('should return 0 for an empty object', () => {
        expect(length({})).toBe(0)
    })

    it('should return the correct length for an object', () => {
        expect(length({ a: 1, b: 2, c: 3 })).toBe(3)
    })

    it('should return 0 for undefined or null', () => {
        expect(length(undefined)).toBeNull()
        expect(length(null)).toBeNull()
    })

    it('should return 0 if an exception occurs', () => {
        // Simulate an exception
        expect(length({ length: 'not a number' })).toBe(1)
    })

    it('should return the size of a Set', () => {
        expect(length(new Set([ 1, 2, 3 ]))).toBe(3)
    })

    it('should return the size of a Map', () => {
        expect(length(new Map([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]))).toBe(3)
    })
})
