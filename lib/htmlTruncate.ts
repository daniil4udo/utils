import clipper from 'text-clipper'

export function htmlTruncate(htmlString: string, maxLength: number) {
    return clipper(htmlString, maxLength, { html: true })
}
