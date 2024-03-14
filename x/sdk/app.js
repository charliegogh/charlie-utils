import wx from 'weixin-js-sdk'
import { getURLParams, setURLParams } from '../../lib/_'
class Xsdk {
  constructor() {
    this.options = {}
    this.env = ''
    this.openApp = this.openApp.bind(this)
    this.shareWx = this.shareWx.bind(this)
    this.errorCb = this.errorCb.bind(this)
    this.launchCb = this.launchCb.bind(this)
    this.initEnv()
  }

  /**
   * 1、自带浏览器：安卓、微信、ipad
   * 2、微信内部：安卓、微信
   */
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
      const isQQ = ua.indexOf('QQ') > -1
      const isPad = screenWidth >= 500 && screenWidth <= 1200
      if (isWx) {
        this.env = isAndroid ? 'Android_wx' : 'ios_wx'
      } else
      if (isQQ) {
        this.env = isAndroid ? 'Android_qq' : 'ios_qq'
      } else {
        this.env = isAndroid ? (isPad ? 'Android_pad' : 'Android') : isIOS ? (isPad ? 'ios_pad' : 'ios') : 'pad'
        // 进行阅读检测
        if (this.env.includes('pad')) {
          this.readTest()
        }
      }
    }
    console.log(this.env, 'current env')
  }

  initWXJsdk() {
    return new Promise((resolve, reject) => {
      fetch(`${location.origin}/Trilalread/Member/GetWeChatModel?url=${window.location.href}`)
        .then((res) => res.json())
        .then((res) => {
          wx.config({
            debug: this.options?.debug || false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx549fe1c34185bae9', // 必填，公众号的唯一标识
            timestamp: res.Data.Result.timeStamp, // 必填，生成签名的时间戳
            nonceStr: res.Data.Result.noncestr, // 必填，生成签名的随机串
            signature: res.Data.Result.signature, // 必填，签名，见附录1
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            openTagList: ['wx-open-launch-app']
          })
          wx.ready(function() {
            resolve()
          })
          wx.error(function(err) {
            if (err.errMsg != 'config:ok') {
              // vm.toAppBtnIsShow = false;
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

  errorCb(e) {
    this.options.error('fail')
  }

  openApp(e) {
    const env = this.env
    this.options = e
    // 微信
    if (env.includes('wx')) {
      return new Promise(() => {
        this.initWXJsdk()
          .then(() => {
            const btns = document.getElementsByClassName('wx2app-btn')
            if (btns.length === 0) return
            for (var j = 0; j < btns.length; j++) {
              btns[j].addEventListener('launch', this.launchCb)
              btns[j].addEventListener('error', this.errorCb)
            }
          })
      })
    }
    // qq
    // if (env.includes('qq')) {
    //
    // }
    // 浏览器
    console.log(env)
    if (['Android_pad', 'ios_pad', 'pad', 'Android', 'ios', 'PC'].includes(env)) {
      const el = document.getElementsByClassName('x-openApp')
      if (el.length === 0) return
      for (let j = 0; j < el.length; j++) {
        el[j].addEventListener('click', () => {
          console.log('点击事件')
          this.target(e, env)
        })
      }
    }
  }
  target(e, env) {
    const appScheme = 'psmc://'
    const appOpenTimeout = 3000
    const startTime = Date.now()
    let urlParams = getURLParams()
    urlParams = e.params ? { ...e.params, ...urlParams } : urlParams
    const targetSrc = window.location.host + '/' + e.target + setURLParams('', urlParams)
    window.location.href = appScheme + targetSrc
    const checkAppOpenInterval = setInterval(function() {
      const currentTime = Date.now()
      if ((currentTime - startTime) > appOpenTimeout) {
        clearInterval(checkAppOpenInterval)
        if (['Android_pad', 'pad', 'Android'].includes(env)) {
          window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=cnki.net.psmc'
        }
        if (['ios_pad', 'ios'].includes(env)) {
          window.location.href = 'https://itunes.apple.com/cn/app/apple-store/id1459607218'
        }
      } else {
      }
    }, 1000)
  }

  shareWx() {
    return new Promise(resolve => {
      this.initWXJsdk().then(() => {
        wx.updateAppMessageShareData({
          title: '测试微信分享',
          desc: '123333333333333333333333',
          link: 'https://x.cnki.net/web/test',
          imgUrl: 'https://x.cnki.net/web/test/logo.jpg',
          success: function(res) {
            resolve(res)
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
          that.openApp({ target: 'read' })
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
