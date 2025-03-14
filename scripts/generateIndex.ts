import fsp from 'node:fs/promises';
import path from 'node:path';
import { join, parse } from 'node:path/posix';
import { fileURLToPath, URL } from 'node:url';

import fg from 'fast-glob';
import { createLogger } from 'vite';

import pckg from '../package.json';

const pathToLib = fileURLToPath(new URL(`../lib/`, import.meta.url));
const getExport = (path: string): string => `export * from './${path}'\n`;
const getDefaultExport = (name: string, path: string) => `export { default as ${name} } from './${path}'\n`;
const trimExt = (path: string) => join(parse(path).dir, parse(path).name);

export const logger = createLogger();
const cwd = fileURLToPath(new URL(`../lib/`, import.meta.url));

async function generateIndexFile(isRoot = false) {
    let exports = `// That is autogenerated file\n`;

    try {
        if (isRoot)
            exports += getDefaultExport('dmcUtilsAutoImportPreset', 'preset/autoImportUtilsPreset');

        const files = await fg('**/*.ts', {
            ignore: [
                'preset',
                'index.*',
                '**/index.*',

                // TODO: remove after find a way to us import.meta
                'detectMode.ts',
            ],
            // absolute: true,
            // objectMode: true,
            cwd,
        });

        await generateAutoImportPreset(files);

        for (const importPath of files)
            exports += getExport(trimExt(importPath));
    }
    catch (err) {
        if (err)
            logger.error(`Unable to scan directory: ${err}`);
    }

    // add Types to maintain flat structure
    exports += '\nexport * from \'./types/\'\n';

    await fsp.writeFile(`${pathToLib}/index.ts`, exports, 'utf-8');
}

async function generateAutoImportPreset(files: string[]) {
    try {
        const esModules = await Promise.all(
            files.map(moduleImportPath => import(path.resolve(cwd, moduleImportPath))),
        );

        const importPreset = files.reduce((acc, module, i) => {
            const exportNames = Object.keys(esModules[i]).filter(m => {
                if (m === 'default')
                    logger.warn(`🟡 [generateAutoImportPreset] - Default export found in ${module}`);

                return m !== 'default';
            });
            acc[`${pckg.name}/${trimExt(module)}`] = exportNames;
            return acc;
        }, {});

        // const allESModulesNames = Object.keys(allModules).filter(m => m !== '__esModule')
        // const preset = {
        //     [pckg.name]: allESModulesNames,
        // }

        const comment = '// This is autogenerated file';
        const exports = `export default ${JSON.stringify(importPreset, null, 4)} as const`;

        const pathToLib = fileURLToPath(new URL('../lib', import.meta.url));
        const mjs = `${comment}\n${exports}`;

        return fsp.writeFile(`${pathToLib}/preset/autoImportUtilsPreset.ts`, mjs, 'utf-8');
    }
    catch (err) {
        if (err)
            logger.error(`Unable to generate autoImportUtilsPreset: ${err}`);
    }
}

generateIndexFile(true);
