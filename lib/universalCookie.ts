import Cookies from 'universal-cookie'

const { addChangeListener, get, getAll, remove, removeChangeListener, set } = new Cookies()

export function isCookiesEnabled() {
    try {
        if (typeof window !== 'undefined')
            return navigator.cookieEnabled

        return null
    }
    catch {
        return false
    }
}

export {
    addChangeListener,
    get,
    get as getCookie,
    getAll,
    remove,
    remove as removeCookie,
    removeChangeListener,
    set,
    set as setCookie,
}
