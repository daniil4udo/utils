import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { detectMode } from '../lib/'

describe('@/lib/detectMode.ts', () => {
    const OLD_NODE_ENV = process.env
    const OLD_VITE_ENV = import.meta?.env // .MODE

    beforeEach(() => {
        vi.resetModules() // Clears the cache
        process.env = { ...OLD_NODE_ENV } // Make a copy

        if (import.meta?.env)
            import.meta.env = { ...OLD_VITE_ENV } // Make a copy
    })

    afterEach(() => {
        process.env = OLD_NODE_ENV // Restore old environment
        if (import.meta?.env)
            import.meta.env = { ...OLD_VITE_ENV } // Make a copy
    })

    it('returns import.meta.env.MODE if defined', () => {
        // Mocking import.meta can be tricky, depending on your environment
        // vi.mock('import.meta', () => ({ env: { MODE: 'test_mode' } }), { virtual: true })
        if (import.meta.env)
            import.meta.env.MODE = 'test_mode'
        // Object.defineProperty(import.meta.env, 'MODE', { value: 'test_mode' })

        const result = detectMode()
        expect(result).toBe('test_mode')
    })

    it('returns process.env.NODE_ENV if import.meta.env.MODE is not defined', () => {
        // Mocking import.meta to be undefined
        // vi.mock('import.meta', () => undefined, { virtual: true })
        Object.defineProperty(import.meta.env, 'MODE', { value: undefined })
        Object.defineProperty(process.env, 'NODE_ENV', { value: 'test_env' })

        const result = detectMode()
        expect(result).toBe('test_env')
    })

    it('returns undefined if neither import.meta.env.MODE nor process.env.NODE_ENV are defined', () => {
        // vi.mock('import.meta', () => undefined, { virtual: true })
        Object.defineProperty(import.meta.env, 'MODE', { value: undefined })
        Object.defineProperty(process.env, 'NODE_ENV', { value: undefined })

        const result = detectMode()
        expect(result).toBeNull()
    })
})
