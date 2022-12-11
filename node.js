import fs from 'node:fs'

import glob from 'fast-glob'
let exports = ''
const entries = glob
    .sync([ './*.ts' ], { cwd: `${process.cwd()}/lib/` })
    .forEach(file => exports += `export * from './${file}';`)
fs.writeFile('./lib/index.ts', JSON.stringify(exports).replace(/["]+/g, ''), (err) => {
    console.log(err)
})
