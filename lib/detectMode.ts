export function detectMode() {
    try {
        return import.meta.env?.MODE
    }
    catch {
        return process.env?.NODE_ENV
    }
}
