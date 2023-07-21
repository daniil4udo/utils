import { describe, expect, it } from 'vitest'

import { isAbsoluteURL } from '../lib/'

describe('@/lib/isAbsoluteURL.ts', () => {
    it('returns true for absolute URLs', () => {
        const urls = [
            'http://example.com',
            'https://example.com',
            'ftp://example.com',
            '//example.com',
        ]

        urls.forEach(url => {
            expect(isAbsoluteURL(url)).toBeTruthy()
        })
    })

    it('returns false for relative URLs', () => {
        const urls = [
            '/path/to/file',
            './path/to/file',
            '../path/to/file',
            'file',
        ]

        urls.forEach(url => {
            expect(isAbsoluteURL(url)).toBeFalsy()
        })
    })

    it('returns false for non-string inputs', () => {
        const inputs = [
            null,
            undefined,
            123,
            { a: 'b' },
        ]

        inputs.forEach(input => {
            expect(isAbsoluteURL(input)).toBeFalsy()
        })
    })

    it('returns false for malformed URLs', () => {
        const urls = [
            'http:/example.com',
            'https:/example.com',
            'http//example.com',
        ]

        urls.forEach(url => {
            expect(isAbsoluteURL(url)).toBeFalsy()
        })
    })

    it('returns true for absolute URLs with subdomains and paths', () => {
        const urls = [
            'http://sub.example.com/path/to/file',
            'https://sub.example.com/path/to/file',
            'ftp://sub.example.com/path/to/file',
            '//sub.example.com/path/to/file',
        ]

        urls.forEach(url => {
            expect(isAbsoluteURL(url)).toBeTruthy()
        })
    })

    it('returns true for absolute URLs with special characters in path', () => {
        const urls = [
            'http://example.com/path/to/file#hash',
            'https://example.com/path/to/file?query=value',
            'ftp://example.com/path/to/file%20with%20spaces',
        ]

        urls.forEach(url => {
            expect(isAbsoluteURL(url)).toBeTruthy()
        })
    })

    it('returns true for absolute URLs with port number', () => {
        const urls = [
            'http://example.com:8080',
            'https://example.com:443',
            'ftp://example.com:21',
        ]

        urls.forEach(url => {
            expect(isAbsoluteURL(url)).toBeTruthy()
        })
    })

    it('returns false for URLs without scheme', () => {
        const urls = [
            'example.com',
            'www.example.com',
            'sub.example.com',
        ]

        urls.forEach(url => {
            expect(isAbsoluteURL(url)).toBeFalsy()
        })
    })

    it('returns true for URLs with local network hostnames', () => {
        const urls = [
            'http://localhost',
            'https://localhost:3000',
            'http://192.168.0.1',
        ]

        urls.forEach(url => {
            expect(isAbsoluteURL(url)).toBeTruthy() // these are actually absolute URLs, not relative ones.
        })
    })
})
