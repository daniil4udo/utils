/* eslint-disable no-await-in-loop */
import fsp from 'node:fs/promises'
import { resolve } from 'node:path'
import { basename, dirname } from 'node:path/posix'
import { fileURLToPath } from 'node:url'

import fg from 'fast-glob'
import { createLogger } from 'vite'

export const logger = createLogger()

export async function patchCJS(files: string[]) {
    for (const file of files) {
        logger.info(`[patchCJS] - ${basename(file)}`)

        let code = await fsp.readFile(file, 'utf8')
        code = code.replace('exports.default =', 'module.exports =')
        code += 'exports.default = module.exports;'

        fsp.writeFile(file, code)
    }
}

// Isomorphic `__dirname`
const _dirname = typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))

// All CJS files
const files = await fg('**/*.cjs', {
    ignore: [ 'chunk-*' ],
    absolute: true,
    cwd: resolve(_dirname, '../dist'),
})

// fix cjs exports
patchCJS(files)
