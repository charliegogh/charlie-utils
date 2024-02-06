import wx from 'weixin-js-sdk'

class WechatJdk {
    constructor() {
        this.openApp = this.openApp.bind(this)
        this.shareWx = this.shareWx.bind(this)
        this.errorCb = this.errorCb.bind(this);
        this.launchCb = this.launchCb.bind(this);
        this.options = {}
    }

    init() {
        return new Promise((resolve, reject) => {
            fetch(`${location.origin}/Trilalread/Member/GetWeChatModel?url=${window.location.href}`)
                .then((res) => res.json())
                .then((res) => {
                    wx.config({
                        debug:  false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: 'wx549fe1c34185bae9', // 必填，公众号的唯一标识
                        timestamp: res.Data.Result.timeStamp, // 必填，生成签名的时间戳
                        nonceStr: res.Data.Result.noncestr, // 必填，生成签名的随机串
                        signature: res.Data.Result.signature, // 必填，签名，见附录1
                        jsApiList: ['updateAppMessageShareData','updateTimelineShareData'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        openTagList: ['wx-open-launch-app']
                    })
                    wx.ready(function () {
                        resolve()
                    })
                    wx.error(function (err) {
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
    }

    errorCb(e) {
        this.options.error('fail')
    }

    openApp(e) {
        this.options = e
        return new Promise(() => {
            this.init()
                .then(() => {
                    let btns = document.getElementsByClassName('wx2app-btn');
                    console.log(btns)
                    if (btns.length === 0) return
                    for (var j = 0; j < btns.length; j++) {
                        btns[j].addEventListener('launch', this.launchCb);
                        btns[j].addEventListener('error', this.errorCb);
                    }
                })
        })
    }
    shareWx() {
        return new Promise(resolve => {
            this.init().then(() => {
                wx.updateAppMessageShareData({
                    title: '测试微信分享',
                    desc: '123333333333333333333333',
                    link: 'https://x.cnki.net/web/test',
                    imgUrl: 'https://x.cnki.net/web/test/logo.jpg',
                    success: function (res) {
                        console.log(res)
                        resolve(res)
                    },
                })
            })
        })
    }
}

const JDK = new WechatJdk()
const openApp = JDK.openApp
const shareWx = JDK.shareWx
export {
    openApp,
    shareWx
}
