import fsp from 'node:fs/promises'
import { URL, fileURLToPath } from 'node:url'

import { getNameFromPath } from '../dist/getNameFromPath'

const pathToLib = fileURLToPath(new URL('../lib', import.meta.url))
const getExport = path => `export * from './${path}'\n`

let exports = ''

try {
    await fsp.rm(`${pathToLib}/index.ts`)
    const files = await fsp.readdir(pathToLib, { withFileTypes: false })
    // listing all files using forEach
    files.forEach((file) => {
        // Do whatever you want to do with the file
        const fileNoExt = getNameFromPath(file, { extension: false })
        exports += getExport(fileNoExt)
    })
}
catch (err) {
    // handling error
    if (err)
        console.error(`Unable to scan directory: ${err}`)
}

await fsp.writeFile(`${pathToLib}/index.ts`, exports, 'utf-8')
