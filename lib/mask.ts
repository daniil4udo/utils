const maskString = (el: string) => `${el.charAt(0)}***${el.slice(-1)}`;

function maskAny(el: any) {
    if (typeof el === 'string')
        return maskString(el);

    return '***';
}

function mask(el: any): any {
    if (typeof el === 'object' && !Array.isArray(el)) {
        return Object.keys(el).reduce((prev, key) => ({
            ...prev,
            [key]: maskAny(el[key]),
        }), {});
    }

    return maskAny(el);
}

export default mask;
