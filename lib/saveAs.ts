/**
 * file-saver is a library for saving files in JavaScript.
 * It provides a cross-platform solution for saving files from the browser to the local file system.
 *
 * @module file-saver
 * @see {@link https://github.com/eligrey/FileSaver.js}
 *
 * @example
 * ```ts
 * import { saveAs } from '@democrance/utils';
 *
 * // Save a file
 * const fileBlob = new Blob(['Hello, World!'], { type: 'text/plain' });
 * saveAs(fileBlob, 'example.txt');
 * ```
 * @public
 */
import fileSaver from 'file-saver';

export const { saveAs } = fileSaver;
