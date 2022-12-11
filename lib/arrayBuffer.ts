export function ab2str(buf: ArrayBuffer): string {
    return String.fromCharCode.apply(null, new Uint16Array(buf))
}

export function str2ab(str: string): ArrayBuffer {
    const buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
    const bufView = new Uint16Array(buf)

    for (let i = 0, strLen = str.length; i < strLen; i++)
        bufView[i] = str.charCodeAt(i)

    return buf
}
