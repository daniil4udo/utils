import { describe, expect, it, vi } from 'vitest'

import { memoizeLast } from '../lib/'

describe('@/lib/toType.ts', () => {
    describe('memoizeLast', () => {
        it('returns the same result as the original function', () => {
            const fn = (x, y) => x + y
            const memoizedFn = memoizeLast(fn)

            expect(memoizedFn(1, 2)).toBe(3)
            expect(memoizedFn(3, 4)).toBe(7)
        })

        it('returns the cached result when called with the same arguments', () => {
            const fn = vi.fn((x, y) => x + y)
            const memoizedFn = memoizeLast(fn)

            memoizedFn(1, 2) // computes and caches the result
            memoizedFn(1, 2) // retrieves the result from cache

            expect(fn).toHaveBeenCalledTimes(1)
        })

        it('computes the result again when called with different arguments', () => {
            const fn = vi.fn((x, y) => x + y)
            const memoizedFn = memoizeLast(fn)

            memoizedFn(1, 2) // computes and caches the result
            memoizedFn(3, 4) // computes and caches the result (the previous cache is discarded)
            memoizedFn(1, 2) // computes and caches the result

            expect(fn).toHaveBeenCalledTimes(3)
        })

        it('returns undefined when original function returns undefined', () => {
            const fn = () => undefined
            const memoizedFn = memoizeLast(fn)

            expect(memoizedFn('anything')).toBeUndefined()
        })

        it('handles multiple argument types correctly', () => {
            const fn = (x, y) => x.toString() + y.toString()
            const memoizedFn = memoizeLast(fn)

            expect(memoizedFn(1, 2)).toBe('12')
            expect(memoizedFn('1', '2')).toBe('12')
            expect(memoizedFn(true, false)).toBe('truefalse')
        })

        it('does not cache the result when original function throws an error', () => {
            const fn = vi.fn((x, y) => {
                if (x === y)
                    throw new Error('Invalid arguments')

                return x + y
            })
            const memoizedFn = memoizeLast(fn)

            expect(() => memoizedFn(1, 1)).toThrow('Invalid arguments')
            expect(memoizedFn(1, 2)).toBe(3) // computes and caches the result

            // The function was called twice (once with the same arguments and once with different arguments)
            expect(fn).toHaveBeenCalledTimes(2)
        })
    })
})
