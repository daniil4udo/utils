import { describe, expect, it } from 'vitest'

import { getNameFromPath, trimFileExtension } from '../lib/getNameFromPath'

describe('@/lib/getNameFromPath.ts', () => {
    describe('trimFileExtension', () => {
        it('should correctly trim the extension', () => {
            expect(trimFileExtension('/path/to/file.txt')).toEqual('/path/to/file')
        })

        it('should return the same string if there is no extension', () => {
            expect(trimFileExtension('/path/to/file')).toEqual('/path/to/file')
        })

        it('should throw a TypeError if the input is not a string', () => {
            expect(() => trimFileExtension(123)).toThrow(TypeError)
        })

        it('should handle empty strings', () => {
            expect(trimFileExtension('')).toEqual('')
        })
    })

    describe('getNameFromPath', () => {
        it('should correctly get the file name with extension', () => {
            expect(getNameFromPath('/path/to/file.txt')).toEqual('file.txt')
        })

        it('should correctly get the file name without extension', () => {
            expect(getNameFromPath('/path/to/file.txt', { extension: false })).toEqual('file')
        })

        it('should return the same string if there are no slashes', () => {
            expect(getNameFromPath('file.txt')).toEqual('file.txt')
        })

        it('should handle empty strings', () => {
            expect(getNameFromPath('')).toEqual('')
        })

        it('should throw a TypeError if the input is not a string', () => {
            expect(() => getNameFromPath(123)).toThrow(TypeError)
        })
    })
})
