export function getNameFromPath(path: string, { extension = true } = {}) {
    const fileName = path
        .split('\\')
        .pop()
        .split('/')
        .pop()

    return extension
        ? fileName
        : fileName.replace(/\.[^/.]+$/, '')
}
