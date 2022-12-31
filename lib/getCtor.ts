/**
 *
 * Gets Module from an import under "default" key
 *
 * @param module
 *
 * @returns
 *
 */
export function getCtor(module: any) {
    if (module && (module.__esModule || module[Symbol.toStringTag] === 'Module'))
        return module.default

    return module
}
