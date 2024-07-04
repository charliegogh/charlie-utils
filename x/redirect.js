const dataSource = {
  'ZNXZ': 'https://x.cnki.net/web/psmc/#/creation/list', // 智能创作
  'ZDZS': 'https://x.cnki.net/web/psmc-ai/' // 自动综述
}
const getURLParams = (name) => {
  const searchPar = new URLSearchParams(window.location.search)
  const paramsObj = {}
  for (const [key, value] of searchPar.entries()) {
    paramsObj[key] = value
  }
  if (name) {
    return paramsObj[name]
  }
  return paramsObj
}

const removeURLParameter = (name) => {
  const url = new URL(window.location.href)
  url.searchParams.delete(name)
  const newUrl = url.toString()
  window.history.replaceState(null, null, newUrl)
}

function getCookie(name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  return arr ? arr[2] : null
}

const redirect = () => {
  const LID = getCookie('LID')
  if (!LID) {
    return
  }
  const source = getURLParams('source')
  if (source) {
    removeURLParameter('source')
    const url = new URL(dataSource[source])
    if (url.host.split('.')[0] === 'x') {
      const domain = document.domain.split('.')[0]
      if (['192', 'xtest'].includes(domain)) {
        url.host = 'xtest.cnki.net'
      }
    }
    window.location.href = url
    return
  }
  const AI_STATUS = getCookie(`AI_STATUS`)

  if (!AI_STATUS) {
    return
  }
  if (AI_STATUS === LID + '__1' && !window.location.href.includes('192')) {
    window.location.href = '/web/psmc-ai'
  }
}
redirect()

export default redirect
