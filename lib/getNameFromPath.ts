/**
 * Removes the file extension from a given path.
 *
 * This function is useful when you want to retrieve the file name without the extension.
 * It works by removing all characters after and including the last '.' in the path string.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param path - The file path from which to remove the extension.
 * @returns The file path without the extension. If the input path does not contain an
 *      extension, the same path is returned.
 * @throws {TypeError} If the input is not of type 'string'.
 *
 * @example
 * ```ts
 * import { trimFileExtension } from '@democrance/utils';
 *
 * console.log(trimFileExtension('/path/to/file.txt')); // Outputs: '/path/to/file'
 * ```
 * @public
 */
export function trimFileExtension(path = '') {
    if (typeof path !== 'string')
        throw new TypeError('[trimFileExtension] - Path must be a string')

    return path.replace(/\.[^/.]+$/, '')
}

/**
 * Extracts the file name from a given path.
 *
 * This function can return the file name with or without the extension, based on the
 * `extension` option in the options object.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param path - The file path from which to extract the name. Defaults to an empty string.
 * @param options - An optional object containing additional parameters.
 * @param options.extension - A boolean indicating whether the file name should include
 *      the extension. Defaults to `true`.
 * @returns The file name with or without the extension, based on the `extension` option.
 *      If the path does not contain a file name, an empty string is returned.
 * @throws {TypeError} If the input is not of type 'string'.
 *
 * @example
 * ```ts
 * import { getNameFromPath } from '@democrance/utils';
 *
 * console.log(getNameFromPath('/path/to/file.txt')); // Outputs: 'file.txt'
 * console.log(getNameFromPath('/path/to/file.txt', { extension: false })); // Outputs: 'file'
 * @public
 * ```
 */
export function getNameFromPath(path = '', { extension = true } = {}) {
    if (typeof path !== 'string')
        throw new TypeError('[getNameFromPath] - Path must be a string')

    const fileName = path
        .split('\\')
        .pop()
        .split('/')
        .pop()

    return extension
        ? fileName
        : trimFileExtension(fileName)
}
