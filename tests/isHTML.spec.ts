/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'

import { isHTML } from '../lib/isHTML'

describe('@/lib/isHTML.ts', () => {
    it('isHTML to be false with non-string input', () => {
        expect(isHTML(undefined)).toEqual(false)
        expect(isHTML('')).toEqual(false)
        expect(isHTML(null)).toEqual(false)
        expect(isHTML({})).toEqual(false)
        expect(isHTML([])).toEqual(false)
    })

    it('isHTML to be true with regular HTML string', () => {
        const html = isHTML('false')
        expect(html).toEqual(false)
    })

    it('isHTML to be true with regular HTML string', () => {
        const html = isHTML('<strong>I am a HTML string</strong>')
        expect(isHTML('<style>.foo {}</style>')).toEqual(true)
    })
})
