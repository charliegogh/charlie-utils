import { getCookie } from '../../lib/cookie'
import { getURLParams } from '../../lib/_'

const Ecp_LoginStuts = getCookie('Ecp_LoginStuts')
const LID = getCookie('LID')
if (Ecp_LoginStuts && LID) {
  const _ = Ecp_LoginStuts.replace(/:([^"'\s]+)([},])/g, ':"$1"$2')
  let status
  try {
    status = JSON.parse(_)
  } catch (e) {
    status = JSON.parse(_)
  }
  if (status?.UserType === 'bk') {
    const params = getURLParams()
    const fromUrl = params?.fromUrl || 'https://cnki.net/'
    const targetUrl = 'https://x.cnki.net/web/psmc/ecp_error.html'
    const url = new URL(targetUrl)
    if (url.host.split('.')[0] === 'x') {
      const domain = document.domain.split('.')[0]
      if (['192', 'xtest'].includes(domain)) {
        url.host = 'xtest.cnki.net'
      }
    }
    window.location.href = url + `?fromUrl=${fromUrl}`
  }
}
