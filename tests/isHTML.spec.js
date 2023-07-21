import { describe, expect, it } from 'vitest'

import { isHTML } from '../lib/'

describe('@/lib/isHTML.ts', () => {
    it('isHTML to be false with non-string input', () => {
        expect(isHTML(undefined)).toBeFalsy()
        expect(isHTML('')).toBeFalsy()
        expect(isHTML(null)).toBeFalsy()
        expect(isHTML({})).toBeFalsy()
        expect(isHTML([])).toBeFalsy()

        const html = isHTML('false')
        expect(html).toBeFalsy()
    })

    it('isHTML to be true with regular HTML string', () => {
        const html = isHTML('<strong>I am a HTML string</strong>')
        expect(html).toBeTruthy()
    })

    it('should return true when the string contains valid HTML', () => {
        expect(isHTML('<div>Hello, world!</div>')).toBeTruthy()
        expect(isHTML('<p>Lorem ipsum</p>')).toBeTruthy()
        expect(isHTML('<span class="highlight">Text</span>')).toBeTruthy()
    })

    it('should return false when the string is an empty string', () => {
        expect(isHTML('')).toBeFalsy()
    })

    it('should return false when the string is a whitespace string', () => {
        expect(isHTML(' ')).toBeFalsy()
        expect(isHTML('\n')).toBeFalsy()
        expect(isHTML('\t')).toBeFalsy()
        expect(isHTML('    ')).toBeFalsy()
        expect(isHTML('\n\n\n')).toBeFalsy()
        expect(isHTML('\t\t\t')).toBeFalsy()
    })

    it('should return false when the string is null or undefined', () => {
        expect(isHTML(null)).toBeFalsy()
        expect(isHTML(undefined)).toBeFalsy()
    })

    // TODO: fix it in the future versions
    it.todo('should return false when the string does not contain valid HTML', () => {
        expect(isHTML('Hello, world!')).toBe(false)
        expect(isHTML('Lorem ipsum')).toBe(false)
        expect(isHTML('<p>')).toBe(false)
        expect(isHTML('<div>')).toBe(false)
        expect(isHTML('<span>')).toBe(false)
        expect(isHTML('<div')).toBe(false)
        expect(isHTML('<p')).toBe(false)
    })

    // TODO: fix it in the future versions
    it.todo('should return false when an error occurs during parsing', () => {
        const invalidHTML = '<div><p>This is not valid HTML</div>'
        expect(isHTML(invalidHTML)).toBe(false)
    })
})
