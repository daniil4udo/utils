/**
 * Interface for an ECMAScript module with optional properties.
 *
 * @template Module - The type of the module.
 *
 * @property {boolean} __esModule - A flag indicating whether the module is an ECMAScript module.
 * @property {Module} default - The default export of the module.
 */
interface EsModule<Module> {
    __esModule: boolean
    default: Module

    /**
     * A string representation of the module.
     *
     * @type {string}
     */
    [Symbol.toStringTag]: string
}

type MaybeEsModule<Module> = Partial<EsModule<Module>>;

/**
 * @template Module - The type of the module.
 * @param {MaybeEsModule<Module>} module - The module to check.
 * @returns {boolean} True if the module is an ES module, otherwise false.
 */
function isEsModule<Module>(module: MaybeEsModule<Module>): module is EsModule<Module> {
    return module != null
        && typeof module === 'object'
        && ('__esModule' in module || module[Symbol.toStringTag] === 'Module');
}

/**
 * Returns the default export if the provided module is an ECMAScript (ES) module,
 * otherwise returns the module itself.
 *
 * The function is designed to normalize the way of getting module's exports regardless of
 * the format of the module (CommonJS or ES Module).
 *
 * If the `module` argument does not follow the structure of an ECMAScript module (i.e.,
 * it does not have `__esModule` or `Symbol.toStringTag` properties), the function treats
 * the `module` as a CommonJS module and returns it as is.
 *
 * @remarks
 * This function is part of the {@link https://github.com/daniil4udo/utils | @democrance/utils} library.
 *
 * @template Module - The type of the module's default export (for ES modules) or the
 * module itself (for CommonJS modules).
 *
 * @param {MaybeEsModule<Module>} module - The module to check. It could either be an ES module with `__esModule`
 * or `Symbol.toStringTag` properties or a CommonJS module.
 * @returns {Module | Partial<EsModule<Module>>} The default export of the module if it's an ES module, otherwise the module
 * itself. Returns `undefined` if `default` is not defined on an ES module.
 *
 * @example
 * ```ts
 * import { getCtor } from '@democrance/utils';
 *
 * // CommonJS module
 * const myCjsModule = { foo: "bar" };
 * console.log(getCtor(myCjsModule)); // { foo: "bar" }
 *
 * // ES module
 * const myEsModule = { __esModule: true, default: { foo: "bar" } };
 * console.log(getCtor(myEsModule)); // { foo: "bar" }
 * ```
 * @public
 */
export function getCtor<Module>(module: MaybeEsModule<Module>): Module | Partial<EsModule<Module>> {
    if (isEsModule(module))
        return module.default;

    return module;
}
