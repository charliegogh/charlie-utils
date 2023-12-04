import axios from 'axios'
import { removeCookie, getCookie } from './js-cookie'
import refreshToken from './refreshToken'
import {getRefreshToken} from "./auth";
const service = axios.create({
    withCredentials: true,
})
service.interceptors.request.use(
    config  => {
        config.headers['Authorization'] = 'Bearer ' + getCookie('jwtToken')
        return config
    },
    error => {
        return Promise.reject(error)
    },
)
service.interceptors.response.use(
    async (response) => {
        let code = response.data?.errcode || response.data?.Code
        // LID 失效
        if ([5007, 5014].includes(code)) {
            removeCookie('LID','', -1);
            removeCookie('jwtToken','', -1)
            return
        }
        // token
        if ([4401].includes(code)) {
            return refreshToken(service, response)
        }
        return Promise.resolve(response)
    },
    error => {
        return Promise.reject(error)
    },
)
// post get 请求
const fetch = async (method, url, data = {}, config) => {
    config = config || {}
    config.method = method
    config.url = url
    switch (method.toLocaleLowerCase()) {
        case 'get':
            config['params'] = data
            break
        default:
            config['data'] = data
    }
    await getRefreshToken()
    return service(config).then(function(res) {
        return res.data
    })
}
const getAction = (url, data = {}, config) => {
    return fetch('get', url, data, config)
}
const postAction = (url, data = {}, config) => {
    return fetch('post', url, data, config)
}

export { getAction, postAction, service }

