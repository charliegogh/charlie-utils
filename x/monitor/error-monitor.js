const getDate = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0')
  const hours = currentDate.getHours().toString().padStart(2, '0')
  const minutes = currentDate.getMinutes().toString().padStart(2, '0')
  const seconds = currentDate.getSeconds().toString().padStart(2, '0')
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
}

class ErrorMonitor {
  constructor() {
    this.errorContainer = null
    this.errorMessages = []
    this.whitelist = ['sensors']
    this.init()
  }

  init() {
    const isIE = /Trident|MSIE/.test(navigator.userAgent)
    if (isIE) {
      return
    }
    /**
     * 监听全局错误事件
     * 弊端：重复声明会被替换，后续赋值会覆盖之前的值
     * @param message 错误信息
     * @param source 错误来源
     * @param lineno 出错行号
     * @param colno 出错列号
     * @param error 错误对象本身
     */
    window.onerror = (message, source, lineno, colno, error) => {
      const data = {
        message: '代码出错：' + message,
        source,
        lineno,
        colno,
        error
      }
      // 如果错误来源在白名单中，则忽略
      // if (this.whitelist.some(i => source.includes(i))) {
      //   return
      // }
      if (!document.querySelector('#x-header-container')) {
        this.reportError(data)
        this.errorMessages.push(data)
        this.updateErrorContainer()
      }
    }
    /**
     * 网络资源加载错误处理
     */
    window.addEventListener('error', error => {
      if (!error.message) {
        const data = {
          message: '资源加载失败',
          source: error.target.src
        }
        this.reportError(data)
        this.errorMessages.push(data)
        this.updateErrorContainer()
      }
    }, true)

    /**
     * 监听未捕获的 Promise 异常
     */
    window.addEventListener('unhandledrejection', (event) => {
      event.preventDefault()
      const reason = event.reason
      const data = {
        message: 'Promise 异步错误：' + reason.message,
        source: reason.stack
      }
      this.reportError(data)
      this.errorMessages.push(data)
      this.updateErrorContainer()
      return true
    })
  }
  reportError(error) {
    console.error('Error reported:', {
      ...error,
      date: getDate(),
      // 用户ip
      ip: ''
    })
  }

  createErrorContainer() {
    const errorContainer = document.createElement('div')
    errorContainer.classList.add('x-error-container')
    errorContainer.style.position = 'absolute'
    errorContainer.style.left = '0px'
    errorContainer.style.top = '0px'
    return errorContainer
  }

  updateErrorContainer() {
    if (!this.errorContainer) {
      this.errorContainer = this.createErrorContainer()
    }
    this.errorContainer.innerHTML = ''

    const reloadContainer = document.createElement('p')
    reloadContainer.classList.add('x-error-container__reload')
    reloadContainer.innerHTML = '抱歉，阅读内容未能正常加载，请点击 <a href="javascript:;" id="reloadAction" style="color: red">【刷新页面】</a> 重试。'
    this.errorContainer.appendChild(reloadContainer)

    this.errorMessages.forEach(error => {
      const sourceElement = document.createElement('div')
      sourceElement.classList.add('xerror-source__element')
      sourceElement.innerHTML = `<p>Error source: ${error.source}</p><p>Error message: ${error.message}</p>`
      const errorMessage = document.createElement('div')
      errorMessage.appendChild(sourceElement)
      this.errorContainer.appendChild(errorMessage)
    })
    if (!document.contains(this.errorContainer)) {
      document.body.appendChild(this.errorContainer)
    }

    const reloadAction = document.querySelector('#reloadAction')
    if (reloadAction) {
      reloadAction.addEventListener('click', () => {
        this.refreshPageWithParam()
      })
    }
  }
  refreshPageWithParam() {
    const url = new URL(window.location.href)
    url.searchParams.set('refresh', Date.now())
    window.location.replace(url.toString())
  }
}

new ErrorMonitor()
