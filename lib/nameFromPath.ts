export function nameFromPath(str: string, { extension = true } = {}) {
    const fileName = str
        .split('\\')
        .pop()
        .split('/')
        .pop()

    return extension
        ? fileName
        : fileName.replace(/\.[^/.]+$/, '')
}
