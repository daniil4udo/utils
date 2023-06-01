import fsp from 'node:fs/promises'
import { URL, fileURLToPath } from 'node:url'

import { getNameFromPath } from '../dist/getNameFromPath'

const pathToLib = fileURLToPath(new URL('../lib', import.meta.url))
const getExport = path => `export * from './${path}'\n`

let exports = '// That is autogenerated file\n'

try {
    // await fsp.rm(`${pathToLib}/index.ts`)
    const dirents = await fsp.readdir(pathToLib, { withFileTypes: true })
    // listing all dirents using forEach
    dirents
        .filter(dirent => dirent.isFile() && dirent.name !== 'index.ts')
        .map(dirent => dirent.name)
        .forEach(file => {
            // Do whatever you want to do with the dirent
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
