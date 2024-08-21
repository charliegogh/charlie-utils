import axios from 'axios'
import { getToken } from './js-cookie'
import { logOut } from './auth'
import refreshToken from './refreshToken'
import permission from './permission'

const service = axios.create()
service.interceptors.request.use(
  config => {
    if (getToken('jwtToken')) {
      config.headers['Authorization'] = 'Bearer ' + getToken('jwtToken')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  async(response) => {
    const code = response.data?.code || response.data?.Code
    if ([5014].includes(code)) {
      logOut()
      return
    }
    if ([5013].includes(code)) {
      return refreshToken(service, response)
    }
    return Promise.resolve(response)
  },
  error => {
    return Promise.reject(error)
  }
)
const fetch = async(method, url, data = {}, config = {}) => {
  config.method = method
  config.url = url
  switch (method.toLocaleLowerCase()) {
    case 'get':
      config['params'] = data
      break
    case 'delete':
      config['params'] = data
      break
    default:
      config['data'] = data
  }
  await permission()
  return service(config).then((res) => {
    return res.data
  })
}
const getAction = (url, data = {}, config) => {
  return fetch('get', url, data, config)
}
const postAction = (url, data = {}, config) => {
  return fetch('post', url, data, config)
}
export {
  getAction,
  postAction
}
