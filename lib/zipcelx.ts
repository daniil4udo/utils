/**
 * zipcelx is a library for generating Excel (.xlsx) files in JavaScript.
 * It provides a simple and flexible API to create Excel files with multiple sheets, data formatting, styling, and more.
 *
 * @module zipcelx
 * @see {@link https://github.com/egeriis/zipcelx}
 *
 * @example
 * ```ts
 * import { zipcelx } from '@democrance/utils';
 *
 * // Create a workbook with multiple sheets
 * const workbook = zipcelx.workbook();
 *
 * // Add sheets to the workbook
 * const sheet1 = workbook.sheet('Sheet 1');
 * sheet1.rows([
 *     ['Name', 'Age'],
 *     ['John Doe', 30],
 *     ['Jane Smith', 25]
 * ]);
 *
 * const sheet2 = workbook.sheet('Sheet 2');
 * sheet2.rows([
 *     ['Country', 'Population'],
 *     ['USA', 328_200_000],
 *     ['China', 1_409_500_000]
 * ]);
 *
 * // Generate the Excel file
 * workbook.generate('example.xlsx');
 * ```
 * @public
 */
export { default as zipcelx } from 'zipcelx';
