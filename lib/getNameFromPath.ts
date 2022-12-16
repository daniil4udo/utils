export function trimFileExtension(fileName: string) {
    return fileName.replace(/\.[^/.]+$/, '')
}

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
