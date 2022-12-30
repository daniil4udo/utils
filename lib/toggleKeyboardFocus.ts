export const POSSIBLE_FOCUSABLE_ELS = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])' as const

export function toggleKeyboardFocus(scope = document, tabIndex = -1) {
    if (!window)
        return

    requestAnimationFrame(() => {
        const elArr: HTMLElement[] = Array.from(scope.querySelectorAll(POSSIBLE_FOCUSABLE_ELS))
        let i = elArr.length
        const el = elArr[i]

        while (i--) {
            if (!el.hasAttribute('disabled'))
                el.tabIndex = tabIndex
        }
    })
}
