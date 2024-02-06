import { getToken, setToken, removeToken } from './js-cookie'
import { AppId, ecptokenApi } from './env'
const getRefreshToken = async() => {
  removeURLParameter('LID')
  const LID = getToken('LID')
  const jwtToken = getToken('jwtToken')
  if (!LID) logOut()
  if (jwtToken) return
  const clientIp = await getUserIp()
  const frs = await fetch(ecptokenApi, {
    method: 'POST',
    body: JSON.stringify({
      AppId,
      ClientId: getToken('Ecp_ClientId') || '',
      ClientIp: clientIp,
      EcpToken: LID
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
  const rs = await frs.json()
  if (rs.Success) {
    rs.clientIp = clientIp
    const { JwtToken, ExpireIn } = rs.Content
    removeToken('jwtToken')
    setToken('jwtToken', JwtToken, ExpireIn - 200)
  }
  return Promise.resolve({
    ...rs,
    LID
  })
}

const getUserIp = async() => {
  const frs = await fetch('https://recsys.cnki.net/RCDService/api/UtilityOpenApi/GetUserIP', {
    method: 'GET'
  })
  const { Data } = await frs.json()
  return Promise.resolve(Data)
}

const logOut = () => {
  window.location.href = `/search?value=backLogin&w=登录失效，请重新登录&returnUrl=${window.location.href}`
}

export const removeURLParameter = (name) => {
  const url = new URL(window.location.href)
  url.searchParams.delete(name)
  const newUrl = url.toString()
  window.history.replaceState(null, null, newUrl)
}

export { getRefreshToken, getUserIp, logOut }
