const domain = document.domain.split('.')[0]
const AppId = {
  xtest: 'CRSP_MEMBER_RELEASE',
  192: 'CRSP_MEMBER_RELEASE',
  local: 'CRSP_MEMBER_RELEASE',
  x: 'CRSP_MEMBER',
}[domain]

const ecptokenApi = {
  xtest: 'https://xtest.cnki.net/api/api/JwtToken/ecptoken',
  192: '/api/api/JwtToken/ecptoken',
  local: '/api/api/JwtToken/ecptoken',
  x: 'https://gateway.cnki.net/aamsapi/api/JwtToken/ecptoken',
}[domain]

export { AppId, ecptokenApi }
