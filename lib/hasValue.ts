import isNil from 'lodash-es/isNil'

export function hasValue(val) {
    return !isNil(val) && val !== ''
}
