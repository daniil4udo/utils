export function scrollTo(element?: HTMLBodyElement, offset = 0) {
    if (!window)
        return

    const top = element
        ? element.getBoundingClientRect().top
          + (window.pageYOffset || document.documentElement.scrollTop)
          - offset
        : 0

    if ('scrollRestoration' in history)
        history.scrollRestoration = 'manual'

    window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth',
    })
}
