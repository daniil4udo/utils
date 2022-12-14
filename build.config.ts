import { defineBuildConfig } from 'unbuild'

import pkg from './package.json'

export default defineBuildConfig({
    name: 'utils',
    entries: [
        // default
        'lib/index',
        // mkdist builder transpiles file-to-file keeping original sources structure
        {
            builder: 'mkdist',
            input: 'lib',
            outDir: 'dist',
            format: 'esm',
        },
        {
            builder: 'mkdist',
            input: 'lib',
            outDir: 'dist',
            format: 'cjs',
            ext: 'cjs',
        },
    ],
    declaration: true,
    externals: [
        ...Object.keys(pkg.dependencies),
    ],
    rollup: {
        emitCJS: true,
    },
})
