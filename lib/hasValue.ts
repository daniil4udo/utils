export function isNil(val: any) {
    return val == null
}

export function hasValue(val: any) {
    return !isNil(val) && val !== ''
}
