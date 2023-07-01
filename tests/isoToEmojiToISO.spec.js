import { describe, expect, it } from 'vitest'

import { emojiToIso, isCountryIso, isoToEmoji } from '../lib/emoji/isoToEmojiToISO'

describe('@/lib/isoToEmojiToISO.ts', () => {
    describe('isCountryIso', () => {
        it('returns true for valid country ISO codes', () => {
            expect(isCountryIso('us')).toBe(true)
            expect(isCountryIso('UK')).toBe(true)
        })

        it('returns false for invalid country ISO codes', () => {
            expect(isCountryIso('123')).toBe(false)
            expect(isCountryIso('USA')).toBe(false) // Too long
            expect(isCountryIso('U')).toBe(false) // Too short
            expect(isCountryIso('Uk1')).toBe(false) // Contains a number
        })

        it('returns false for empty strings and undefined', () => {
            expect(isCountryIso('')).toBe(false)
            expect(isCountryIso()).toBe(false)
        })
    })

    describe('isoToEmoji', () => {
        it('returns correct flag emoji for valid country ISO codes', () => {
            expect(isoToEmoji('ua')).toBe('🇺🇦')
            expect(isoToEmoji('GB')).toBe('🇬🇧')
            expect(isoToEmoji('aE')).toBe('🇦🇪')
        })

        it('returns null for invalid country ISO codes', () => {
            expect(isoToEmoji('123')).toBe(null)
            expect(isoToEmoji('USA')).toBe(null)
        })

        it('returns null for empty strings and undefined', () => {
            expect(isoToEmoji('')).toBe(null)
            expect(isoToEmoji()).toBe(null)
        })
    })

    describe('emojiToIso', () => {
        it('returns correct country ISO code for valid flag emojis', () => {
            expect(emojiToIso('🇺🇸')).toBe('US')
            expect(emojiToIso('🇬🇧')).toBe('GB')
        })

        it('returns null for invalid flag emojis', () => {
            expect(emojiToIso('👍')).toBe(null)
            expect(emojiToIso('🇦🇧🇨')).toBe(null) // Not a valid flag
        })

        it('returns null for empty strings and undefined', () => {
            expect(emojiToIso('')).toBe(null)
            expect(emojiToIso()).toBe(null)
        })
    })
})
