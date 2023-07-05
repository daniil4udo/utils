/**
 * file-saver-es is a library for saving files in JavaScript.
 * It provides a cross-platform solution for saving files from the browser to the local file system.
 *
 * @module file-saver-es
 * @see {@link https://github.com/eligrey/FileSaver.js}
 *
 * @function
 * @name saveAs
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
import * as fileSaver from 'file-saver-es/src/FileSaver'

export const { saveAs } = fileSaver
