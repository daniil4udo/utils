/**
 * Converts a camelCase or PascalCase string to a space-separated string.
 *
 * @function deCamelize
 * @param {string} [str=''] - The input string to be converted.
 * @returns {string} The de-camelized string.
 *
 * @example
 * deCamelize('helloWorld'); // Returns 'hello World'
 * deCamelize('helloWorld123'); // Returns 'hello World123'
 */
export function deCamelize(str = '') {
    return str
        // Separate capitalized words.
        .replace(/([A-Z]{2,})(\d+)/g, '$1 $2')
        .replace(/([a-z\d]+)([A-Z]{2,})/g, '$1 $2')
        .replace(/([a-z\d])([A-Z])/g, '$1 $2')
        // `[a-rt-z]` matches all lowercase characters except `s`.
        // This avoids matching plural acronyms like `APIs`.
        .replace(/([A-Z]+)([A-Z][a-rt-z\d]+)/g, '$1 $2')
}

export function slugify(string = '') {
/**
 * Converts a string into a slug by removing special characters, replacing spaces with dashes,
 * and converting to lowercase.
 *
 * @function slugify
 * @param {string} [str=''] - The input string to be converted into a slug.
 * @returns {string} The slugified string.
 *
 * @example
 * slugify('Hello World'); // Returns 'hello-world'
 * slugify('Hello, World!'); // Returns 'hello-world'
 * slugify('Déjà Vu'); // Returns 'deja-vu'
 */
    // Use hash map for special characters
    const specialChars = '{"à": "a","ä": "a","á": "a","â": "a","æ": "a","å": "a","ë": "e","è": "e","é": "e","ê": "e","î": "i","ï": "i","ì": "i","í": "i","ò": "o","ó": "o","ö": "o","ô": "o","ø": "o","ù": "o","ú": "u","ü": "u","û": "u","ñ": "n","ç": "c","ß": "s","ÿ": "y","œ": "o","ŕ": "r","ś": "s","ń": "n","ṕ": "p","ẃ": "w","ǵ": "g","ǹ": "n","ḿ": "m","ǘ": "u","ẍ": "x","ź": "z","ḧ": "h","·": "-","/": "-","_": "-",",": "-",":": "-",";": "-"}'

    if (typeof string !== 'string')
        throw new TypeError(`Expected a string, got \`${typeof string}\``)

    return deCamelize(string)
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/./g, target => JSON.parse(specialChars)[target] || target) // Replace special characters using the hash map
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}
