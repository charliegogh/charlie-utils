class ApiLog {
  constructor() {
    if (ApiLog.instance) {
      return ApiLog.instance
    }
    this.logs = []
    ApiLog.instance = this
  }

  add(e) {
    this.logs.push(e)
  }

  clear() {
    for (const i of this.logs) {
      try {
        i.cancel('取消请求')
      } catch (error) {
        console.error('Error while cancelling request:', error)
      }
    }
    this.logs.length = 0
  }
}

export default ApiLog
