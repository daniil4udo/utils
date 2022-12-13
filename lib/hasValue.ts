import isNil from 'lodash-es/isNil'

export function hasValue(val: any) {
    return !isNil(val) && val !== ''
}
