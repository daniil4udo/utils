import { describe, expect, it } from 'vitest'

import { isHTML } from '../lib/isHTML'

describe('@/lib/isHTML.ts', () => {
    it('isHTML to be false with non-string input', () => {
        expect(isHTML(undefined)).toBe(false)
        expect(isHTML('')).toBe(false)
        expect(isHTML(null)).toBe(false)
        expect(isHTML({})).toBe(false)
        expect(isHTML([])).toBe(false)
    })

    it('isHTML to be true with regular HTML string', () => {
        const html = isHTML('false')
        expect(html).toBe(false)
    })

    it('isHTML to be true with regular HTML string', () => {
        const html = isHTML('<strong>I am a HTML string</strong>')
        expect(html).toBe(true)
    })

    it('should return true when the string contains valid HTML', () => {
        expect(isHTML('<div>Hello, world!</div>')).toBe(true)
        expect(isHTML('<p>Lorem ipsum</p>')).toBe(true)
        expect(isHTML('<span class="highlight">Text</span>')).toBe(true)
    })

    // TODO: fix it in the future versions
    // it('should return false when the string does not contain valid HTML', () => {
    //     expect(isHTML('Hello, world!')).toBe(false)
    //     expect(isHTML('Lorem ipsum')).toBe(false)
    //     expect(isHTML('<p>')).toBe(false)
    //     expect(isHTML('<div>')).toBe(false)
    //     expect(isHTML('<span>')).toBe(false)
    //     expect(isHTML('<div')).toBe(false)
    //     expect(isHTML('<p')).toBe(false)
    // })

    it('should return false when the string is an empty string', () => {
        expect(isHTML('')).toBe(false)
    })

    it('should return false when the string is a whitespace string', () => {
        expect(isHTML(' ')).toBe(false)
        expect(isHTML('\n')).toBe(false)
        expect(isHTML('\t')).toBe(false)
        expect(isHTML('    ')).toBe(false)
        expect(isHTML('\n\n\n')).toBe(false)
        expect(isHTML('\t\t\t')).toBe(false)
    })

    it('should return false when the string is null or undefined', () => {
        expect(isHTML(null)).toBe(false)
        expect(isHTML(undefined)).toBe(false)
    })

    // TODO: fix it in the future versions
    // it('should return false when an error occurs during parsing', () => {
    //     const invalidHTML = '<div><p>This is not valid HTML</div>'
    //     expect(isHTML(invalidHTML)).toBe(false)
    // })
})
