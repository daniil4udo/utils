interface ImageExistsOptions {
    throwError?: boolean
}

/**
 * Checks if an image exists at a given URL by loading the image. If the image successfully loads,
 * the URL is returned. Otherwise, either `false` or an error is returned based on the `throwError` option.
 *
 * @param url - The URL of the image to check.
 * @param options - An object with the optional property `throwError`. If `throwError` is `true`,
 * an error is thrown when the image doesn't exist. Otherwise, `false` is returned. Default is `false`.
 *
 * @returns A Promise that resolves with the image URL if the image exists, `false` otherwise. If `throwError` is `true`,
 * the Promise will reject with an Error when the image doesn't exist.
 *
 * @throws Will throw an Error if `throwError` option is `true` and the image does not exist.
 */
export async function imageExists(url: string | null | undefined, options: ImageExistsOptions = {}): Promise<string | boolean> {
    const throwError = options.throwError || false

    if (typeof url !== 'string' || url === '')
        return false

    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => resolve(url)

        if (throwError === false)
            image.onerror = () => resolve(false)

        else
            image.onerror = () => reject(new Error(`[imageExists]: Image ${url} does not exist`))

        image.src = url
    })
}

/**
 * Checks if all images exist at given URLs by loading each image.
 *
 * @param urls - An array of image URLs to check.
 * @param options - Options passed to the `imageExists` function.
 *
 * @returns A Promise that resolves when all images have been checked. The Promise will be fulfilled with an array of results,
 * each result corresponding to the return value of the `imageExists` function for each URL.
 */
export async function allImagesExist(urls: Array<string | null | undefined>, options: ImageExistsOptions = {}): Promise<(string | boolean)[]> {
    return Promise.all(urls.map(url => imageExists(url, options)))
}

/**
 * Checks if any image exists at given URLs by loading each image.
 *
 * @param urls - An array of image URLs to check.
 * @param options - Options passed to the `imageExists` function.
 *
 * @returns A Promise that resolves as soon as one of the images has been successfully loaded. The Promise will be fulfilled
 * with the URL of the first image that exists. If none of the images exist, the Promise will be rejected.
 */
export async function anyImagesExist(urls: Array<string | null | undefined>, options: ImageExistsOptions = {}): Promise<string> {
    return Promise.any(urls.map(url => imageExists(url, options)))
}
