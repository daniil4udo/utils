/* eslint-disable no-await-in-loop */
import fsp from 'node:fs/promises';
import { resolve } from 'node:path';
import { basename, dirname } from 'node:path/posix';
import { fileURLToPath } from 'node:url';

import fg from 'fast-glob';
import { defineConfig } from 'tsup';
import { createLogger } from 'vite';

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
    async onSuccess() {
        const logger = createLogger();

        // Isomorphic `__dirname`
        const _dirname = typeof __dirname !== 'undefined'
            ? __dirname
            : dirname(fileURLToPath(import.meta.url));

        // All CJS files
        const files = await fg('**/*.cjs', {
            ignore: [ 'chunk-*' ],
            absolute: true,
            cwd: resolve(_dirname, './dist'),
        });

        for (const file of files) {
            logger.info(`PATCH_CJS ${basename(file)}`);

            let code = await fsp.readFile(file, 'utf8');
            code = code.replace('exports.default =', 'module.exports =');
            code += 'exports.default = module.exports;';

            await fsp.writeFile(file, code);
        }
    },
});
