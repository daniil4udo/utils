/// <reference types="@types/node" />
/// <reference types="vite/client" />

/// <reference types="@types/file-saver-es" />
/// <reference types="@types/proper-url-join" />
/// <reference types="@types/lodash-es" />
/// <reference types="defu" />
/// <reference types="fast-deep-equal" />
/// <reference types="file-saver-es" />
/// <reference types="perfect-debounce" />
/// <reference types="rfdc" />
/// <reference types="text-clipper" />
/// <reference types="to-fast-properties" />
/// <reference types="url-template" />
/// <reference types="sanitizer" />
/// <reference types="text-clipper" />

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type DeepWriteable<T> = { readonly [P in keyof T]: DeepWriteable<T[P]> };
type Cast<X, Y> = X extends Y ? X : Y
type FromEntries<T> = T extends [infer Key, any][]
  ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, any]>[1]}
  : { [key in string]: any }

export type FromEntriesWithReadOnly<T> = FromEntries<DeepWriteable<T>>

declare global {
    interface ObjectConstructor {
        fromEntries<T>(obj: T): FromEntriesWithReadOnly<T>
        /**
         * Returns an array of key/values of the enumerable properties of an object
         * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
         */
        entries<T>( o: T): T extends ArrayLike<infer U> ? [string, U][] : { [K in keyof T]: [K, T[K]] }[keyof T][];
        /**
         * Returns an array of values of the enumerable properties of an object
         * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
         */
        values<T>(o: T): T extends ArrayLike<infer U> ? U[] : (T[keyof T])[];
    }
}

export { }
