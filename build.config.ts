import { defineBuildConfig } from 'unbuild'

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
        },
    ],
    declaration: true,
    rollup: {
        emitCJS: true,
    },
})
