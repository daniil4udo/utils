export const deCamelize = (str = '') => str
// Separate capitalized words.
    .replace(/([A-Z]{2,})(\d+)/g, '$1 $2')
    .replace(/([a-z\d]+)([A-Z]{2,})/g, '$1 $2')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // `[a-rt-z]` matches all lowercase characters except `s`.
    // This avoids matching plural acronyms like `APIs`.
    .replace(/([A-Z]+)([A-Z][a-rt-z\d]+)/g, '$1 $2')

export function slugify(string = '') {
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
