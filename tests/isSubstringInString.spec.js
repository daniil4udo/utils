import { describe, expect, it } from 'vitest'

import { isSubstringInString } from '../lib/isSubstringInString'

describe('@/lib/isSubstringInString.ts', () => {
    it('should match strings', () => {
        expect(isSubstringInString('abc', 'ab')).toBe(true)
        expect(isSubstringInString('abc', 'abcd')).toBe(false)
    })

    it('should match numbers', () => {
        expect(isSubstringInString(1, 1)).toBe(true)
        expect(isSubstringInString(1, 2)).toBe(false)
        expect(isSubstringInString(12, 2)).toBe(true)
    })
})
