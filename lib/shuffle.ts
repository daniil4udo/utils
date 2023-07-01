/**
 * Performs the Fisher-Yates Shuffle on an array in place.
 * Rearranges the elements of the array randomly.
 *
 * @template T - The type of the elements in the array.
 *
 * @function shuffle
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} The shuffled array.
 */
export function shuffle<T>(array: Readonly<T[]>): T[] {
    const a = array.slice(0)
    let m = array.length
    let t: T
    let i: number

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--)

        // And swap it with the current element.
        t = a[m]
        a[m] = a[i]
        a[i] = t
    }

    return a
}
