
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
    // 监听全局错误事件
    window.onerror = (message, source, lineno, colno, error) => {
      const data = {
        message,
        source,
        lineno,
        colno,
        error
      }
      // 如果错误来源在白名单中，则忽略
      if (this.whitelist.some(i => source.includes(i))) {
        return
      }
      if (!document.querySelector('#x-header-container')) {
        this.reportError(error)
        this.errorMessages.push(data)
        this.updateErrorContainer()
      }
    }
    // 监听未捕获的 Promise 异常
    window.addEventListener('unhandledrejection', (event) => {
    })
  }
  reportError(error) {
    console.error('Error reported:', error)
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
      sourceElement.classList.add('source-element')
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
