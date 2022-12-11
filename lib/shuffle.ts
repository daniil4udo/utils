/**
 * Fisher–Yates Shuffle
 * @param array
 */

export function shuffle<T extends any[]>(array: Readonly<T>): T {
    const a = array.slice(0) as T
    let m = array.length
    let t
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
