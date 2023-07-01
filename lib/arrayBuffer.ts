/**
 * Converts an ArrayBuffer to a string.
 *
 * The method takes an ArrayBuffer as an input, creates a Uint16Array view
 * for it and then converts it to a string using the `fromCharCode` method.
 * Please note that this function assumes that the ArrayBuffer is
 * representing a UTF-16 encoded string.
 *
 * @function arrayBufferToString
 * @param {ArrayBuffer} buffer - The ArrayBuffer to be converted.
 * @returns {string} The string representation of the ArrayBuffer.
 *
 * @example
 * const buffer = new ArrayBuffer(2);
 * const view = new Uint16Array(buffer);
 * view[0] = 'A'.charCodeAt(0);
 * arrayBufferToString(buffer); // Outputs: A
 */
export function arrayBufferToString(buffer: ArrayBuffer): string {
    return String.fromCharCode.apply(null, new Uint16Array(buffer))
}

/**
 * Converts a string to an ArrayBuffer.
 *
 * The method takes a string as an input, creates an ArrayBuffer with a size
 * twice as big as the length of the string (because each character is
 * assumed to be represented as UTF-16 and thus takes 2 bytes), and then
 * fills a Uint16Array view of that buffer with the character codes of
 * the string.
 *
 * @function stringToArrayBuffer
 * @param {string} str - The string to be converted.
 * @returns {ArrayBuffer} The ArrayBuffer representation of the string.
 *
 * @example
 * const str = 'A';
 * const buffer = stringToArrayBuffer(str);
 * buffer.byteLength; // Outputs: 2
 */
export function stringToArrayBuffer(str: string): ArrayBuffer {
    const buffer = new ArrayBuffer(str.length * 2) // 2 bytes for each char
    const bufferView = new Uint16Array(buffer)

    for (let i = 0, strLen = str.length; i < strLen; i++)
        bufferView[i] = str.charCodeAt(i)

    return buffer
}
