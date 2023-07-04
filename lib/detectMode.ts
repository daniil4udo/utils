/**
 * Detects the current mode of the environment.
*
 * It first tries to retrieve the mode from the `import.meta.env` object.
 * If that fails (i.e., the object is `undefined`), it retrieves the mode from the `process.env` object.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 * @returns The mode of the current environment or `undefined` if neither `import.meta.env.MODE` nor `process.env.NODE_ENV` exist.
 *
 * @example
 * ```ts
 * import { detectMode } from '@democrance/utils';
 *
 * console.log(detectMode()); // Outputs: 'development', 'production', or undefined
 * ```
 * @public
 */
export function detectMode() {
    try {
        return import.meta.env?.MODE
    }
    catch {
        return process.env?.NODE_ENV
    }
}
