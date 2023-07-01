import { describe, expect, it } from 'vitest'

import { isColor } from '../lib/isColor'

describe('@/lib/isColor.ts', () => {
    it('returns false for null', () => {
        expect(isColor(null)).toBe(false)
    })

    it('returns false for undefined', () => {
        expect(isColor(undefined)).toBe(false)
    })

    it('returns false for an empty string', () => {
        expect(isColor('')).toBe(false)
    })

    it('returns false for a string that is not a color', () => {
        expect(isColor('not a color')).toBe(false)
    })

    it('returns true for a named color', () => {
        expect(isColor('blue')).toBe(true)
    })

    it('returns true for a hex color', () => {
        expect(isColor('#0000FF')).toBe(true)
    })

    it('returns true for a rgb color', () => {
        expect(isColor('rgb(0, 0, 255)')).toBe(true)
    })

    it('returns false for a malformatted rgb color', () => {
        expect(isColor('rgb(0, 0, 255, 0)')).toBe(false)
    })

    it('returns true for rgba color', () => {
        expect(isColor('rgba(0, 0, 255, 0)')).toBe(true)
    })

    it('returns false for a string that is a number', () => {
        expect(isColor('123')).toBe(false)
    })
})
