export function arrayBufferToString(buffer: ArrayBuffer): string {
    return String.fromCharCode.apply(null, new Uint16Array(buffer))
}

export function stringToArrayBuffer(str: string): ArrayBuffer {
    const buffer = new ArrayBuffer(str.length * 2) // 2 bytes for each char
    const bufferView = new Uint16Array(buffer)

    for (let i = 0, strLen = str.length; i < strLen; i++)
        bufferView[i] = str.charCodeAt(i)

    return buffer
}
