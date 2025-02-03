import type { Nullable } from './types';

import { toUpper } from './changeCase';
import { isFlagEmoji } from './emojiSupport';

/**
 * Checks if a string is a valid country ISO code.
 *
 * @param {string} [iso] - The input string to check.
 * @returns {boolean} True if the string is a valid country ISO code, false otherwise.
 *
 * @example
 * isCountryIso('us'); // Outputs:  true
 * isCountryIso('UK'); // Outputs:  true
 * isCountryIso('123'); // Outputs:  false
 */
export function isCountryIso(iso: string = ''): boolean {
    return /^[a-z]{2}(?:[-_][a-z]{2})?$/i.test(iso);
}

// The expression 'A'.codePointAt(0) - 127462
// is used to calculate the offset between
// the Unicode code point of 'A'(which is 65)
// and the first regional indicator symbol, which is '🇦'
// and has a Unicode code point of 127462.
const OFFSET = 127397; // 'A'.codePointAt(0) - 127462

/**
 * Converts a country ISO code to a flag emoji.
 *
 * @param {string} [iso] - The country ISO code to convert.
 * @returns {Nullable<string>} The flag emoji corresponding to the country ISO code, or null if the ISO code is invalid.
 *
 * @example
 * isoToEmoji('us'); // Outputs:  '🇺🇸'
 * isoToEmoji('GB'); // Outputs:  '🇬🇧'
 * isoToEmoji('123'); // Outputs:  null
 */
export function isoToEmoji(iso: string = ''): Nullable<string> {
    // ISO has to be upper case
    if (!isCountryIso(iso))
        return null;

    return toUpper(iso).replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + OFFSET));
}

/**
 * Converts a flag emoji to a country ISO code.
 *
 * @param {string} [emoji] - The flag emoji to convert.
 * @returns {Nullable<string>} The country ISO code corresponding to the flag emoji, or null if the emoji is not a valid flag.
 *
 * @example
 * emojiToIso('🇺🇸'); // Outputs: 'US'
 * emojiToIso('🇬🇧'); // Outputs: 'GB'
 * emojiToIso('👍'); // Outputs: null
 */
export function emojiToIso(emoji: string = ''): Nullable<string> {
    if (!isFlagEmoji(emoji))
        return null;

    return emoji.replace(/../g, cp => String.fromCharCode((cp.codePointAt(0) ?? 0) - OFFSET));
}
