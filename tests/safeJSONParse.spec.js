import { describe, expect, it } from 'vitest'

import { safeJSONParse } from '../lib/safeJSONParse'

describe('@/lib/safeJSONParse.ts', () => {
    it('parses valid JSON', () => {
        const obj = { foo: 'bar' }
        expect(safeJSONParse(JSON.stringify(obj))).toEqual(obj)
    })

    it('parses valid JSON array', () => {
        const arr = [ 'foo', 'bar' ]
        expect(safeJSONParse(JSON.stringify(arr))).toEqual(arr)
    })

    it('returns input for invalid JSON', () => {
        const input = '{ invalid json'
        expect(safeJSONParse(input)).toEqual(input)
    })

    it('returns input for non-string input', () => {
        const input = { foo: 'bar' }
        expect(safeJSONParse(input)).toEqual(input)
    })
})
