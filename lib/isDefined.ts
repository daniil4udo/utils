import isNil from 'lodash-es/isNil'

export function isDefined(val: any) {
    return !isNil(val)
}
