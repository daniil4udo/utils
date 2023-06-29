// On Windows, flags render as two-letter country codes, see http://emojipedia.org/flags/
export function isFlagEmoji(emojiUnicode: string) {
    const flagACodePoint = 127462 // parseInt('1F1E6', 16)
    const flagZCodePoint = 127487 // parseInt('1F1FF', 16)
    const cp = emojiUnicode.codePointAt(0) ?? 0

    // Length 4 because flags are made of 2 characters which are surrogate pairs
    return emojiUnicode.length === 4
        && cp >= flagACodePoint
        && cp <= flagZCodePoint
}

// Tested on mac OS 10.12.6 and Windows 10 FCU, it renders as two separate characters
export function isRainbowFlagEmoji(emojiUnicode: string) {
    const baseFlagCodePoint = 127987 // parseInt('1F3F3', 16)
    const rainbowCodePoint = 127752 // parseInt('1F308', 16)
    const [ baseFlagChar, rainbowChar ] = Array.from(emojiUnicode)

    // Length 4 because flags are made of 2 characters which are surrogate pairs
    return emojiUnicode.length === 4
        && baseFlagChar.codePointAt(0) === baseFlagCodePoint
        && rainbowChar.codePointAt(0) === rainbowCodePoint
}

// Chrome <57 renders keycaps oddly
// See https://bugs.chromium.org/p/chromium/issues/detail?id=632294
// Same issue on Windows also fixed in Chrome 57, http://i.imgur.com/rQF7woO.png
export function isKeycapEmoji(emojiUnicode: string) {
    return emojiUnicode.length === 3 && emojiUnicode[2] === '\u20E3'
}

// Check for a skin tone variation emoji which aren't always supported
export function isSkinToneComboEmoji(emojiUnicode: string) {
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

// macOS supports most skin tone emoji's but
// doesn't support the skin tone versions of horse racing
export function isHorseRacingSkinToneComboEmoji(emojiUnicode: string) {
    const horseRacingCodePoint = 127943 // parseInt('1F3C7', 16)
    const firstCharacter = Array.from(emojiUnicode)[0]

    return firstCharacter?.codePointAt(0) === horseRacingCodePoint
        && isSkinToneComboEmoji(emojiUnicode)
}

// Check for `family_*`, `kiss_*`, `couple_*`
// For ex. Windows 8.1 Firefox 51.0.1, doesn't support these
export function isPersonZwjEmoji(emojiUnicode: string) {
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

// Helper so we don't have to run `isFlagEmoji` twice
// in `isEmojiUnicodeSupported` logic
export function checkFlagEmojiSupport(unicodeSupportMap, emojiUnicode: string) {
    const isFlagResult = isFlagEmoji(emojiUnicode)
    const isRainbowFlagResult = isRainbowFlagEmoji(emojiUnicode)

    return (unicodeSupportMap.flag && isFlagResult)
        || (unicodeSupportMap.rainbowFlag && isRainbowFlagResult)
        || (!isFlagResult && !isRainbowFlagResult)
}

// Helper so we don't have to run `isSkinToneComboEmoji` twice
// in `isEmojiUnicodeSupported` logic
export function checkSkinToneModifierSupport(unicodeSupportMap, emojiUnicode: string) {
    const isSkinToneResult = isSkinToneComboEmoji(emojiUnicode)
    return (unicodeSupportMap.skinToneModifier && isSkinToneResult) || !isSkinToneResult
}

// Helper func so we don't have to run `isHorseRacingSkinToneComboEmoji` twice
// in `isEmojiUnicodeSupported` logic
export function checkHorseRacingSkinToneComboEmojiSupport(unicodeSupportMap, emojiUnicode: string) {
    const isHorseRacingSkinToneResult = isHorseRacingSkinToneComboEmoji(emojiUnicode)
    return (unicodeSupportMap.horseRacing && isHorseRacingSkinToneResult)
        || !isHorseRacingSkinToneResult
}

// Helper so we don't have to run `isPersonZwjEmoji` twice
// in `isEmojiUnicodeSupported` logic
export function checkPersonEmojiSupport(unicodeSupportMap, emojiUnicode: string) {
    const isPersonZwjResult = isPersonZwjEmoji(emojiUnicode)
    return (unicodeSupportMap.personZwj && isPersonZwjResult)
        || !isPersonZwjResult
}

// Takes in a support map and determines whether
// the given unicode emoji is supported on the platform.
//
// Combines all the edge case tests into a one-stop shop method
export function isEmojiUnicodeSupported(unicodeSupportMap, emojiUnicode: string, unicodeVersion = 'flag') {
    const isOlderThanChrome57 = unicodeSupportMap?.meta
        && unicodeSupportMap.meta.isChrome
        && unicodeSupportMap.meta.chromeVersion < 57

    // For comments about each scenario, see the comments above each individual respective function
    return unicodeSupportMap[unicodeVersion]
        && !(isOlderThanChrome57 && isKeycapEmoji(emojiUnicode))
        && checkFlagEmojiSupport(unicodeSupportMap, emojiUnicode)
        && checkSkinToneModifierSupport(unicodeSupportMap, emojiUnicode)
        && checkHorseRacingSkinToneComboEmojiSupport(unicodeSupportMap, emojiUnicode)
        && checkPersonEmojiSupport(unicodeSupportMap, emojiUnicode)
}

let browserUnicodeSupportMap

export default function isEmojiUnicodeSupportedByBrowser(emojiUnicode, unicodeVersion) {
    // Skipping the map creation for Bots + RSPec
    const userAgents = [ 'HeadlessChrome', 'Lighthouse', 'Speedindex' ]

    if (userAgents.some(agent => navigator.userAgent.includes(agent)))
        return true

    browserUnicodeSupportMap = browserUnicodeSupportMap || getUnicodeSupportMap()
    return isEmojiUnicodeSupported(browserUnicodeSupportMap, emojiUnicode, unicodeVersion)
}
