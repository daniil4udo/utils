export function isSubstringInString(string = '', subString = ''): boolean {
    return String.prototype
        .includes
        .call(string.toString().toUpperCase(), subString.toString().toUpperCase())
}
