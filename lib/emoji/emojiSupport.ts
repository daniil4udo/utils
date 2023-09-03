import type { UnicodeResultSupportMap } from './emojiSupportMap'

import { getUnicodeSupportMap } from './emojiSupportMap'

/**
 * Checks if a given string is a Unicode flag emoji.
 * On Windows, flags render as two-letter country codes, see http://emojipedia.org/flags/
 *
 * @param {string} emojiUnicode - The emoji string to check.
 * @returns {boolean} True if the string is a flag emoji, false otherwise.
 */
export function isFlagEmoji(emojiUnicode: string): boolean {
    const flagACodePoint = 127462 // parseInt('1F1E6', 16)
    const flagZCodePoint = 127487 // parseInt('1F1FF', 16)
    const cp = emojiUnicode.codePointAt(0) ?? 0

    // Length 4 because flags are made of 2 characters which are surrogate pairs
    return emojiUnicode.length === 4
        && cp >= flagACodePoint
        && cp <= flagZCodePoint
}

/**
 * Checks if a given string is a Unicode rainbow flag emoji.
 * Tested on mac OS 10.12.6 and Windows 10 FCU, it renders as two separate characters
 *
 * @param {string} emojiUnicode - The emoji string to check.
 * @returns {boolean} True if the string is a rainbow flag emoji, false otherwise.
 */
export function isRainbowFlagEmoji(emojiUnicode: string): boolean {
    const whiteFlagCodePoint = 127987 // parseInt('1F3F3', 16)
    const rainbowCodePoint = 127752 // parseInt('1F308', 16)
    const variationSelector16 = 65039 // parseInt('FE0F', 16)
    const zeroWidthJoiner = 8205 // parseInt('200D', 16)

    // Convert the emojiUnicode string to an array of code points
    const codePoints = Array.from(emojiUnicode, c => c.codePointAt(0))

    // The Rainbow Flag emoji consists of 4 Unicode scalar values (code points)
    return (
        codePoints.length === 4
        && codePoints[0] === whiteFlagCodePoint
        && codePoints[1] === variationSelector16
        && codePoints[2] === zeroWidthJoiner
        && codePoints[3] === rainbowCodePoint
    )
}

/**
 * Checks if a given string is a Unicode keycap emoji.
 * Chrome <57 renders keycaps oddly
 * See https://bugs.chromium.org/p/chromium/issues/detail?id=632294
 * Same issue on Windows also fixed in Chrome 57, http://i.imgur.com/rQF7woO.png
 *
 * @param {string} emojiUnicode - The emoji string to check.
 * @returns {boolean} True if the string is a keycap emoji, false otherwise.
 */
export function isKeyCapEmoji(emojiUnicode: string): boolean {
    return emojiUnicode.length === 3 && emojiUnicode[2] === '\u20E3'
}

/**
 * Checks if a given string is a Unicode skin tone combo emoji.
 *
 * @param {string} emojiUnicode - The emoji string to check.
 * @returns {boolean} True if the string is a skin tone combo emoji, false otherwise.
 */
export function isSkinToneComboEmoji(emojiUnicode: string): boolean {
    const tone1 = 127995 // parseInt('1F3FB', 16)
    const tone5 = 127999 // parseInt('1F3FF', 16)

    if (emojiUnicode.length > 2) {
        return Array.from(emojiUnicode).some(char => {
            const cp = char.codePointAt(0) ?? 0
            return cp >= tone1 && cp <= tone5
        })
    }

    return false
}

/**
 * Checks if a given string is a Unicode horse racing skin tone combo emoji.
 *
 * @param {string} emojiUnicode - The emoji string to check.
 * @returns {boolean} True if the string is a horse racing skin tone combo emoji, false otherwise.
 */
export function isHorseRacingSkinToneComboEmoji(emojiUnicode: string): boolean {
    const horseRacingCodePoint = 127943 // parseInt('1F3C7', 16)
    const firstCharacter = Array.from(emojiUnicode)[0]

    return firstCharacter?.codePointAt(0) === horseRacingCodePoint
        && isSkinToneComboEmoji(emojiUnicode)
}

/**
 * Checks if a given string is a Unicode person Zero Width Joiner (ZWJ) emoji.
 *
 * @param {string} emojiUnicode - The emoji string to check.
 * @returns {boolean} True if the string is a person ZWJ emoji, false otherwise.
 */
export function isPersonZwjEmoji(emojiUnicode: string): boolean {
    const zwj = 8205 // parseInt('200D', 16)
    const personStartCodePoint = 128102 // parseInt('1F466', 16)
    const personEndCodePoint = 128105 // parseInt('1F469', 16)

    let hasPersonEmoji = false
    let hasZwj = false

    Array.from(emojiUnicode).forEach(character => {
        const cp = character.codePointAt(0) ?? 0
        if (cp === zwj)
            hasZwj = true
        else if (cp >= personStartCodePoint && cp <= personEndCodePoint)
            hasPersonEmoji = true
    })

    return hasPersonEmoji && hasZwj
}

/**
 * Checks if a given emoji Unicode is supported according to a provided Unicode support map and version.
 *
 * @param {Object} unicodeSupportMap - The map showing the support for various Unicode features.
 * @param {string} emojiUnicode - The emoji Unicode string to check.
 * @param {string} [unicodeVersion='flag'] - The Unicode version to check for.
 * @returns {boolean} True if the emoji Unicode is supported, false otherwise.
 */
export function isEmojiUnicodeSupported(
    unicodeSupportMap: UnicodeResultSupportMap,
    emojiUnicode: string,
    unicodeVersion: keyof UnicodeResultSupportMap = 'flag',
): boolean {
    const isOlderThanChrome57 = unicodeSupportMap.meta.isChrome
        && unicodeSupportMap.meta.chromeVersion
        && unicodeSupportMap.meta.chromeVersion < 57

    return unicodeSupportMap[unicodeVersion]
        && !(isOlderThanChrome57 && isKeyCapEmoji(emojiUnicode))
        && checkFlagEmojiSupport(unicodeSupportMap, emojiUnicode)
        && checkSkinToneModifierSupport(unicodeSupportMap, emojiUnicode)
        && checkHorseRacingSkinToneComboEmojiSupport(unicodeSupportMap, emojiUnicode)
        && checkPersonEmojiSupport(unicodeSupportMap, emojiUnicode)
}

/**
 * Checks if a given emoji Unicode is supported as a flag emoji according to a provided Unicode support map.
 *
 * @param {Object} unicodeSupportMap - The map showing the support for various Unicode features.
 * @param {string} emojiUnicode - The emoji Unicode string to check.
 * @returns {boolean} True if the emoji Unicode is supported as a flag emoji, false otherwise.
 */
export function checkFlagEmojiSupport(
    unicodeSupportMap: UnicodeResultSupportMap,
    emojiUnicode: string,
): boolean {
    const isFlagResult = isFlagEmoji(emojiUnicode)
    const isRainbowFlagResult = isRainbowFlagEmoji(emojiUnicode)

    return (unicodeSupportMap.flag && isFlagResult)
        || (unicodeSupportMap.rainbowFlag && isRainbowFlagResult)
        || (!isFlagResult && !isRainbowFlagResult)
}

/**
 * Checks if a given emoji Unicode is supported with a skin tone modifier according to a provided Unicode support map.
 *
 * @param {Object} unicodeSupportMap - The map showing the support for various Unicode features.
 * @param {string} emojiUnicode - The emoji Unicode string to check.
 * @returns {boolean} True if the emoji Unicode is supported with a skin tone modifier, false otherwise.
 */
export function checkSkinToneModifierSupport(
    unicodeSupportMap: UnicodeResultSupportMap,
    emojiUnicode: string,
): boolean {
    const isSkinToneResult = isSkinToneComboEmoji(emojiUnicode)
    return (unicodeSupportMap.skinToneModifier && isSkinToneResult)
        || !isSkinToneResult
}

/**
 * Checks if a given emoji Unicode is supported as a horse racing skin tone combo emoji according to a provided Unicode support map.
 *
 * @param {Object} unicodeSupportMap - The map showing the support for various Unicode features.
 * @param {string} emojiUnicode - The emoji Unicode string to check.
 * @returns {boolean} True if the emoji Unicode is supported as a horse racing skin tone combo emoji, false otherwise.
 */
export function checkHorseRacingSkinToneComboEmojiSupport(
    unicodeSupportMap: UnicodeResultSupportMap,
    emojiUnicode: string,
): boolean {
    const isHorseRacingSkinToneResult = isHorseRacingSkinToneComboEmoji(emojiUnicode)
    return (unicodeSupportMap.horseRacing && isHorseRacingSkinToneResult)
        || !isHorseRacingSkinToneResult
}

/**
 * Checks if a given emoji Unicode is supported as a person Zero Width Joiner (ZWJ) emoji according to a provided Unicode support map.
 *
 * @param {Object} unicodeSupportMap - The map showing the support for various Unicode features.
 * @param {string} emojiUnicode - The emoji Unicode string to check.
 * @returns {boolean} True if the emoji Unicode is supported as a person ZWJ emoji, false otherwise.
 */
export function checkPersonEmojiSupport(
    unicodeSupportMap: UnicodeResultSupportMap,
    emojiUnicode: string,
): boolean {
    const isPersonZwjResult = isPersonZwjEmoji(emojiUnicode)
    return (unicodeSupportMap.personZwj && isPersonZwjResult) || !isPersonZwjResult
}

let browserUnicodeSupportMap: UnicodeResultSupportMap

export default function isEmojiUnicodeSupportedByBrowser(
    emojiUnicode: string,
    unicodeVersion: keyof UnicodeResultSupportMap,
): boolean {
    // Skipping the map creation for Bots + RSPec
    const userAgents = [ 'HeadlessChrome', 'Lighthouse', 'Speedindex' ]

    if (userAgents.some(agent => navigator.userAgent.includes(agent)))
        return true

    browserUnicodeSupportMap = browserUnicodeSupportMap || getUnicodeSupportMap()
    return isEmojiUnicodeSupported(browserUnicodeSupportMap, emojiUnicode, unicodeVersion)
}
