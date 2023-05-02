import { describe, expect, it } from 'vitest'

import { highlightMatch } from '../lib/highlightMatch'

describe('highlightMatch function', () => {
    it('should return the original text if no matches provided', () => {
        expect(highlightMatch('Hello, World!')).toEqual('Hello, World!')
    })

    it('should highlight the matched text with <strong> tags', () => {
        expect(highlightMatch('Hello, World!', [ [ 0, 4 ] ])).toEqual('<strong>Hello</strong>, World!')
        expect(highlightMatch('Hello, World!', [ [ 0, 4 ], [ 7, 11 ] ])).toEqual('<strong>Hello</strong>, <strong>World</strong>!')
    })

    it('should handle non-sequential matches', () => {
        expect(highlightMatch('Hello, World!', [ [ 0, 4 ], [ 7, 11 ], [ 5, 6 ] ])).toEqual('<strong>Hello</strong><strong>, </strong><strong>World</strong>!')
    })

    it('should handle empty text', () => {
        expect(highlightMatch('', [ [ 0, 4 ] ])).toEqual('')
    })

    it('should handle empty matches', () => {
        expect(highlightMatch('Hello, World!', [])).toEqual('Hello, World!')
    })
})
