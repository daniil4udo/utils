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

    it('should filter an object based on the predicate', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3,
        }

        const predicate = (key, value) => value > 1

        const result = filter(obj, predicate)

        expect(result).toEqual({ b: 2, c: 3 })
    })

    it('should return the original object if no predicate is provided', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3,
        }

        const result = filter(obj)

        expect(result).toEqual(obj)
    })

    it('should return an empty object if all elements fail the predicate', () => {
        const obj = {
            a: 1,
            b: 2,
            c: 3,
        }

        const predicate = (key, value) => value > 4

        const result = filter(obj, predicate)

        expect(result).toEqual({})
    })
})
