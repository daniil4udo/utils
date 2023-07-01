/**
 * Removes the file extension from a given path.
 *
 * @function trimFileExtension
 * @param {string} path - The file path from which to remove the extension.
 * @returns {string} The file path without the extension.
 *
 * @example
 * trimFileExtension('/path/to/file.txt'); // Outputs: '/path/to/file'
 */
export function trimFileExtension(path: string) {
    return path.replace(/\.[^/.]+$/, '')
}

/**
 * Extracts the file name from a given path.
 *
 * @function getNameFromPath
 * @param {string} [path=''] - The file path from which to extract the name.
 * @param {Object} [options] - Optional parameters.
 * @param {boolean} [options.extension=true] - If true, the file name will include the extension.
 * @returns {string} The file name with or without extension based on the extension option.
 *
 * @example
 * getNameFromPath('/path/to/file.txt'); // Outputs: 'file.txt'
 * getNameFromPath('/path/to/file.txt', { extension: false }); // Outputs: 'file'
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
