/**
 * Represents an ECMAScript module with optional properties.
 *
 * @template Module - The module type.
 *
 * @interface EsModule
 * @property {boolean} [__esModule] - A flag indicating whether the module is an ECMAScript module.
 * @property {Module} [default] - The default export of the module.
 * @property {string} [Symbol.toStringTag] - A string representation of the module.
 */
interface EsModule<Module> {
    __esModule?: boolean
    default?: Module
    [Symbol.toStringTag]?: string
}

/**
 * Returns the default export if the provided module is an ECMAScript (ES) module,
 * otherwise returns the module itself.
 *
 * @template Module The type of the module's default export (for ES modules) or the module itself (for CommonJS modules).
 *
 * @function getCtor
 * @param {EsModule<Module> | Module} module - The module to check. It could either be an ES module with `__esModule` or `Symbol.toStringTag` properties or a CommonJS module.
 * @returns {Module | undefined} - The default export of the module if it's an ES module, otherwise the module itself. Returns undefined if `default` is not defined on an ES module.
 *
 * @example
 * // CommonJS module
 * const myCjsModule = { foo: "bar" };
 * getCtor(myCjsModule); // Outputs: { foo: "bar" }
 *
 * // ES module
 * const myEsModule = { __esModule: true, default: { foo: "bar" } };
 * getCtor(myEsModule); // Outputs: { foo: "bar" }
 */
export function getCtor(module: any) {
    if (module && (module.__esModule || module[Symbol.toStringTag] === 'Module'))
        return module.default

    return module
}
