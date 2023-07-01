import { describe, expect, it } from 'vitest'

import { toType } from '../lib/toType'

describe('@/lib/toType.ts', () => {
    it('toType of the undefined to equal "undefined"', () => {
        expect(toType(undefined)).toBe('undefined')
    })

    it('toType of the null to equal "null"', () => {
        expect(toType(null)).toBe('null')
    })

    it('toType of the true to equal "boolean"', () => {
        expect(toType(true)).toBe('boolean')
    })

    it('toType of the false to equal "boolean"', () => {
        expect(toType(false)).toBe('boolean')
    })

    it('toType of the Buffer to equal "buffer"', () => {
        expect(toType(Buffer.from(''))).toBe('buffer')
    })

    it('toType of the 42 to equal "number"', () => {
        expect(toType(42)).toBe('number')
    })

    it('toType of the "str to equal "string"" ', () => {
        expect(toType('str')).toBe('string')
    })

    it('toType of the arguments to equal "arguments"', function () {
        // eslint-disable-next-line prefer-rest-params
        expect(toType(arguments)).toBe('arguments')
    })

    it('toType of the {} to equal "object"', () => {
        expect(toType({})).toBe('object')
    })

    it('toType of the Object.create(null)) to equal "object"', () => {
        expect(toType(Object.create(null))).toBe('object')
    })

    it('toType of the new Test() to equal "Test "', () => {
        class Test { }
        expect(toType(new Test())).toBe('object')
    })

    it('toType of the new Date() to equal "date"', () => {
        expect(toType(new Date())).toBe('date')
    })

    it('toType of the [1, 2, 3] to equal "array"', () => {
        expect(toType([ 1, 2, 3 ])).toBe('array')
    })

    it('toType of the /foo/ to equal "regexp"', () => {
        expect(toType(/foo/)).toBe('regexp')
    })

    it('toType of the new RegExp() to equal "regexp"', () => {
        // eslint-disable-next-line prefer-regex-literals
        expect(toType(new RegExp('foo'))).toBe('regexp')
    })

    it('toType of the new Error() to equal "error"', () => {
        expect(toType(new Error('error'))).toBe('error')
    })

    it('toType of the function () {} to equal "function" () {})', () => {
        expect(toType(() => { })).toBe('function')
    })

    it('toType of the function * () {} to equal "generatorfunction" * () {})', () => {
        expect(toType(function* () { })).toBe('generatorfunction')
    })

    it('toType of the Symbol to equal "symbol"', () => {
        expect(toType(Symbol('str'))).toBe('symbol')
    })

    it('toType of the new Map() to equal "map"', () => {
        expect(toType(new Map())).toBe('map')
    })

    it('toType of the new WeakMap() to equal "weakmap"', () => {
        expect(toType(new WeakMap())).toBe('weakmap')
    })

    it('toType of the new Set() to equal "set"', () => {
        expect(toType(new Set())).toBe('set')
    })

    it('toType of the new WeakSet() to equal "weakset"', () => {
        expect(toType(new WeakSet())).toBe('weakset')
    })

    it('toType of the new Int8Array() to equal "int8array"', () => {
        expect(toType(new Int8Array())).toBe('int8array')
    })

    it('toType of the new Uint8Array() to equal "uint8array"', () => {
        expect(toType(new Uint8Array())).toBe('uint8array')
    })

    it('toType of the new Uint8ClampedArray() to equal "uint8clampedarray"', () => {
        expect(toType(new Uint8ClampedArray())).toBe('uint8clampedarray')
    })

    it('toType of the new Int16Array() to equal "int16array"', () => {
        expect(toType(new Int16Array())).toBe('int16array')
    })

    it('toType of the new Uint16Array() to equal "uint16array"', () => {
        expect(toType(new Uint16Array())).toBe('uint16array')
    })

    it('toType of the new Int32Array() to equal "int32array"', () => {
        expect(toType(new Int32Array())).toBe('int32array')
    })

    it('toType of the new Uint32Array() to equal "uint32array"', () => {
        expect(toType(new Uint32Array())).toBe('uint32array')
    })

    it('toType of the new Float32Array() to equal "float32array"', () => {
        expect(toType(new Float32Array())).toBe('float32array')
    })

    it('toType of the new Float64Array() to equal "float64array"', () => {
        expect(toType(new Float64Array())).toBe('float64array')
    })
})
