export const possibleFocusableEls = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])' as const

export function toggleKeyboardFocus(scope = document, tabIndex = -1) {
    requestAnimationFrame(() => {
        if (!window)
            return

        const elArr: HTMLElement[] = Array.from(scope.querySelectorAll(possibleFocusableEls))
        let i = elArr.length

        while (i--) {
            if (!elArr[i].hasAttribute('disabled'))
                elArr[i].tabIndex = tabIndex
        }
    })
}
