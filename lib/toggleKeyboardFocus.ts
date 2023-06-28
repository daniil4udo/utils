/**
    'a[href]',
    'area[href]',
    'button',
    'details',
    'input',
    'iframe',
    'select',
    'textarea',

    // these are actually case sensitive but i'm not listing out all the possible variants
    '[contentEditable=""]',
    '[contentEditable="true"]',
    '[contentEditable="TRUE"]',

    '[tabindex]:not([tabindex^="-"])',
    ':not([disabled])';
 */
export const POSSIBLE_FOCUSABLE_TAGS = 'a[href], area[href], button, details, input, textarea, select, [tabindex]:not([tabindex="-1"])' as const

export function toggleKeyboardFocus(scope = document.body, tabIndex = -1) {
    if (!window)
        return

    const elArr: HTMLElement[] = Array.from(scope.querySelectorAll(POSSIBLE_FOCUSABLE_TAGS))
    let i = elArr.length
    const el = elArr[i]

    while (i--) {
        requestAnimationFrame(() => {
            if (!el.hasAttribute('disabled'))
                el.tabIndex = tabIndex
        })
    }
}
