import { getToken, setToken, removeToken } from './js-cookie'
import { AppId, ecptokenApi, env } from './env'
const getRefreshToken = async() => {
  const LID = getToken('LID')
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
  try {
    const cache = getToken('yxIP')
    if ((cache ?? '') === '') {
      const frs = await fetch('https://recsys.cnki.net/RCDService/api/UtilityOpenApi/GetUserIP', {
        method: 'GET'
      })
      const { Data } = await frs.json()
      setToken(Data, 'yxIP')
      return Promise.resolve(Data)
    }
    return Promise.resolve(cache)
  } catch (e) {

  }
}

const logOut = () => {
  if (env === 'x') {
    window.location.href = 'https://gateway.cnki.net/aamsapi/credential/logout?appid=CRSP_BASIC_PSMC'
  }
  if (env === 'xtest') {
    window.location.href = 'https://xtest.cnki.net/api/credential/logout?appid=CRSP_PSMC_RELEASE'
  }
}

// 链接上的token信息
export const removeURLParameter = (name) => {
  const url = new URL(window.location.href)
  url.searchParams.delete(name)
  const newUrl = url.toString()
  window.history.replaceState(null, null, newUrl)
}

export { getRefreshToken, getUserIp, logOut }
