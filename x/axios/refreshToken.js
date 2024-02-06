// 最大重发次数
const MAX_ERROR_COUNT = 3
// 当前重发次数
let currentCount = 0
// 缓存请求队列
let queue = []
// 当前是否刷新状态
let isRefresh = false

import { getRefreshToken, logOut } from './auth'

const refreshToken = async(service, response) => {
  try {
    if (!isRefresh) {
      isRefresh = true

      // 如果重发次数超过，直接退出
      if (currentCount >= MAX_ERROR_COUNT) {
        logOut()
        return
      }

      currentCount += 1
      await getRefreshToken()

      // 重新执行队列中的请求
      queue.forEach((cb) => cb())
      queue = []

      return service(response.config)
    } else {
      return new Promise((resolve) => {
        // 将请求加入队列等待刷新完成后重新执行
        queue.push(() => {
          resolve(service(response.config))
        })
      })
    }
  } catch (error) {
    // 处理刷新令牌过程中的异常
    console.error('Error while refreshing token:', error)
    logOut()
  } finally {
    isRefresh = false
  }
}

export default refreshToken
