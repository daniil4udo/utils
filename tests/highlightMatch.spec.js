import { describe, expect, it } from 'vitest'

import { highlightMatch } from '../lib/highlightMatch'

describe('@/lib/highlightMatch.ts', () => {
    it('wraps the entire string when the match includes the whole string', () => {
        const str = 'Test string'
        const result = highlightMatch(str, [ [ 0, 10 ] ])
        expect(result).toBe('<strong>Test string</strong>')
    })

    it('does not wrap anything when the match is out of range', () => {
        const str = 'Test string'
        const matches = [ [ 50, 60 ] ]
        const result = highlightMatch(str, matches)
        expect(result).toBe('Test string')
    })

    it('wraps the correct part of the string when the match is a subrange of the string', () => {
        const str = 'Test string'
        const matches = [ [ 0, 3 ] ]
        const result = highlightMatch(str, matches)
        expect(result).toBe('<strong>Test</strong> string')
    })

    it('ignores negative indices', () => {
        const str = 'Test string'
        const matches = [ [ -5, 3 ] ]
        const result = highlightMatch(str, matches)
        expect(result).toBe('Test string')
    })

    it('merges and wraps overlapping ranges', () => {
        const str = 'Test string'
        const matches = [ [ 0, 4 ], [ 2, 6 ] ]
        const result = highlightMatch(str, matches)
        expect(result).toBe('<strong>Test st</strong>ring')
    })

    it('merges and wraps adjacent ranges', () => {
        const str = 'Test string'
        const matches = [ [ 0, 4 ], [ 5, 11 ] ]
        const result = highlightMatch(str, matches)
        expect(result).toBe('<strong>Test string</strong>')
    })

    it('returns the original text when no matches provided', () => {
        const str = 'Test string'
        const result = highlightMatch(str, [])
        expect(result).toBe('Test string')
    })

    it('handles empty text and matches', () => {
        const result = highlightMatch('', [])
        expect(result).toBe('')
    })

    it('should highlight with custom tag', () => {
        const str = 'Hello, world!'
        const matches = [ [ 0, 4 ] ]
        const options = { tag: 'em' }
        expect(highlightMatch(str, matches, options)).toBe('<em>Hello</em>, world!')
    })

    it('should highlight with custom tag and string attributes', () => {
        const str = 'Hello, world!'
        const matches = [ [ 0, 4 ] ]
        const options = { tag: 'em', attrs: 'class="highlight"' }
        expect(highlightMatch(str, matches, options)).toBe('<em class="highlight">Hello</em>, world!')
    })

    it('should highlight with custom tag and object attributes', () => {
        const str = 'Hello, world!'
        const matches = [ [ 0, 4 ] ]
        const options = { tag: 'em', attrs: { id: '1', class: 'highlight' } }
        expect(highlightMatch(str, matches, options)).toBe('<em id="1" class="highlight">Hello</em>, world!')
    })
})
