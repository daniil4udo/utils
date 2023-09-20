import { describe, expect, it } from 'vitest'

import {
    emojiToIso,
    isCountryIso,
    isFlagEmoji,
    isHorseRacingSkinToneComboEmoji,
    isKeyCapEmoji,
    isPersonZwjEmoji,
    isRainbowFlagEmoji, isSkinToneComboEmoji, isoToEmoji,
} from '../../lib'

describe('@/lib/isoToEmojiToISO.ts', () => {
    describe('isCountryIso', () => {
        it('returns true for valid country ISO codes', () => {
            expect(isCountryIso('us')).toBeTruthy()
            expect(isCountryIso('UK')).toBeTruthy()
        })

        it('returns false for invalid country ISO codes', () => {
            expect(isCountryIso('123')).toBeFalsy()
            expect(isCountryIso('USA')).toBeFalsy() // Too long
            expect(isCountryIso('U')).toBeFalsy() // Too short
            expect(isCountryIso('Uk1')).toBeFalsy() // Contains a number
        })

        it('returns false for empty strings and undefined', () => {
            expect(isCountryIso('')).toBeFalsy()
            expect(isCountryIso()).toBeFalsy()
        })
    })

    describe('isoToEmoji', () => {
        it('returns correct flag emoji for valid country ISO codes', () => {
            expect(isoToEmoji('ua')).toBe('🇺🇦')
            expect(isoToEmoji('GB')).toBe('🇬🇧')
            expect(isoToEmoji('aE')).toBe('🇦🇪')
        })

        it('returns null for invalid country ISO codes', () => {
            expect(isoToEmoji('123')).toBeNull()
            expect(isoToEmoji('USA')).toBeNull()
        })

        it('returns null for empty strings and undefined', () => {
            expect(isoToEmoji('')).toBeNull()
            expect(isoToEmoji()).toBeNull()
        })
    })

    describe('emojiToIso', () => {
        it('returns correct country ISO code for valid flag emojis', () => {
            expect(emojiToIso('🇺🇸')).toBe('US')
            expect(emojiToIso('🇬🇧')).toBe('GB')
        })

        it('returns null for invalid flag emojis', () => {
            expect(emojiToIso('👍')).toBeNull()
            expect(emojiToIso('🇦🇧🇨')).toBeNull() // Not a valid flag
        })

        it('returns null for empty strings and undefined', () => {
            expect(emojiToIso('')).toBeNull()
            expect(emojiToIso()).toBeNull()
        })
    })
})

describe('@/lib/emojiSupport.ts', () => {
    it('isFlagEmoji', () => {
        expect(isFlagEmoji('🇺🇸')).toBeTruthy()
        expect(isFlagEmoji('🇦')).toBeFalsy()
        expect(isFlagEmoji('🍔')).toBeFalsy()
    })

    it('isRainbowFlagEmoji', () => {
        expect(isRainbowFlagEmoji('🏳️‍🌈')).toBeTruthy()
        expect(isRainbowFlagEmoji('🏳️‍')).toBeFalsy()
        expect(isRainbowFlagEmoji('🍔')).toBeFalsy()
    })

    it('isKeyCapEmoji', () => {
        expect(isKeyCapEmoji('2️⃣')).toBeTruthy()
        expect(isKeyCapEmoji('2️')).toBeFalsy()
        expect(isKeyCapEmoji('🍔')).toBeFalsy()
    })

    it('isSkinToneComboEmoji', () => {
        expect(isSkinToneComboEmoji('👋🏽')).toBeTruthy()
        expect(isSkinToneComboEmoji('👋')).toBeFalsy()
        expect(isSkinToneComboEmoji('🍔')).toBeFalsy()
    })

    it('isHorseRacingSkinToneComboEmoji', () => {
        expect(isHorseRacingSkinToneComboEmoji('🏇🏿')).toBeTruthy()
        expect(isHorseRacingSkinToneComboEmoji('🏇')).toBeFalsy()
        expect(isHorseRacingSkinToneComboEmoji('🍔')).toBeFalsy()
    })

    it('isPersonZwjEmoji', () => {
        expect(isPersonZwjEmoji('👨‍👩‍👧')).toBeTruthy()
        expect(isPersonZwjEmoji('👨👩👧')).toBeFalsy()
        expect(isPersonZwjEmoji('🍔')).toBeFalsy()
    })
})
