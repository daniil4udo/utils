import fsp from 'node:fs/promises'
import { URL, fileURLToPath } from 'node:url';

import * as allModules from '../dist'

const modules = Object.keys(allModules)

// remove '__esModule'
modules.shift()

const preset = ({
    '@democrance/utils/dist': modules,
})

const pathToDist = fileURLToPath(new URL('../dist', import.meta.url))
await fsp.writeFile(`${pathToDist}/autoImportUtilsPreset.json`, (JSON.stringify(preset, null, 3)))
