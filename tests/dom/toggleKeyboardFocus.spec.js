import { JSDOM } from 'jsdom'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

import { toggleKeyboardFocus } from '../../lib'

describe('@/lib/toggleKeyboardFocus.ts', () => {
    let dom

    beforeAll(() => {
        dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
        globalThis.document = dom.window.document
        globalThis.window = dom.window

        // Mock the requestAnimationFrame function
        globalThis.window.requestAnimationFrame = vi.fn(callback => {
            callback() // Immediately invoke the callback
        })
    })

    afterAll(() => {
        globalThis.document = undefined
        globalThis.window = undefined
        dom = undefined
    })

    it('should find global requestAnimationFrame', () => {
        const noop = vi.fn()
        expect(window).toBeDefined()
        expect(() => addEventListener('abort', noop)).not.toThrow()
        expect(() => requestAnimationFrame(noop)).not.toThrow()
        expect(() => window.requestAnimationFrame(noop)).not.toThrow()
        expect(() => self.requestAnimationFrame(noop)).not.toThrow()
        expect(() => globalThis.requestAnimationFrame(noop)).not.toThrow()
    })

    it('should not throw an error when scope is null or undefined', () => {
        expect(() => {
            toggleKeyboardFocus(null)
        }).not.toThrow()

        expect(() => {
            toggleKeyboardFocus(undefined)
        }).not.toThrow()
    })

    it('should not throw an error when scope does not contain any focusable elements', () => {
        globalThis.document.body.innerHTML = `
            <div id="scope">
                <span>Non-focusable element</span>
            </div>
        `
        const scope = globalThis.document.getElementById('scope')
        expect(() => {
            toggleKeyboardFocus(scope)
        }).not.toThrow()
    })

    it('should toggle keyboard focus on elements with tabindex attribute and tags specified in POSSIBLE_FOCUSABLE_TAGS', () => {
        globalThis.document.body.innerHTML = `
            <div id="scope">
                <a href="#">Link</a>
                <button>Button</button>
                <details></details>
                <input type="text" />
                <textarea></textarea>
                <select></select>
                <div tabindex="0">Custom Focusable Element</div>
                <span tabindex="0" role="button">Custom Focusable Element</span>
            </div>
        `
        const scope = globalThis.document.getElementById('scope')
        const elements = globalThis.document.querySelectorAll('#scope a, #scope button, #scope details, #scope input[type="text"], #scope textarea, #scope select, #scope div[tabindex="0"], #scope span[tabindex="0"]')

        toggleKeyboardFocus(scope)

        setTimeout(() => {
            [ ...elements ].forEach(element => {
                expect(element.tabIndex).toBe(-1)
            })
        }, 0)
    })

    it('should not toggle keyboard focus on elements with the disabled attribute', () => {
        globalThis.document.body.innerHTML = `
            <div id="scope">
                <button disabled>Disabled Button</button>
                <input type="text" disabled />
                <select disabled></select>
            </div>
        `
        const scope = globalThis.document.getElementById('scope')
        const elements = globalThis.document.querySelectorAll('#scope button, #scope input[type = "text"], #scope select')
        const elementsTabIndex = [ ...elements ].map(element => element.tabIndex)

        toggleKeyboardFocus(scope)

        setTimeout(() => {
            [ ...elements ].forEach((element, index) => {
                expect(element.tabIndex).toBe(elementsTabIndex[index])
            })
        }, 0)
    })

    it('should toggle keyboard focus with custom tabIndex value', () => {
        document.body.innerHTML = `
            <div id="scope">
                <button>Button 1</button>
                <input type="text" />
                <select></select>
            </div>
        `
        const scope = document.getElementById('scope')
        const elements = globalThis.document.querySelectorAll('#scope button, #scope input[type="text"], #scope select')

        toggleKeyboardFocus(scope, 0)

        setTimeout(() => {
            [ ...elements ].forEach(element => {
                expect(element.tabIndex).toBe(0)
            })
        }, 0)
    })

    it('should toggle keyboard focus on all focusable elements within scope', () => {
        const scope = document.createElement('div')

        const element1 = document.createElement('input')
        const element2 = document.createElement('button')
        const { tabIndex } = element2
        const element3 = document.createElement('a')

        element1.setAttribute('type', 'text')
        element2.setAttribute('disabled', 'true')
        element3.setAttribute('href', '#')

        scope.appendChild(element1)
        scope.appendChild(element2)
        scope.appendChild(element3)

        toggleKeyboardFocus(scope)

        setTimeout(() => {
            expect(element1.tabIndex).toBe(-1)
            expect(element2.tabIndex).toBe(tabIndex)
            expect(element3.tabIndex).toBe(-1)
        }, 0)
    })
})
