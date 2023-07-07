import { beforeEach, describe, expect, it } from 'vitest'

import {
    clearSessionStorage,
    getSessionStorageItem,
    removeSessionStorageItem,
    setSessionStorageItem,
} from '../lib/storageWrapper'

describe('@/lib/storageWrapper.ts', () => {
    const mockKey = 'mockKey'
    const mockValue = { key: 'value' }
    const mockSerializedValue = JSON.stringify(mockValue)
    // eslint-disable-next-line n/prefer-global/buffer
    const mockEncodedValue = Buffer.from(mockSerializedValue).toString('base64')

    beforeEach(() => {
        sessionStorage.clear()
    })

    it('should find global sessionStorage', () => {
        expect(window).toBeDefined()

        expect(() => sessionStorage).toBeDefined()
        expect(() => window.sessionStorage).toBeDefined()
        expect(() => self.sessionStorage).toBeDefined()
        expect(() => globalThis.sessionStorage).toBeDefined()

        expect(() => localStorage).toBeDefined()
        expect(() => window.localStorage).toBeDefined()
        expect(() => self.localStorage).toBeDefined()
        expect(() => globalThis.localStorage).toBeDefined()
    })

    it('sets item to sessionStorage', () => {
        // Set encoded value
        setSessionStorageItem(mockKey, mockValue)

        expect(sessionStorage.getItem(mockKey)).toEqual(mockEncodedValue)
    })

    it('gets item from sessionStorage', () => {
        // set unencoded value
        sessionStorage.setItem(mockKey, mockEncodedValue)

        const returnedValue = getSessionStorageItem(mockKey)
        expect(returnedValue).toEqual(mockValue)
    })

    it('returns null when item does not exist in sessionStorage', () => {
        const returnedValue = getSessionStorageItem('nonexistentKey')
        expect(returnedValue).toBeNull()
    })

    it('removes item from sessionStorage', () => {
        sessionStorage.setItem(mockKey, mockEncodedValue)
        removeSessionStorageItem(mockKey)
        expect(sessionStorage[mockKey]).toBeUndefined()
    })

    it('removes nothing when key does not exist in sessionStorage', () => {
        sessionStorage.setItem(mockKey, mockEncodedValue)
        const initialSessionStorageLength = sessionStorage.length
        removeSessionStorageItem('nonexistentKey')
        expect(sessionStorage.length).toEqual(initialSessionStorageLength)
    })

    it('clears sessionStorage', () => {
        sessionStorage.setItem(mockKey, mockEncodedValue)
        clearSessionStorage()
        expect(sessionStorage.length).toEqual(0)
    })
})
