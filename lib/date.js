const moment = require('moment')
/**
 * @param date1
 * @param date2
 * @returns {number}
 * 两日期之间相差的天数
 */
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
/**
 * 获取当前时间 2023-11-07 11:23:36
 * @returns {string}
 */
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
const formatDateDD = (value = null) => {
  return moment(value).format('YYYY-MM-DD')
}
const formatDateYY = (value = null) => {
  return moment(value).format('YYYY')
}
const formatDateMM = (value = null) => {
  return moment(value).format('YYYY-MM-DD HH:ss:mm')
}

module.exports = {
  dayDiff,
  getDate,
  formatDateDD,
  formatDateYY,
  formatDateMM
}

