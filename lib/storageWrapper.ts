import { detectMode } from './detectMode'
import { safeJSONParse } from './safeJSONParse'

/**
 * The `StorageWrapper` class provides a static interface for working with the `'localStorage' | 'sessionStorage'` Web Storage API,
 * with enhanced functionalities such as automatic serialization, encoding, and error handling.
 *
 * Note: The values stored by `StorageWrapper` methods are JSON serialized and optionally base64 encoded
 * when not in development mode, to ensure data consistency and to reduce risk of storage corruption.
 */
class StorageWrapper {
    private storage: 'localStorage' | 'sessionStorage'
    constructor(storage: 'localStorage' | 'sessionStorage' = 'localStorage') {
        this.storage = storage
    }

    /**
     * Stores the `value` in `'localStorage' | 'sessionStorage'` against the given `key`.
     *
     * The `value` is automatically serialized into a JSON string.
     * If the current environment mode is not 'development', the serialized value is also encoded using base64.
     *
     * If an error occurs during the operation, an error message is logged to the console but no error is thrown.
     *
     * @param key - The key under which to store the value.
     * @param value - The value to store. This can be any value that is serializable to JSON.
     */
    setItem(key: string, value: any): void {
        try {
            const serializedValue = JSON.stringify(value)
            const encodedValue = detectMode() !== 'development'
                // eslint-disable-next-line n/prefer-global/buffer
                ? Buffer.from(serializedValue).toString('base64')
                : serializedValue

            window[this.storage].setItem(key, encodedValue)
        }
        catch (error) {
            console.error(`Error setting item to ${this.storage}: ${error}`)
        }
    }

    /**
     * Retrieves the value from `'localStorage' | 'sessionStorage'` for the given `key`.
     *
     * If the value exists, it is automatically deserialized from a JSON string.
     * If the current environment mode is not 'development', the value is first decoded from base64 before being deserialized.
     *
     * If no value exists for the `key`, or if an error occurs during the operation, null is returned and an error message is logged to the console.
     *
     * @param key - The key for which to retrieve the value.
     * @returns The retrieved value, if it exists and is successfully retrieved and deserialized. Otherwise, null.
     */
    getItem(key: string): any {
        try {
            const encodedValue = window[this.storage].getItem(key)
            if (!encodedValue)
                return null

            const serializedValue = detectMode() !== 'development'
                // eslint-disable-next-line n/prefer-global/buffer
                ? Buffer.from(encodedValue, 'base64').toString()
                : encodedValue

            return safeJSONParse(serializedValue)
        }
        catch (error) {
            console.error(`Error getting item from ${this.storage}: ${error}`)
            return null
        }
    }

    /**
     * Removes the value in `'localStorage' | 'sessionStorage'` for the given `key`.
     *
     * If an error occurs during the operation, an error message is logged to the console but no error is thrown.
     *
     * @param key - The key for which to remove the value.
     */
    removeItem(key: string): void {
        try {
            window[this.storage].removeItem(key)
        }
        catch (error) {
            console.error(`Error removing item from ${this.storage}: ${error}`)
        }
    }

    /**
     * Removes all values from `'localStorage' | 'sessionStorage'`.
     *
     * If an error occurs during the operation, an error message is logged to the console but no error is thrown.
     */
    clear(): void {
        try {
            window[this.storage].clear()
        }
        catch (error) {
            console.error(`Error clearing ${this.storage}: ${error}`)
        }
    }
}

export const LocalStorageWrapper = new StorageWrapper('localStorage')
export const SessionStorageWrapper = new StorageWrapper('sessionStorage')

// Exporting individual static methods
export const {
    setItem: setLocalStorageItem,
    getItem: getLocalStorageItem,
    removeItem: removeLocalStorageItem,
    clear: clearLocalStorage,
} = LocalStorageWrapper

// Exporting individual static methods
export const {
    setItem: setSessionStorageItem,
    getItem: getSessionStorageItem,
    removeItem: removeSessionStorageItem,
    clear: clearSessionStorage,
} = SessionStorageWrapper
