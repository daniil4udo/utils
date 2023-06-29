import { isFlagEmoji } from './emojiSupport'

export function isCountryIso(iso = '') {
    return /^[a-z]{2}([-_][a-z]{2})?$/i.test(iso)
}

// The expression 'A'.codePointAt(0) - 127462
// is used to calculate the offset between
// the Unicode code point of 'A'(which is 65)
// and the first regional indicator symbol, which is '🇦'
// and has a Unicode code point of 127462.
const OFFSET = 127397 // 'A'.codePointAt(0) - 127462

export function isoToEmoji(iso = '') {
    // ISO has to be upper case
    if (!isCountryIso(iso))
        return null

    // eslint-disable-next-line no-param-reassign
    iso = iso.toUpperCase()

    return iso.replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + OFFSET))
}

export function emojiToIso(emoji = ''): string | null {
    if (!isFlagEmoji(emoji))
        return null

    return emoji.replace(/../g, cp => String.fromCharCode((cp.codePointAt(0) ?? 0) - OFFSET))
}
