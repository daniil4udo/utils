import { describe, expect, it } from 'vitest'

import { isEmptyArray } from '../lib/'

describe('@/lib/isEmptyArray.ts', () => {
    it('returns true for null', () => {
        expect(isEmptyArray(null)).toBeTruthy()
    })

    it('returns true for undefined', () => {
        expect(isEmptyArray(undefined)).toBeTruthy()
    })

    it('returns true for an empty array', () => {
        expect(isEmptyArray([])).toBeTruthy()
    })

    it('returns false for an array with non-empty elements', () => {
        expect(isEmptyArray([ 1, 2, 3 ])).toBeFalsy()
    })

    it('returns true for an array with only empty arrays', () => {
        expect(isEmptyArray([ [], [] ])).toBeTruthy()
    })

    it('returns true for an array with only empty arrays (recursive false)', () => {
        expect(isEmptyArray([ [], [] ], { recursive: false })).toBeFalsy()
    })

    it('returns true for a deeply nested array with only empty arrays', () => {
        expect(isEmptyArray([ [], [ [], [] ] ])).toBeTruthy()
    })

    it('returns true for a deeply nested array with only empty arrays (recursive false)', () => {
        expect(isEmptyArray([ [], [ [], [] ] ], { recursive: false })).toBeFalsy()
    })

    it('returns false for a deeply nested array with a non-empty array', () => {
        expect(isEmptyArray([ [], [ [], [ 1 ] ] ])).toBeFalsy()
    })

    it('returns false for a deeply nested array with a non-empty array (recursive false)', () => {
        expect(isEmptyArray([ [], [ [], [ 1 ] ] ], { recursive: false })).toBeFalsy()
    })

    it('returns true for an array with elements that the comparator considers empty', () => {
        const omitZeros = value => value !== 0
        expect(isEmptyArray([ 0, 0, 0 ], { comparator: omitZeros })).toBeTruthy()
        expect(isEmptyArray([ 0, 0, [ 0 ] ], { recursive: false, comparator: omitZeros })).toBeFalsy()
    })

    it('returns false for an array with elements that the comparator does not consider empty', () => {
        const omitZeros = value => value !== 0
        expect(isEmptyArray([ 0, 1, 0 ], { comparator: omitZeros })).toBeFalsy()
    })
})
