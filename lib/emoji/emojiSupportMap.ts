const GL_EMOJI_VERSION = '0.2.0'

const unicodeSupportTestMap = {
    // man, student (emojione does not have any of these yet), https://emojipedia.org/emoji-zwj-sequences/
    // occupationZwj: '\u{1F468}\u{200D}\u{1F393}',
    // woman, biking (emojione does not have any of these yet), https://emojipedia.org/emoji-zwj-sequences/
    // sexZwj: '\u{1F6B4}\u{200D}\u{2640}',
    // family_mwgb
    // Windows 8.1, Firefox 51.0.1 does not support `family_`, `kiss_`, `couple_`
    'personZwj': '\u{1F468}\u{200D}\u{1F469}\u{200D}\u{1F467}\u{200D}\u{1F466}',
    // horse_racing_tone5
    // Special case that is not supported on macOS 10.12 even though `skinToneModifier` succeeds
    'horseRacing': '\u{1F3C7}\u{1F3FF}',
    // US flag, https://emojipedia.org/flags/
    'flag': '\u{1F1FA}\u{1F1F8}',
    'rainbowFlag': '\u{1F3F3}\u{1F308}',
    // https://emojipedia.org/modifiers/
    'skinToneModifier': [
        // spy_tone5
        '\u{1F575}\u{1F3FF}',
        // person_with_ball_tone5
        '\u{26F9}\u{1F3FF}',
        // angel_tone5
        '\u{1F47C}\u{1F3FF}',
    ],

    // shaking face, https://emojipedia.org/unicode-15.0/
    '15.0': '\u{1FAE8}',
    // melting face, https://emojipedia.org/unicode-14.0/
    '14.0': '\u{1FAE0}',
    // disguised face, https://emojipedia.org/unicode-13.0/
    '13.0': '\u{1F978}',
    // yawning face, https://emojipedia.org/unicode-12.0/
    '12.0': '\u{1F971}',
    // smiling face with hearts, https://emojipedia.org/unicode-11.0/
    '11.0': '\u{1F970}',
    // star-struck, https://emojipedia.org/unicode-10.0/
    '10.0': '\u{1F929}',
    // rofl, https://emojipedia.org/unicode-9.0/
    '9.0': '\u{1F923}',
    // metal, https://emojipedia.org/unicode-8.0/
    '8.0': '\u{1F918}',
    // spy, https://emojipedia.org/unicode-7.0/
    '7.0': '\u{1F575}',
    // expressionless, https://emojipedia.org/unicode-6.1/
    '6.1': '\u{1F611}',
    // japanese_goblin, https://emojipedia.org/unicode-6.0/
    '6.0': '\u{1F47A}',
    // sailboat, https://emojipedia.org/unicode-5.2/
    '5.2': '\u{26F5}',
    // mahjong, https://emojipedia.org/unicode-5.1/
    '5.1': '\u{1F004}',
    // gear, https://emojipedia.org/unicode-4.1/
    '4.1': '\u{2699}',
    // zap, https://emojipedia.org/unicode-4.0/
    '4.0': '\u{26A1}',
    // recycle, https://emojipedia.org/unicode-3.2/
    '3.2': '\u{267B}',
    // information_source, https://emojipedia.org/unicode-3.0/
    '3.0': '\u{2139}',
    // heart, https://emojipedia.org/unicode-1.1/
    '1.1': '\u{2764}',
} as const

// Create a type based on the `unicodeSupportTestMap` keys
type UnicodeSupportTestMap = typeof unicodeSupportTestMap
type UnicodeSupportTestMapKeys = keyof UnicodeSupportTestMap
type UnicodeSupportTestMapValue = UnicodeSupportTestMap[UnicodeSupportTestMapKeys]
/**
 * Checks whether a specific pixel in an image data array has a visible color.
 *
 * @param {number} pixelOffset - The index of the pixel to check.
 * @param {Uint8ClampedArray} imageDataArray - The image data array.
 *
 * @return {boolean} `true` if the pixel is visible and has a color other than black, `false` otherwise.
 */
function checkPixelInImageDataArray(pixelOffset: number, imageDataArray: Uint8ClampedArray): boolean {
    // `4 *` because of RGBA
    const indexOffset = 4 * pixelOffset
    // Check if any of the RGB values are not 0
    const hasColor = imageDataArray[indexOffset + 0]
        || imageDataArray[indexOffset + 1]
        || imageDataArray[indexOffset + 2]
    // Check if the pixel is not fully transparent
    const isVisible = imageDataArray[indexOffset + 3]

    // Check for some sort of color other than black
    if (hasColor && isVisible)
        return true

    return false
}

function generateUnicodeSupportMap(testMap: UnicodeSupportTestMap) {
    // We use 16px because mobile Safari (iOS 9.3) doesn't properly scale emojis :/
    // See 32px, https://i.imgur.com/htY6Zym.png
    // See 16px, https://i.imgur.com/FPPsIF8.png
    const fontSize = 16

    const testMapKeys = Object.keys(testMap) as UnicodeSupportTestMapKeys[]
    const numTestEntries = testMapKeys.reduce((list, testKey) => list.concat(testMap[testKey]), [] as UnicodeSupportTestMapValue[]).length
    const canvas = document.createElement('canvas')

    // (window.gl || window).testEmojiUnicodeSupportMapCanvas = canvas;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    canvas.width = 2 * fontSize
    canvas.height = numTestEntries * fontSize
    ctx.fillStyle = '#000000'
    ctx.textBaseline = 'middle'
    ctx.font = `${fontSize}px "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`

    // Write each emoji to the canvas vertically
    let writeIndex = 0
    testMapKeys.forEach(testKey => {
        const testEntry = testMap[testKey];
        [].concat(testEntry as any).forEach(emojiUnicode => {
            ctx.fillText(emojiUnicode, 0, writeIndex * fontSize + fontSize / 2)
            writeIndex += 1
        })
    })

    // Read from the canvas
    let readIndex = 0
    const resultMap: any = testMapKeys.reduce((acc, testKey) => {
        const testEntry = testMap[testKey]
        // This needs to be a `reduce` instead of `every` because we need to
        // keep the `readIndex` in sync from the writes by running all entries
        const isTestSatisfied = [].concat(testEntry as any).reduce(isSatisfied => {
            // Sample along the vertical-middle for a couple of characters
            const imageData = ctx.getImageData(0, readIndex * fontSize + fontSize / 2, 2 * fontSize, 1)
                .data

            let isValidEmoji = false
            for (let currentPixel = 0; currentPixel < 64; currentPixel += 1) {
                const isLookingAtFirstChar = currentPixel < fontSize
                const isLookingAtSecondChar = currentPixel >= fontSize + fontSize / 2
                // Check for the emoji somewhere along the row
                if (isLookingAtFirstChar && checkPixelInImageDataArray(currentPixel, imageData)) {
                    isValidEmoji = true

                    // Check to see that nothing is rendered next to the first character
                    // to ensure that the ZWJ sequence rendered as one piece
                }
                else if (isLookingAtSecondChar && checkPixelInImageDataArray(currentPixel, imageData)) {
                    isValidEmoji = false
                    break
                }
            }

            readIndex += 1
            return isSatisfied && isValidEmoji
        }, true)

        return Object.assign(acc, { [testKey]: isTestSatisfied })
    })

    const chromeMatches = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\./)
    resultMap.meta = {
        isChrome: chromeMatches && chromeMatches.length > 0,
        chromeVersion: chromeMatches && chromeMatches[1] && Number.parseInt(chromeMatches[1], 10),
    }

    return resultMap
}

export function getUnicodeSupportMap() {
    const glEmojiVersionFromCache = window.localStorage.getItem('gl-emoji-version')
    const userAgentFromCache = window.localStorage.getItem('gl-emoji-user-agent')
    const glEmojiUnicodeSupportMapFromCache = window.localStorage.getItem('gl-emoji-unicode-support-map')

    let unicodeSupportMap = glEmojiUnicodeSupportMapFromCache ? JSON.parse(glEmojiUnicodeSupportMapFromCache) : null

    if (
        !unicodeSupportMap
        || glEmojiVersionFromCache !== GL_EMOJI_VERSION
        || userAgentFromCache !== navigator.userAgent
    ) {
        unicodeSupportMap = generateUnicodeSupportMap(unicodeSupportTestMap)

        window.localStorage.setItem('gl-emoji-version', GL_EMOJI_VERSION)
        window.localStorage.setItem('gl-emoji-user-agent', navigator.userAgent)
        window.localStorage.setItem(
            'gl-emoji-unicode-support-map',
            JSON.stringify(unicodeSupportMap),
        )
    }

    return unicodeSupportMap
}
