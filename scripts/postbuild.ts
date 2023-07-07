/* eslint-disable no-await-in-loop */
import fsp from 'node:fs/promises'
import { resolve } from 'node:path'
import { basename } from 'node:path/posix'
import { fileURLToPath } from 'node:url'

import fg from 'fast-glob'

async function run() {
    // fix cjs exports
    const files = await fg('**/*.cjs', {
        ignore: [ 'chunk-*' ],
        absolute: true,
        cwd: resolve(fileURLToPath(import.meta.url), '../../dist'),
    })
    for (const file of files) {
        console.log('[postbuild]', basename(file))

        fsp.readFile(file, 'utf8')
        let code = await fsp.readFile(file, 'utf8')
        code = code.replace('exports.default =', 'module.exports =')
        code += 'exports.default = module.exports;'
        await fsp.writeFile(file, code)
    }
}

run()
