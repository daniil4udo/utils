import _deepClone from 'rfdc'

export function deepClone<T>(o: T): T {
    try {
        return structuredClone(o)
    }
    catch {
        return _deepClone({ proto: false })(o)
    }
}
