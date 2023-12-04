const getCookie = (name) => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const match = document.cookie.match(reg);
    if (match) {
        return decodeURIComponent(match[2]);
    } else {
        return null;
    }
}

const setCookie = (name, value, seconds) => {
    let expires = ''
    if (seconds !== 0) {
        const date = new Date()
        date.setTime(date.getTime() + seconds * 1000)
        expires = `; expires=${date.toGMTString()}`
    }
    document.cookie = `${name}=${escape(value)}${expires}; path=/;domain='';`
}

const removeCookie = (name) => {
    setCookie(name,'', -1);
}
export {
    getCookie,
    setCookie,
    removeCookie
}
