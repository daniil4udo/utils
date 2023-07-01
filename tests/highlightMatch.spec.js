import { describe, expect, it } from 'vitest'

import { highlightMatch } from '../lib/highlightMatch'

describe('@/lib/highlightMatch.ts', () => {
    it('wraps the entire string when the match includes the whole string', () => {
        const result = highlightMatch('Test string', [ [ 0, 10 ] ])
        expect(result).toBe('<strong>Test string</strong>')
    })

    it('does not wrap anything when the match is out of range', () => {
        const result = highlightMatch('Test string', [ [ 50, 60 ] ])
        expect(result).toBe('Test string')
    })

    it('wraps the correct part of the string when the match is a subrange of the string', () => {
        const result = highlightMatch('Test string', [ [ 0, 3 ] ])
        expect(result).toBe('<strong>Test</strong> string')
    })

    it('ignores negative indices', () => {
        const result = highlightMatch('Test string', [ [ -5, 3 ] ])
        expect(result).toBe('Test string')
    })

    it('merges and wraps overlapping ranges', () => {
        const result = highlightMatch('Test string', [ [ 0, 4 ], [ 2, 6 ] ])
        expect(result).toBe('<strong>Test st</strong>ring')
    })

    it('merges and wraps adjacent ranges', () => {
        const result = highlightMatch('Test string', [ [ 0, 4 ], [ 5, 11 ] ])
        expect(result).toBe('<strong>Test string</strong>')
    })

    it('returns the original text when no matches provided', () => {
        const result = highlightMatch('Test string', [])
        expect(result).toBe('Test string')
    })

    it('handles empty text and matches', () => {
        const result = highlightMatch('', [])
        expect(result).toBe('')
    })
})
