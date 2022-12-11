import { hasValue } from './hasValue'

// null -> true
// [] -> true
// [ [] ] -> true
// [ [ '', null ], [ [undefined] ] ] -> true
// [ 0 ] -> false
export const isEmptyArray = (options = []) => {
    if (options == null)
        return true

    if (Array.isArray(options)) {
        // if options === []
        if (options.length === 0)
            return true

        // As long as we cannot trues our BE
        // check all nested arrays for empty values
        // if options are [ [ '', null ] ] | [ [ '', [ '' ] ] ]
        if (options.length > 0)
            return options.filter(hasValue).every(isEmptyArray)
    }

    return false
}
