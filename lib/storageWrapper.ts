import type { Nullable } from './types';

import { safeJSONParse } from './safeJSON';

/**
 * `StorageWrapper` is a class that wraps local and session storage functionalities.
 *
 * @remarks
 * This class allows you to work with localStorage or sessionStorage while automatically handling
 * the serialization and deserialization of values to and from JSON. It also handles base64 encoding
 * and decoding if the environment mode is not 'development'.
 *
 * @example
 * ```ts
 * const storage = new StorageWrapper('localStorage');
 * storage.setItem('key', { field: 'value' });
 * const item = storage.getItem('key'); // returns { field: 'value' }
 * storage.removeItem('key');
 * ```
 * @private
 */
class StorageWrapper<T, K extends string> {
    private storage: 'localStorage' | 'sessionStorage';
    constructor(storage: 'localStorage' | 'sessionStorage' = 'localStorage') {
        this.storage = storage;
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
    setItem(key: K, value: T): void {
        try {
            const serializedValue = JSON.stringify(value);
            const encodedValue = process.env.NODE_ENV !== 'development'
                ? Buffer.from(serializedValue).toString('base64')
                : serializedValue;

            window[this.storage].setItem(key, encodedValue);
        }
        catch (error) {
            console.error(`Error setting item to ${this.storage}: ${error}`);
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
    getItem(key: K): Nullable<T> {
        try {
            const encodedValue = window[this.storage].getItem(key);
            if (!encodedValue)
                return null;

            const serializedValue = process.env.NODE_ENV !== 'development'
                ? Buffer.from(encodedValue, 'base64').toString()
                : encodedValue;

            return safeJSONParse(serializedValue) as T;
        }
        catch (error) {
            console.error(`Error getting item from ${this.storage}: ${error}`);
            return null;
        }
    }

    /**
     * Removes the value in `'localStorage' | 'sessionStorage'` for the given `key`.
     *
     * If an error occurs during the operation, an error message is logged to the console but no error is thrown.
     *
     * @param key - The key for which to remove the value.
     */
    removeItem(key: K): void {
        try {
            window[this.storage].removeItem(key);
        }
        catch (error) {
            console.error(`Error removing item from ${this.storage}: ${error}`);
        }
    }

    /**
     * Removes all values from `'localStorage' | 'sessionStorage'`.
     *
     * If an error occurs during the operation, an error message is logged to the console but no error is thrown.
     */
    clear(): void {
        try {
            window[this.storage].clear();
        }
        catch (error) {
            console.error(`Error clearing ${this.storage}: ${error}`);
        }
    }
}

/**
 * Pre-instantiated `StorageWrapper` instance for localStorage.
 *
 * @remarks
 * This is a singleton instance of `StorageWrapper` specifically set up to interact with `localStorage`.
 * All operations performed using this instance will act on the `localStorage`.
 *
 * @example
 * ```ts
 * import { LocalStorageWrapper } from '@democrance/utils';
 *
 * LocalStorageWrapper.setItem('key', { field: 'value' });
 * const item = LocalStorageWrapper.getItem('key'); // returns { field: 'value' }
 * LocalStorageWrapper.removeItem('key');
 * ```
 */
const LocalStorageWrapper = new StorageWrapper('localStorage');

export const setLocalStorageItem = LocalStorageWrapper.setItem.bind(LocalStorageWrapper);
export const getLocalStorageItem = LocalStorageWrapper.getItem.bind(LocalStorageWrapper);
export const removeLocalStorageItem = LocalStorageWrapper.removeItem.bind(LocalStorageWrapper);
export const clearLocalStorage = LocalStorageWrapper.clear.bind(LocalStorageWrapper);

/**
 * Pre-instantiated `StorageWrapper` instance for sessionStorage.
 *
 * @remarks
 * This is a singleton instance of `StorageWrapper` specifically set up to interact with `sessionStorage`.
 * All operations performed using this instance will act on the `sessionStorage`.
 *
 * @example
 * ```ts
 * import { SessionStorageWrapper } from '@democrance/utils';
 *
 * SessionStorageWrapper.setItem('key', { field: 'value' });
 * const item = SessionStorageWrapper.getItem('key'); // returns { field: 'value' }
 * SessionStorageWrapper.removeItem('key');
 * ```
 */
const SessionStorageWrapper = new StorageWrapper('sessionStorage');

export const setSessionStorageItem = SessionStorageWrapper.setItem.bind(SessionStorageWrapper);
export const getSessionStorageItem = SessionStorageWrapper.getItem.bind(SessionStorageWrapper);
export const removeSessionStorageItem = SessionStorageWrapper.removeItem.bind(SessionStorageWrapper);
export const clearSessionStorage = SessionStorageWrapper.clear.bind(SessionStorageWrapper);
