/* eslint-disable no-await-in-loop */
import fsp from 'node:fs/promises';
import { resolve } from 'node:path';
import { basename, dirname } from 'node:path/posix';
import { fileURLToPath } from 'node:url';

import fg from 'fast-glob';
import { defineConfig } from 'tsup';
import { createLogger } from 'vite';

export default defineConfig({
    format: [ 'esm' ], // generate esm files
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
});
