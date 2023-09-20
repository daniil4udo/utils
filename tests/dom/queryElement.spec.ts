import { JSDOM } from 'jsdom'
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest'

import { queryElement } from '../../lib'

describe('@/lib/queryElement.ts', () => {
    let dom: JSDOM | undefined

    beforeAll(() => {
        dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
        globalThis.window = dom.window
        globalThis.document = dom.window.document
    })

    afterAll(() => {
        dom = undefined
        globalThis.document = undefined
        globalThis.window = undefined
    })

    it('should find global window & document', () => {
        expect(window).toBeDefined()
        expect(globalThis.window).toBeDefined()
        expect(globalThis.document).toBeDefined()
    })

    describe('global context', () => {
        let container: HTMLElement

        beforeEach(() => {
            // Set up DOM
            container = globalThis.document.createElement('div')
            container.innerHTML = `
                <div id="id1" class="class1"></div>
                <div id="id2" class="class1 class2"></div>
                <span class="class2"></span>
            `
            globalThis.document.body.appendChild(container)
        })

        afterEach(() => {
            // Clean up DOM
            globalThis.document.body.removeChild(container)
        })

        it('should queryElement by ID', () => {
            const result = queryElement('#id1')
            expect(result).not.toBeNull()
            expect(result?.length).toBe(1)
            expect(result?.[0].id).toBe('id1')
        })

        it('should queryElement by class', () => {
            const result = queryElement('.class1')
            expect(result).not.toBeNull()
            expect(result?.length).toBe(2)
            expect(result?.[0].classList.contains('class1')).toBeTruthy()
            expect(result?.[1].classList.contains('class1')).toBeTruthy()
        })

        it('should queryElement by tag', () => {
            const result = queryElement('div')
            expect(result).not.toBeNull()
            expect(result?.length).toBe(3)
            expect(result?.[0].tagName).toBe('DIV')
            expect(result?.[1].tagName).toBe('DIV')
        })

        it('should return [] if no elements match', () => {
            const result = queryElement('#nonexistent')
            expect(result).toEqual([])
        })

        it('should query multiple classes', () => {
            const result = queryElement('.class1.class2')
            expect(result).not.toBeNull()
            expect(result?.length).toBe(1)
            expect(result?.[0].classList.contains('class1')).toBeTruthy()
            expect(result?.[0].classList.contains('class2')).toBeTruthy()
        })

        it('should handle complex selectors', () => {
            const result = queryElement('div.class1#id2')
            expect(result).not.toBeNull()
            expect(result?.length).toBe(1)
            expect(result?.[0].id).toBe('id2')
        })

        it('should return null for invalid selectors', () => {
            const result = queryElement('#')
            expect(result).toEqual([])
        })

        it('should handle empty string', () => {
            const result = queryElement('')
            expect(result).toEqual([])
        })
    })

    describe('custom context', () => {
        it('should use custom context', () => {
            const customContext = globalThis.document.createElement('div')
            customContext.innerHTML = `<p id="pid1" class="pclass1"></p>`
            const result = queryElement('#pid1', customContext)
            expect(result).not.toBeNull()
            expect(result?.length).toBe(1)
            expect(result?.[0].id).toBe('pid1')
        })



        it('should return null when querying by ID in non-Document context', () => {
            const divContext = globalThis.document.createElement('div')
            const result = queryElement('#id1', divContext)
            expect(result).toEqual([])
        })

        it('should return elements that match the tag name in a custom context', () => {
            const customContext = globalThis.document.createElement('div')
            customContext.innerHTML = `
                <p class="pclass1"></p>
                <p class="pclass2"></p>
            `
            const result = queryElement('p', customContext)
            expect(result).not.toBeNull()
            expect(result?.length).toBe(2)
        })

        it('should return null if no elements match in a custom context', () => {
            const customContext = globalThis.document.createElement('div')
            const result = queryElement('.nonexistent', customContext)
            expect(result).toEqual([])
        })
    })

    describe('edge cases', () => {
        let global: JSDOM

        beforeEach(() => {
            global = new JSDOM(`
            <body>
                <div id="iD1" class="Class1"></div>
                <DIV id="id2" class="class2"></DIV>
                <span id="special!@#$" class="special!@#$"></span>
                <p id="🙂" class="🙃"></p>
            </body>
        `)
        })

        it('should handle case sensitivity for IDs and classes', () => {
            const result1 = queryElement('#iD1', global.window.document)
            expect(result1?.[0]?.id).toBe('iD1')

            const result2 = queryElement('.Class1', global.window.document)
            expect(result2?.[0]?.classList.contains('Class1')).toBeTruthy()
        })

        it('should handle uppercase HTML tags', () => {
            const result = queryElement('SPaN', global.window.document)
            expect(result?.length).toBe(1)
        })

        it('should handle invalid context', () => {
            expect(() => queryElement('div', null)).toThrow(TypeError)
        })

        it('should handle deeply nested elements', () => {
            global.window.document.body.innerHTML = `<div><div><div id="deep"></div></div></div>`
            const result = queryElement('#deep', global.window.document)
            expect(result?.[0]?.id).toBe('deep')
        })

        it('should handle special characters', () => {
            const result = queryElement('#special\\!\\@\\#\\$', global.window.document)
            expect(result?.[0]?.id).toBe('special!@#$')
        })

        it('should handle Unicode characters', () => {
            const result = queryElement('#\\1F642', global.window.document) // Unicode for 🙂
            expect(result?.[0]?.id).toBe('🙂')
        })

        it('should handle multiple selectors', () => {
            const result = queryElement('#iD1, .class2', global.window.document)
            expect(result?.length).toBe(2)
        })
    })

})
