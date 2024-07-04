function getCookie(name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  return arr ? arr[2] : null
}

// 璁剧疆Cookie
function setCookie(name, value, days, domain) {
  const exp = new Date()
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
  const cookieString = `${name}=${value};expires=${exp.toGMTString()};domain=${domain};path=/`
  document.cookie = cookieString
}

function initAdCookies() {
  const adValue = getCookie('LID')
  const oldAdValue = getCookie('X_LID_LAST')

  if (!oldAdValue) {
    setCookie('X_LID_LAST', adValue, 1, '')
  } else if (adValue && adValue !== oldAdValue) {
    setCookie('jwtToken', '', -1, '.cnki.net')
    setCookie('X_LID_LAST', adValue, 1, '')
  } else if (!adValue) {
    setCookie('X_LID_LAST', '', -1, '')
    setCookie('jwtToken', '', -1, '.cnki.net')
  }
}

initAdCookies()
