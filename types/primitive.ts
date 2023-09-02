/**
 * Maps a given type name to the corresponding JavaScript primitive type. The type name can be provided as
 * a conventional string (e.g., 'boolean', 'number') or using its internal representation in JavaScript
 * (e.g., '[object Boolean]', '[object Number]'). It also includes mappings for primitive-like types such
 * as Date and RegExp.
 */
export type MapToPrimitiveType<T extends string> =
    // Primitive
    T extends Native<'Boolean'> | Normalized<'Boolean'> ? boolean :
        T extends Native<'Number'> | Normalized<'Number'> ? number :
            T extends Native<'BigInt'> | Normalized<'BigInt'> ? bigint :
                T extends Native<'String'> | Normalized<'String'> ? string :
                    T extends Native<'Symbol'> | Normalized<'Symbol'> ? symbol :
                        T extends Native<'Undefined'> | Normalized<'Undefined'> ? undefined :
                            T extends Native<'Null'> | Normalized<'Null'> ? null :
                                // PrimitiveLike
                                T extends Native<'Date'> | Normalized<'Date'> ? Date :
                                    T extends Native<'RegExp'> | Normalized<'RegExp'> ? RegExp :
                                        never

type PrimitiveCtr =
    | 'BigInt'
    | 'Boolean'
    | 'Null'
    | 'Number'
    | 'String'
    | 'Symbol'
    | 'Undefined'

type PrimitiveLikeCtr =
    | 'Date'
    | 'RegExp'

type Native<T extends PrimitiveCtr | PrimitiveLikeCtr | NonPrimitiveCtr> = `[object ${T}]`
type Normalized<T extends PrimitiveCtr | PrimitiveLikeCtr | NonPrimitiveCtr> = Lowercase<T>

//
// ✅ NATIVE REPRESENTATION OF PRIMITIVES
//

/**
 * Represents the internal string representation of JavaScript primitive types in the form they would be
 * returned by `Object.prototype.toString`.
 */
export type NativePrimitiveName = Native<PrimitiveCtr>

/**
 * Represents the internal string representation of JavaScript primitive types that can be represented in
 * JSON, excluding BigInt, Symbol, and Undefined.
 */
export type NativeParsablePrimitiveName = Native<Exclude<PrimitiveCtr, 'BigInt' | 'Symbol' | 'Undefined'>>

//
// ✅ NORMALIZED REPRESENTATION OF PRIMITIVES
//

/**
 * Represents the names of JavaScript primitive types as string literals.
 */
export type PrimitiveName = Normalized<PrimitiveCtr>

/**
 * 🛑 Represents the names of JavaScript primitive types as string literals.
 * @deprecated Use PrimitiveName instead.
 */
export type Primitive = PrimitiveName

/**
 * Represents the names of JavaScript primitive types as string literals that can be represented in JSON
 */
export type PrimitiveParsableName = Normalized<Exclude<PrimitiveCtr, 'BigInt' | 'Symbol' | 'Undefined'>>

/**
 * Represents the actual JavaScript primitive types.
 */
export type PrimitiveType = MapToPrimitiveType<PrimitiveName>

/**
 * Represents the actual JavaScript primitive types that can be represented in JSON.
 */
export type ParsablePrimitiveType = Exclude<PrimitiveType, bigint | symbol | undefined>

export type ParsablePropertyKey = Exclude<PropertyKey, symbol>

//
// ✅ NATIVE REPRESENTATION OF PRIMITIVE-LIKE
//

/**
 * Represents the internal string representation of JavaScript primitive-like types such as Date and RegExp.
 */
export type NativePrimitiveLikeName = Native<PrimitiveLikeCtr>

/**
 * Represents the names of JavaScript primitive-like types, such as Date and RegExp, as string literals.
 */
export type PrimitiveLikeName = Normalized<PrimitiveLikeCtr>

/**
 * 🛑 Represents the names of JavaScript primitive-like types such as Date and RegExp.
 * @deprecated Use PrimitiveLikeName instead.
 */
export type PrimitiveLike = PrimitiveLikeName

/**
 * Represents the actual JavaScript primitive-like types.
 */
export type PrimitiveLikeType = MapToPrimitiveType<PrimitiveLikeName>

//
// ✅ NATIVE REPRESENTATION OF NON-PRIMITIVE
//

type NonPrimitiveCtr =
    | 'Arguments'
    | 'Array'
    | 'ArrayBuffer'
    | 'BigInt64Array'
    | 'BigUint64Array'
    | 'Buffer'
    | 'Error'
    | 'Float32Array'
    | 'Float64Array'
    | 'Function'
    | 'GeneratorFunction'
    | 'Int16Array'
    | 'Int32Array'
    | 'Int8Array'
    | 'Map'
    | 'Object'
    | 'Promise'
    | 'Set'
    | 'Uint16Array'
    | 'Uint32Array'
    | 'Uint8Array'
    | 'Uint8ClampedArray'
    | 'WeakMap'
    | 'WeakSet'

/**
 * Represents the internal string representation of JavaScript non-primitive types. It includes various object
 * types like Array, ArrayBuffer, various Typed Arrays, and others.
 */
export type NativeNonPrimitiveName = Native<NonPrimitiveCtr>

/**
 * Represents the internal string representation of JavaScript non-primitive types that can be parsed from
 * a JSON-like structure, specifically Object and Array.
 */
export type NativeParsableNonPrimitiveName = Native<Extract<NonPrimitiveCtr, 'Object' | 'Array'>>

/**
 * Represents the names of JavaScript non-primitive types as string literals. This includes various object
 * types, typed arrays, and others.
 */
export type NonPrimitiveName = Normalized<NonPrimitiveCtr>

/**
 * 🛑 Alias for NonPrimitiveName. Represents the names of JavaScript non-primitive types as string literals.
 * @deprecated Use NonPrimitiveName instead.
 */
export type NonPrimitive = NonPrimitiveName

/**
 * Represents the names of JavaScript non-primitive types as string literals that can be represented in JSON,
 * specifically 'object' and 'array'.
 */
export type NonPrimitiveParsableName = Normalized<Extract<NonPrimitiveCtr, 'Object' | 'Array'>>

/**
 * 🛑 Type alias representing all types in JavaScript, including primitive, PrimitiveLikeName, and non-primitive types.
 * @deprecated Use AllTypesName instead.
 */
export type AllTypes = AnyTypesName

/**
 * Type alias representing all types in JavaScript, including primitive, primitive-like, and non-primitive types.
 */
export type AnyTypesName = PrimitiveName | PrimitiveLikeName | NonPrimitiveName
export type AnyParsableTypesName = PrimitiveParsableName | NonPrimitiveParsableName

/**
 * Represents the internal string representation of all JavaScript types, including primitive, primitive-like,
 * and non-primitive names.
 */
export type AnyNativeTypesName = NativePrimitiveName | NativePrimitiveLikeName | NativeNonPrimitiveName
export type AnyParsableNativeTypesName = NativeParsablePrimitiveName | NativeParsableNonPrimitiveName
