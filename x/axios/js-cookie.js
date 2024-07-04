const getCookie = (name) => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const match = document.cookie.match(reg)
  if (match) {
    return decodeURIComponent(match[2])
  } else {
    return null
  }
}

/**
 * @param name
 * @param value
 * @param date 以天为单位
 */
const setCookie = (name, value, days) => {
  let expires = ''
  const isLID = name.indexOf('LID') !== -1
  if (days !== 0) {
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = `; expires=${date.toGMTString()}`
  }
  document.cookie = `${name}=${escape(value)}${expires}; path=/; domain=${isLID ? 'cnki.net' : ''}`
}

const removeCookie = (name) => {
  setCookie(name, '', -1)
}
export {
  getCookie,
  setCookie,
  removeCookie
}
