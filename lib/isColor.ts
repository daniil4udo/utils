/**
 * Check if string is representation of CSS color
 * @param strColor
 * @returns
 */
export function isColor(strColor: string) {
    if (!strColor)
        return false

    const s = new Option().style
    s.color = strColor

    return s.color !== ''
}
