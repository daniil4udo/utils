import { describe, expect, it } from 'vitest'

import { isColor } from '../../lib/'

describe('@/lib/isColor.ts', () => {
    it('returns false for null', () => {
        expect(isColor(null)).toBeFalsy()
    })

    it('returns false for undefined', () => {
        expect(isColor(undefined)).toBeFalsy()
    })

    it('returns false for an empty string', () => {
        expect(isColor('')).toBeFalsy()
    })

    it('returns false for a string that is not a color', () => {
        expect(isColor('not a color')).toBeFalsy()
    })

    it('returns true for a named color', () => {
        expect(isColor('blue')).toBeTruthy()
    })

    it('returns true for a hex color', () => {
        expect(isColor('#0000FF')).toBeTruthy()
    })

    it('returns true for a rgb color', () => {
        expect(isColor('rgb(0, 0, 255)')).toBeTruthy()
    })

    it('returns false for a malformatted rgb color', () => {
        expect(isColor('rgb(0, 0, 255, 0)')).toBeFalsy()
    })

    it('returns true for rgba color', () => {
        expect(isColor('rgba(0, 0, 255, 0)')).toBeTruthy()
    })

    it('returns false for a string that is a number', () => {
        expect(isColor('123')).toBeFalsy()
    })
})
