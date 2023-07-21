import { describe, expect, it } from 'vitest'

import { convertPYDateFormatToJS } from '../lib/'

describe('@/lib/convertPYDateFormatToJS.ts', () => {
    it('to throw if not a string', () => {
        expect(() => convertPYDateFormatToJS()).toThrow()
    })

    it('converts weekday, month, day, year', () => {
        expect(convertPYDateFormatToJS('%A, %B %d, %Y')).toBe('dddd, MMMM DD, YYYY')
    })

    it('converts day, abbreviated month, year', () => {
        expect(convertPYDateFormatToJS('%d-%b-%Y')).toBe('DD-MMM-YYYY')
    })

    it('converts month, day, two digit year, 12 hour, minute, am/pm', () => {
        expect(convertPYDateFormatToJS('%m/%d/%y %I:%M %p')).toBe('MM/DD/YY hh:mm A')
    })

    it('converts empty string', () => {
        expect(convertPYDateFormatToJS('')).toBe('')
    })

    it('converts string without any format identifiers', () => {
        expect(convertPYDateFormatToJS('This is a test')).toBe('This is a test')
    })

    it('converts string with literal % character', () => {
        expect(convertPYDateFormatToJS('%%')).toBe('%')
    })

    it('converts string with all format identifiers', () => {
        const pythonString = '%A %a %B %b %c %d %f %H %I %j %M %m %p %S %U %W %w %X %x %Y %y %Z %z %%'
        const jsString = 'dddd ddd MMMM MMM ddd MMM DD HH:mm:ss YYYY DD SSS HH hh DDDD mm MM A ss ww ww d HH:mm:ss MM/DD/YYYY YYYY YY z ZZ %'
        expect(convertPYDateFormatToJS(pythonString)).toEqual(jsString)
    })
})
