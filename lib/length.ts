export function length(collection: any, { includeString = false } = {}) {
    try {
        // Object.keys converts string to Array
        return (!includeString && typeof collection === 'string')
            ? 0
            : collection?.length
                ?? collection?.size
                ?? Object.keys(collection).length
    }
    catch {
        return 0
    }
}
