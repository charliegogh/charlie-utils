/**
 * @param date1
 * @param date2
 * @returns {number}
 * 两日期之间相差的天数
 */
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

module.exports = {
  dayDiff
}
