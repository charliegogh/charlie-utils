/**
 * 解析富文本纯文本 1011
 */

// 获取富文本的纯文字内容x
const getPlainText = (richCont) => {
  let value = richCont
  if (richCont) {
    // 方法一：
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
  // 转意符换成普通字符
  function convertIdeogramToNormalCharacter(val) {
    const arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' }
    return val.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(all, t) { return arrEntities[t] })
  }
}

/**
 * 解析URL参数
 * @returns {{}}
 */
const getSearchParams = () => {
  const searchPar = new URLSearchParams(window.location.search)
  const paramsObj = {}
  for (const [key, value] of searchPar.entries()) {
    paramsObj[key] = value
  }
  return paramsObj
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
const createUUID = function() {
  var d = new Date().getTime()
  if (!typeof window && window.performance && typeof window.performance.now === 'function') {
    d += performance.now() // use high-precision timer if available
  }
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
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
module.exports = {
  getPlainText,
  getSearchParams,
  smoothScroll,
  createUUID,
  scrollToTop,
  judgeDeviceType
}
