import { toType } from './toType';

export function isPlainObject<T extends Record<PropertyKey, any>>(input: unknown): input is T {
    if (input == null || toType(input) !== 'object')
        return false;

    const proto = Object.getPrototypeOf(input);
    return proto === null || proto === Object.prototype;
}
