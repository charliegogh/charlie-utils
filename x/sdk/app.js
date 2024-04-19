import wx from 'weixin-js-sdk'
import { getURLParams, setURLParams } from '../../lib/_'
import './styles.css'
class Xsdk {
  constructor() {
    this.options = {
      target: 'read'
    }
    this.env = ''
    this.openApp = this.openApp.bind(this)
    this.shareWx = this.shareWx.bind(this)
    this.errorCb = this.errorCb.bind(this)
    this.launchCb = this.launchCb.bind(this)
    this.initEnv()
  }

  initEnv() {
    const ua = window.navigator.userAgent
    const orientation = window.orientation
    const screenWidth = window.screen.width
    if (orientation === undefined) {
      this.env = 'PC'
    } else {
      const isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
      const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      const isWx = ua.indexOf('MicroMessenger') > -1
      const isQQ = ua.indexOf('QQTheme') > -1
      const isWeiBo = ua.toLowerCase().match(/WeiBo/i) == 'weibo'
      const isPad = screenWidth >= 500 && screenWidth <= 1200
      const isYanXueApp = ua.indexOf('psmc') !== -1
      if (isWx) {
        this.env = isAndroid ? 'Android_wx' : 'ios_wx'
      } else
      if (isQQ) {
        this.env = isAndroid ? 'Android_qq' : 'ios_qq'
      } else if (isWeiBo) {
        this.env = isAndroid ? 'Android_wb' : 'ios_wb'
      } else if (isYanXueApp) {
        this.env = isAndroid ? 'Android_yx' : 'ios_yx'
      } else {
        this.env = isAndroid ? (isPad ? 'Android_pad' : 'Android') : isIOS ? (isPad ? 'ios_pad' : 'ios') : 'pad'
        if (this.env.includes('pad')) {
          this.readTest()
        }
      }
    }
    console.log('xsdk: current env ' + this.env)
  }

  initWXJsdk() {
    return new Promise((resolve, reject) => {
      const domain = document.domain.split('.')[0]
      const api = {
        xtest: 'https://xfat.cnki.net/read/litNotes/',
        x: 'https://ix.cnki.net/read/litNotes/'
      }[domain]
      fetch(`${api}getWeChatModel?url=${encodeURIComponent(window.location.href)}`)
        .then((res) => res.json())
        .then((res) => {
          wx.config({
            debug: this.options?.debug || false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx549fe1c34185bae9', // 必填，公众号的唯一标识
            timestamp: res.content.timeStamp, // 必填，生成签名的时间戳
            nonceStr: res.content.noncestr, // 必填，生成签名的随机串
            signature: res.content.signature, // 必填，签名，见附录1
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            openTagList: ['wx-open-launch-app']
          })
          wx.ready(function() {
            resolve({
              code: 0
            })
          })
          wx.error(function(err) {
            if (err.errMsg != 'config:ok') {
              // that.options.error({
              //   code: 40001,
              //   msg: 'wx sdk config error'
              // })
              resolve({
                code: 40001,
                msg: 'wx sdk config error'
              })
            }
            console.log('错误：', err, JSON.stringify(err))
          })
        })
    })
  }

  launchCb(e) {
    console.log('success', e, e.detail, JSON.stringify(e.detail))
    this.options.success('success')
  }

  errorCb() {
    this.options.error({
      code: 40002,
      msg: 'wx open app error'
    })
  }

  async openApp(e) {
    this.options = e
    const env = this.env
    const el = document.getElementsByClassName('x-openApp')
    if (el.length === 0) return

    let urlParams = getURLParams()
    urlParams = this.options.params ? { ...this.options.params, ...urlParams } : urlParams
    if (env.includes('wx')) {
      const rs = await this.initWXJsdk()
      // 初始化成功
      if (rs.code === 0) {
        const extinfo = JSON.stringify(e.extinfo || { action: 'readService', actionUrl: window.location.href })
        for (let j = 0; j < el.length; j++) {
          if (env.includes('wx')) {
            const html = `
           <wx-open-launch-app class="wx2app-btn"
                          appid="wx86fb62b7b6e1dea7"
                          extinfo=${extinfo}
                            style="position:absolute;top:0;left:0;right: 0;bottom:0;width: 100%;height: 100%;"
                          >
          <script type="text/wxtag-template">
              <span style="width:100%;height:100%;display:inline-block;position: absolute;left: 0;right: 0;bottom: 0;opacity: 0;">open app</span>
          </script>
      </wx-open-launch-app>
      `
            el[j].innerHTML += html
          }
        }
        const btns = document.getElementsByClassName('wx2app-btn')
        if (btns.length === 0) return
        for (var j = 0; j < btns.length; j++) {
          btns[j].addEventListener('launch', this.launchCb)
          btns[j].addEventListener('error', this.errorCb)
        }
      } else {
        for (let j = 0; j < el.length; j++) {
          el[j].addEventListener('click', () => {
            this.options.error(rs)
          })
        }
      }
    }
    // 自带浏览器打开
    if (['Android_pad', 'ios_pad', 'pad', 'Android', 'ios', 'Android_wb', 'ios_wb', 'Android_qq', 'ios_qq'].includes(env)) {
      for (let j = 0; j < el.length; j++) {
        el[j].addEventListener('click', () => {
          this.targetApp(urlParams)
        })
      }
    }
    if (this.options?.envCb) {
      // 环境回调
      this.options.envCb({
        env,
        params: urlParams,
        urlParams: setURLParams('', urlParams)
      })
    }
  }
  targetApp(urlParams) {
    const env = this.env
    if (env.includes('qq') || env.includes('wb')) {
      this.options.error({
        code: 40002,
        msg: env + 'open app error'
      })
      return
    }
    const appScheme = 'psmc://'
    const appOpenTimeout = 3000
    const startTime = Date.now()
    const targetSrc = window.location.host + '/' + this.options.target + setURLParams('', urlParams)
    console.log(appScheme + targetSrc + '唤起地址')
    window.location.href = appScheme + targetSrc
    const checkAppOpenInterval = setInterval(function() {
      const currentTime = Date.now()
      if ((currentTime - startTime) > appOpenTimeout) {
        clearInterval(checkAppOpenInterval)
        if (['Android_pad', 'pad', 'Android'].includes(env)) {
          window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=cnki.net.psmc'
          dialog(() => {
            window.location.href = 'market://details?id=cnki.net.psmc'
          })
        }
        if (['ios_pad', 'ios'].includes(env)) {
          window.location.href = 'https://itunes.apple.com/cn/app/apple-store/id1459607218'
        }
      }
    }, 1000)
    function dialog(cb) {
      const overlayDiv = document.createElement('div')
      overlayDiv.className = 'xsdk-overlay'
      const dialogDiv = document.createElement('div')
      dialogDiv.className = 'xsdk-dialog'
      dialogDiv.innerHTML = `
    <div class="xsdk-dialog__content">
        <div class="xsdk-dialog__message">请前往安装知网研学APP</div>
        <div class="xsdk-hairline--top xsdk-dialog__footer">
            <button type="button" class="xsdk-button xsdk-dialog__cancel">
                <div class="xsdk-button__content"><span class="xsdk-button__text">取消</span></div>
            </button>
            <button type="button" class="xsdk-button xsdk-dialog__confirm">
                <div class="xsdk-button__content"><span class="xsdk-button__text">确认</span></div>
            </button>
        </div>
    </div>
`
      document.body.appendChild(overlayDiv)
      document.body.appendChild(dialogDiv)
      document.querySelector('.xsdk-dialog__cancel').addEventListener('click', () => {
        document.querySelector('.xsdk-overlay').style.display = 'none'
        document.querySelector('.xsdk-dialog').style.display = 'none'
      })
      document.querySelector('.xsdk-dialog__confirm').addEventListener('click', () => {
        // document.querySelector('.xsdk-overlay').style.display = 'none'
        // document.querySelector('.xsdk-dialog').style.display = 'none'
        cb()
      })
    }
  }

  shareWx(e) {
    const params = {
      title: '研学微信分享测试',
      desc: '研学微信分享测试',
      link: 'https://x.cnki.net/web/test',
      imgUrl: 'https://x.cnki.net/web/test/logo.jpg',
      ...e
    }
    const cb = e.success
    return new Promise(resolve => {
      this.initWXJsdk().then(() => {
        wx.updateAppMessageShareData({
          ...params,
          success: function(res) {
            resolve(res)
            cb && cb('success')
          }
        })
      })
    })
  }

  // 阅读检测
  readTest() {
    let longPressTimer
    const that = this
    const el = document.querySelector('.ChapterContainerWrap')
    if (!el) return
    el.addEventListener('touchstart', function(event) {
      clearTimeout(longPressTimer)
      longPressTimer = setTimeout(function() {
        const targetEl = document.querySelector('.js-toolbar')
        const computedStyle = window.getComputedStyle(targetEl)
        if (computedStyle && computedStyle.display !== 'none') {
        } else {
          that.targetApp(getURLParams())
        }
      }, 500)
    })
    document.addEventListener('touchmove', function(event) {
      clearTimeout(longPressTimer)
    })
    document.addEventListener('touchend', function(event) {
      clearTimeout(longPressTimer)
    })
  }
}

const XSDk = new Xsdk()
const openApp = XSDk.openApp
const shareWx = XSDk.shareWx
export {
  openApp,
  shareWx
}
