import type { Nullable } from 'types'

import { toType } from './toType';

export function length(collection: any, { includeString = false } = {}): Nullable<number> {
    try {
        // Object.keys converts string to Array
        if ((!includeString && typeof collection === 'string'))
            return null;

        if (toType(collection) !== 'object')
            return collection?.length ?? collection?.size ?? null;

        return Object.keys(collection).length;
    }
    catch {
        return null;
    }
}
