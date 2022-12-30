/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'

import { length } from '../lib/length'

describe('@/lib/length.ts', () => {
    it('should return proper length', () => {
        expect(length('')).toBe(0)
        expect(length(null)).toBe(0)
        expect(length({})).toBe(0)
        expect(length([])).toBe(0)
        expect(length(new Set())).toBe(0)
        expect(length(new Map())).toBe(0)
    })

    it('should return proper length', () => {
        expect(length({ test: 'test ' })).toBe(1)
        expect(length([ 'test' ])).toBe(1)
        expect(length(new Set([ 'test' ]))).toBe(1)
        expect(length(new Map([ [ 1, 1 ] ]))).toBe(1)
    })
})
