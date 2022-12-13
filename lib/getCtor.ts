export function getCtor(comp: any) {
    if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module'))
        return comp.default

    return comp
}
