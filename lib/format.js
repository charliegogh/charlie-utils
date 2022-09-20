const moment = require('moment')
// 格式化字典项
const formatDict = (value, dict = [], compareValue, getValue) => {
  const data = dict.find(item => item[compareValue] === value)
  return data ? data[getValue] : ''
}
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
module.exports = {
  formatDict,
  formatDateYY,
  formatDateDD,
  formatDateMM,
  hideMobile
}
