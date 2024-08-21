const getToken = (name) => {
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
const setToken = (name, value, milliseconds) => {
  let expires = ''
  if (milliseconds && milliseconds !== 0) {
    const date = new Date()
    date.setTime(date.getTime() + milliseconds)
    expires = `; expires=${date.toGMTString()}`
  }
  document.cookie = `${name}=${escape(value)}${expires}; path=/; domain=cnki.net`
}

const removeToken = (name) => {
  setToken(name, '', -1)
}
export {
  getToken,
  setToken,
  removeToken
}
