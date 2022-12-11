export const splitByIndex = (arr = [], i = 0) => {
    const x = arr.slice(0)
    const y = x.splice(i)

    return [ x, y ]
}
