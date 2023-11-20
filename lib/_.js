/**
 * 解析富文本纯文本
 */
const getRichPlainText = (richCont) => {
    let value = richCont
    if (richCont) {
        value = value.replace(/\s*/g, '') // 去掉空格
        value = value.replace(/<[^>]+>/g, '') // 去掉所有的html标记
        value = value.replace(/↵/g, '') // 去掉所有的↵符号
        value = value.replace(/[\r\n]/g, '') // 去掉回车换行
        value = value.replace(/&nbsp;/g, '') // 去掉空格
        value = convertIdeogramToNormalCharacter(value)
        return value
    } else {
        return null
    }
    function convertIdeogramToNormalCharacter(val) {
        const arrEntities = {'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"'}
        return val.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
            return arrEntities[t]
        })
    }
}

/**
 * 解析URL参数
 * @returns {{}}
 */
const getURLParams = (name) => {
    const searchPar = new URLSearchParams(window.location.search)
    const paramsObj = {}
    for (const [key, value] of searchPar.entries()) {
        paramsObj[key] = value
    }
    if (name) {
        return paramsObj[name]
    }
    return paramsObj
}

/**
 * 对象转换为url链接
 */
const setURLParams = (url, params) => {
    return url + '?' + Object.keys(params).map(i => i + '=' + params[i]).join('&')
}

/**
 * 静态删除url上的参数信息
 */
const removeURLParams = (name) => {
    const url = new URL(window.location.href)
    url.searchParams.delete(name)
    const newUrl = url.toString()
    window.history.replaceState(null, null, newUrl)
}

/**
 * 滚动到元素位置
 * @param element
 */
const smoothScroll = element => {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    })
}

/**
 * uuid
 */
const createUUID = function () {
    var d = new Date().getTime()
    if (!typeof window && window.performance && typeof window.performance.now === 'function') {
        d += performance.now() // use high-precision timer if available
    }
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
}

/**
 * 滚动到页面顶部
 */
const scrollToTop = () => {
    const height = document.documentElement.scrollTop || document.body.scrollTop
    if (height > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, height - height / 8)
    }
}

/**
 * 检查设备类型
 */
const judgeDeviceType =
    () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC'

/**
 * 复制到剪切版
 */
const copyToClipboard = (str, callback) => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const selected =
        document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
    el.select()
    const rs = document.execCommand('copy')
    document.body.removeChild(el)
    if (selected) {
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
    }
    callback(rs)
}


const getPageWidth = ()=>{
    var pageWidth;
    if (window.innerWidth) {
        // 对于大多数现代浏览器，包括IE9+
        pageWidth = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth) {
        // 对于老版本的IE（IE 8及以下）
        pageWidth = document.documentElement.clientWidth;
    } else if (document.body) {
        // 对于其他老版本的浏览器
        pageWidth = document.body.clientWidth;
    }

    console.log("页面宽度是：" + pageWidth);
}

module.exports = {
    getRichPlainText,
    getURLParams,
    setURLParams,
    removeURLParams,
    smoothScroll,
    createUUID,
    scrollToTop,
    judgeDeviceType,
    copyToClipboard,
    getPageWidth
}
