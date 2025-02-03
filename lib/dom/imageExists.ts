import type { Nullable } from '../types';

interface ImageExistsOptions {
    /**
     * A boolean value indicating whether an error should be thrown if the image does not exist.
     *
     * @defaultValue `false`
     */
    throwError?: boolean
}

/**
 * Checks if an image exists at the given URL.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @param url - The URL of the image to check.
 * @param options - An optional {@link ImageExistsOptions} object.
 * @returns A promise that resolves with the URL of the image if it exists. If the image does not exist, it resolves with `false` or throws an error depending on the `throwError` option.
 *
 * @throws {Error} If `throwError` is set to `true` and the image does not exist.
 *
 * @example
 * ```ts
 * import { imageExists, ImageExistsOptions } from '@democrance/utils';
 *
 * const options: ImageExistsOptions = { throwError: true };
 *
 * try {
 *     const url = await imageExists('https://example.com/image.png', options);
 *     console.log(url); // Outputs: 'https://example.com/image.png' or false
 * } catch (error) {
 *     console.log(error.message); // Outputs: '[imageExists]: Image https://example.com/image.png does not exist'
 * }
 * ```
 * @public
 */
export async function imageExists<T extends string>(
    url: Nullable<T>,
    options: ImageExistsOptions = {},
): Promise<T | boolean> {
    const { throwError = false } = options;

    if (window === undefined || typeof url !== 'string' || url === '')
        return false;

    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(url);

        if (throwError === false)
            image.onerror = () => resolve(false);

        else
            image.onerror = () => reject(new Error(`[imageExists]: Image ${url} does not exist`));

        image.src = url;
    });
}

export async function allImagesExist<T extends string>(
    urls: Array<Nullable<T>>,
    options: ImageExistsOptions = {},
): Promise<(string | boolean)[]> {
    return Promise.all(urls.map(url => imageExists(url, options)));
}

export async function anyImagesExist<T extends string>(
    urls: Array<Nullable<T>>,
    options: ImageExistsOptions = {},
): Promise<(string | boolean)[]> {
    return (Promise as any).any(urls.map(url => imageExists(url, options)));
}
