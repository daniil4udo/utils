/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'

import { filterObject as filter } from '../lib/filterObject'

describe('@/lib/filterObject.ts', () => {
    const dict = {
        key1: 'Daniil',
        key2: 'Jenny',
        key3: 'Anna',
    }

    it('should return non-object when given as the first argument', () => {
        expect(filter(dict)).toEqual(dict)
    })

    it('should return non-object when given as the first argument', () => {
        expect(filter(dict, (_, value) => value !== 'Anna')).toEqual({
            key1: 'Daniil',
            key2: 'Jenny',
        })
    })

    it('should return non-object when given as the first argument', () => {
        expect(filter(dict, key => key !== 'key1')).toEqual({
            key2: 'Jenny',
            key3: 'Anna',
        })
    })
})
