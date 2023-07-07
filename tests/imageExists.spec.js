import { afterEach, describe, expect, it, vi } from 'vitest'

import { imageExists } from '../lib/imageExists'

// Helper function to create an Image instance
function mockImageInstance() {
    return {
        src: null,
        onload: null,
        onerror: null,
    }
}

// Override Image constructor
globalThis.Image = vi.fn(() => mockImageInstance())

describe('@/lib/imageExists.ts', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it('should resolve false when url is not string or empty', async () => {
        const notStringResult = await imageExists(12345)
        const emptyStringResult = await imageExists('')

        expect(notStringResult).toBe(false)
        expect(emptyStringResult).toBe(false)
    })

    it('should resolve url when image load successfully', async () => {
        const url = 'http://example.com/image.jpg'

        const imageInstance = mockImageInstance()
        globalThis.Image.mockImplementationOnce(() => imageInstance)

        const promise = imageExists(url)

        imageInstance.onload()

        await expect(promise).resolves.toEqual(url)
    })

    it('should resolve false when image loading fails and throwError is false', async () => {
        const url = 'http://example.com/image.jpg'

        const imageInstance = mockImageInstance()
        globalThis.Image.mockImplementationOnce(() => imageInstance)

        const promise = imageExists(url, { throwError: false })

        imageInstance.onerror()

        await expect(promise).resolves.toEqual(false)
    })

    it('should reject error when image loading fails and throwError is true', async () => {
        const url = 'http://example.com/image.jpg'

        const imageInstance = mockImageInstance()
        globalThis.Image.mockImplementationOnce(() => imageInstance)

        const promise = imageExists(url, { throwError: true })

        imageInstance.onerror()

        await expect(promise).rejects.toThrow(`[imageExists]: Image ${url} does not exist`)
    })

    it('should resolve false when url is null or undefined', async () => {
        const nullResult = await imageExists(null)
        const undefinedResult = await imageExists(undefined)

        expect(nullResult).toBe(false)
        expect(undefinedResult).toBe(false)
    })

    it('should properly set Image src', async () => {
        const url = 'http://example.com/image.jpg'
        const imageInstance = mockImageInstance()
        globalThis.Image.mockImplementationOnce(() => imageInstance)

        imageExists(url)

        expect(imageInstance.src).toEqual(url)
    })

    it('should not set Image src when url is not string or empty', async () => {
        const url = 12345
        const imageInstance = mockImageInstance()
        globalThis.Image.mockImplementationOnce(() => imageInstance)

        await imageExists(url)

        expect(imageInstance.src).toBeNull()
    })

    it('should have onError handler if throwError is false', async () => {
        const url = 'http://example.com/image.jpg'
        const imageInstance = mockImageInstance()
        globalThis.Image.mockImplementationOnce(() => imageInstance)

        imageExists(url, { throwError: false })

        expect(imageInstance.onerror).toBeDefined()
    })

    it('should not have onError handler if throwError is true', async () => {
        const url = 'http://example.com/image.jpg'
        const imageInstance = mockImageInstance()
        globalThis.Image.mockImplementationOnce(() => imageInstance)

        imageExists(url, { throwError: true })

        expect(imageInstance.onerror).toBeNull()
    })
})
