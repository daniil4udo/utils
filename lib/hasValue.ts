export function isNil(val: any) {
    return val == null
}

export function isDefined(val: any) {
    return !isNil(val)
}

export function hasValue(val: any) {
    return !isNil(val) && val !== ''
}
