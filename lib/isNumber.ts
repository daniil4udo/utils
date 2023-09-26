/**
 * Determines whether the given input is a number.
 *
 * This function checks if the input is of type 'number' and not a NaN, or if the input is a string
 * that can be coerced to a finite number.
 *
 * @param input - The value to be checked.
 *
 * @returns A type predicate indicating whether the input is a number.
 *
 * @example
 * isNumber(5e3);               // true
 * isNumber(0xff);              // true
 * isNumber(-1.1);              // true
 * isNumber(0);                 // true
 * isNumber(1);                 // true
 * isNumber(1.1);               // true
 * isNumber(10);                // true
 * isNumber(10.10);             // true
 * isNumber(100);               // true
 * isNumber('-1.1');            // true
 * isNumber('0');               // true
 * isNumber('012');             // true
 * isNumber('0xff');            // true
 * isNumber('1');               // true
 * isNumber('1.1');             // true
 * isNumber('10');              // true
 * isNumber('10.10');           // true
 * isNumber('100');             // true
 * isNumber('5e3');             // true
 * isNumber(parseInt('012'));   // true
 * isNumber(parseFloat('012')); // true
 *
 * isNumber(Infinity);          // false
 * isNumber(NaN);               // false
 * isNumber(null);              // false
 * isNumber(undefined);         // false
 * isNumber('');                // false
 * isNumber('   ');             // false
 * isNumber('foo');             // false
 * isNumber([1]);               // false
 * isNumber([]);                // false
 * isNumber(function () {});    // false
 * isNumber({});                // false
 */
export function isNumber(input: unknown): input is number {
    if (typeof input === 'number')
        return input - input === 0

    if (typeof input === 'string' && input.trim() !== '')
        return Number.isFinite(+input)

    return false
}
