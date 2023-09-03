import { defineConfig } from 'tsup'

export default defineConfig({
    format: [ 'cjs', 'esm' ], // generate cjs and esm files
    entry: [ 'lib/**/*.ts' ],
    // entryPoints: [ 'lib/index.ts' ],
    clean: true, // rimraf dis
    dts: true, // generate dts file for main module
    skipNodeModulesBundle: true,
    splitting: true,
    target: 'es2020',
    noExternal: [
        // 'url-template' throws require() of ES Module
        // bundle it into the build
        'url-template',
    ],
})
