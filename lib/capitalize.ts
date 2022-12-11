import { isPrimitive } from './isPrimitive'

/**
 * Capitalize first letter of provided text
 * @param {String} text
 */
export function capitalize(text = '') {
    if (!text && !isPrimitive(text))
        return ''

    return text.toString().charAt(0).toUpperCase() + text.slice(1)
}
