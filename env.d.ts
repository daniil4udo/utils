export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type DeepWriteable<T> = { readonly [P in keyof T]: DeepWriteable<T[P]> };
type Cast<X, Y> = X extends Y ? X : Y
type FromEntries<T> = T extends [infer Key, any][]
    ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, any]>[1] }
    : { [key in string]: any }

export type FromEntriesWithReadOnly<T> = FromEntries<DeepWriteable<T>>

// Keys

type IsAny<T> = 0 extends 1 & T ? true : T;
type KnownKeys<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K];
}
type IsEmptyObject<T extends Record<PropertyKey, unknown>> = [keyof T] extends [never]
    ? true
    : false;

type ObjectKeys<T> = IsAny<T> extends true
    ? string[]
    : T extends Record<PropertyKey, unknown>
        ? IsEmptyObject<KnownKeys<T>> extends true
            ? string[]
            : (keyof KnownKeys<T>)[]
        : T extends number
            ? []
            : T extends Array<any> | string
                ? string[]
                : never;


declare global {
    interface ObjectConstructor {
        keys<T>(o: T): ObjectKeys<T>;

        fromEntries<T>(obj: T): FromEntriesWithReadOnly<T>
        /**
         * Returns an array of key/values of the enumerable properties of an object
         * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
         */
        entries<T>(o: T): T extends ArrayLike<infer U> ? [string, U][] : { [K in keyof T]: [K, T[K]] }[keyof T][];
        /**
         * Returns an array of values of the enumerable properties of an object
         * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
         */
        values<T>(o: T): T extends ArrayLike<infer U> ? U[] : (T[keyof T])[];
    }
}

export { }
