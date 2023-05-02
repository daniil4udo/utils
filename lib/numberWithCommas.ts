function getFractions(num: number | string) {
    const [ , fractions = 0 ] = String(num).split('.')
    return fractions === 0
        ? 0
        : fractions.length
}

export function numberWithCommas(num: number | string, dp?: boolean | number): string {
    const currentFractions = getFractions(num)
    const number = typeof num === 'string' ? Number(num) : num
    const fractions = typeof dp === 'boolean'
        ? (dp ? currentFractions : 0)
        : typeof dp === 'number'
            ? (dp > 20 ? 20 : dp)
            : 0

    return number.toLocaleString('en', {
        maximumFractionDigits: fractions,
    })
}
