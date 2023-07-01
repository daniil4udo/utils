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
    // esbuildOptions: options => {
    //     options.footer = {
    //         // This will ensure we can continue writing this plugin
    //         // as a modern ECMA module, while still publishing this as a CommonJS
    //         // library with a default export, as that's how ESLint expects plugins to look.
    //         // @see https://github.com/evanw/esbuild/issues/1182#issuecomment-1011414271
    //         js: 'module.exports = module.exports.default;',
    //     }
    // },
})
