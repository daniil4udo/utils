/**
 * @vitest-environment jsdom
 */
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
        expect(isHTML('<h1>test</h1>')).toBe(true)
    })
})
