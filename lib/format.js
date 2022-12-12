const moment = require('moment')
// 格式化字典项
const formatDict = (value, dict = [], compareValue = 'code', getValue = 'name') => {
  const rs = dict.find(item => item[compareValue] === value)
  return rs ? rs[getValue] : ''
}
/**
 * 时间处理
 */
const formatDateDD = (value = null) => {
  return moment(value).format('YYYY-MM-DD')
}
const formatDateYY = (value = null) => {
  return moment(value).format('YYYY')
}
const formatDateMM = (value = null) => {
  return moment(value).format('YYYY-MM-DD HH:ss:mm')
}
// 手机号脱敏
const hideMobile = (mobile) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}
// 四舍五入
const toFixed = (data, fractionDigits = 2) => {
  return Number(data).toFixed(fractionDigits)
}
module.exports = {
  formatDict,
  formatDateYY,
  formatDateDD,
  formatDateMM,
  hideMobile,
  toFixed
}
