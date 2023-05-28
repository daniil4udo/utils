/**
 *
 * Removes the file extension from a given file path
 *
 * @param {string} path - The file path to be trimmed
 *
 * @returns {string} - The file path without the extension
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
