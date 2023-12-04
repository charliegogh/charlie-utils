import {getRefreshToken} from './auth'
const MAX_ERROR_COUNT = 1
// 当前重发次数
let currentCount = 0
// 缓存请求队列
let queue = []
// 当前是否刷新状态
let isRefresh = false

const refreshToken = async(service, response) => {
  const logOut = () => {
    // 'logOut'
  }
  if (!isRefresh) {
    isRefresh = true
    // 如果重发次数超过，直接退出
    if (currentCount > MAX_ERROR_COUNT) {
      logOut()
      return
    }
    // 增加重试次数
    currentCount += 1
    try {
      await getRefreshToken()
      // 执行任务队列
      queue.forEach((cb) => cb())
      queue = [] // 清空队列
      return service(response.config)
    } catch (e) {
      logOut()
    } finally {
      isRefresh = false
    }
  } else {
    // 并发请求推进任务队列
    return new Promise((resolve) => {
      queue.push(() => {
        resolve(service(response.config))
      })
    })
  }
}
export default refreshToken
