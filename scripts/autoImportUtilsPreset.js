import fsp from 'node:fs/promises'
import { URL, fileURLToPath } from 'node:url'

import * as allModules from '../dist'

const modules = Object.keys(allModules)

// remove '__esModule'
modules.shift()

const preset = ({
    '@democrance/utils': modules,
})

const pathToDist = fileURLToPath(new URL('../dist', import.meta.url))

const mjs = `export default ${JSON.stringify(preset, null, 3)}`
const cjs = `module.exports = ${JSON.stringify(preset, null, 3)}`

await fsp.writeFile(`${pathToDist}/autoImportUtilsPreset.mjs`, mjs, 'utf-8')
await fsp.writeFile(`${pathToDist}/autoImportUtilsPreset.cjs`, cjs, 'utf-8')
