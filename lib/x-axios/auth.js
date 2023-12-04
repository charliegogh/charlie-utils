import { getCookie, setCookie } from './js-cookie'
import { AppId, ecptokenApi } from './env'
const getRefreshToken = async () => {
  const LID = getCookie('LID')
  const jwtToken = getCookie('jwtToken')
  console.log(LID)
  if (!LID) {
    return Promise.resolve({
      code: 5014,
    })
  }
  if (jwtToken) return
  // jwt 业务
  const clientIp = await getUserIp()
  const frs = await fetch(ecptokenApi,{
    method: 'POST',
    body:JSON.stringify({
      AppId,
      ClientId: getCookie('Ecp_ClientId') || '',
      ClientIp: clientIp,
      EcpToken: LID,
    }),
    credentials: 'include',
  })
  const rs = await frs.json()
  if (rs.Success) {
    rs.clientIp = clientIp
    const { JwtToken, ExpireIn } = rs.Content
    setCookie('jwtToken', JwtToken, ExpireIn - 200)
  }
  return Promise.resolve({
    ...rs,
    LID,
  })
}

const getUserIp = async () => {
  const frs = await fetch('https://recsys.cnki.net/RCDService/api/UtilityOpenApi/GetUserIP',{
    method: 'GET',
    credentials: 'include',
  })
  const {Data} = await frs.json()
  return Promise.resolve(Data)
}

export { getRefreshToken, getUserIp }
