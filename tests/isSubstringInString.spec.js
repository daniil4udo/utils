import { describe, expect, it } from 'vitest'

import { isSubstringInString } from '../lib/'

describe('@/lib/isSubstringInString.ts', () => {
    // Positive test cases
    it('should return true when the substring exists', () => {
        expect(isSubstringInString('Hello world', 'hello')).toBeTruthy()
        expect(isSubstringInString('Hello world', 'WORLD')).toBeTruthy()
        expect(isSubstringInString('123456', '234')).toBeTruthy()
    })

    it('should return false when the substring does not exist', () => {
        expect(isSubstringInString('Hello world', 'goodbye')).toBeFalsy()
        expect(isSubstringInString('123456', '789')).toBeFalsy()
    })

    it('should return true when the substring is an empty string', () => {
        expect(isSubstringInString('Hello world', '')).toBeTruthy()
        expect(isSubstringInString('123456', '')).toBeTruthy()
    })

    // Negative test cases
    it('should throw a TypeError when the inputs are not strings', () => {
        expect(() => isSubstringInString(123, '123')).toThrow(TypeError)
        expect(() => isSubstringInString('123', 123)).toThrow(TypeError)
    })

    it('should return true when the substring exists and caseSensitive is true', () => {
        expect(isSubstringInString('Hello world', 'world', { caseSensitive: true })).toBeTruthy()
        expect(isSubstringInString('123456', '234', { caseSensitive: true })).toBeTruthy()
    })

    it('should return false when the substring does not exist and caseSensitive is true', () => {
        expect(isSubstringInString('Hello world', 'WORLD', { caseSensitive: true })).toBeFalsy()
        expect(isSubstringInString('Hello world', 'HELLO', { caseSensitive: true })).toBeFalsy()
        expect(isSubstringInString('123456', '2345', { caseSensitive: true })).toBeTruthy()
    })

    it('should throw a TypeError when the inputs are not strings even when caseSensitive is true', () => {
        expect(() => isSubstringInString(123, '123', { caseSensitive: true })).toThrow(TypeError)
    })
})
