import clipper from 'text-clipper'

type ClipOptions = Parameters<typeof clipper>

export function htmlTruncate(htmlString: ClipOptions[0], maxLength: ClipOptions[1], options: ClipOptions[2] = {}) {
    return clipper(htmlString, maxLength, Object.assign({ html: true }, options))
}
