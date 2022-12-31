/**
 *
 * Trim extension from the path or file name
 *
 * @param {string} path - Path or file name with an extension
 *
 * @returns {string} - Path or file name without an extension
 *
 */
export function trimFileExtension(path: string) {
    return path.replace(/\.[^/.]+$/, '')
}

/**
 *
 * Get file name with or without an extension base on options passed
 *
 * @param path - Path
 * @param {object} options
 * @param {boolean} options.extension
 *
 * @returns {string} - Trimmed filename
 */
export function getNameFromPath(path: string, { extension = true } = {}) {
    const fileName = path
        .split('\\')
        .pop()
        .split('/')
        .pop()

    return extension
        ? fileName
        : trimFileExtension(fileName)
}
