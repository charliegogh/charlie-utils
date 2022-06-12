import moment from 'moment'
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
  return moment(value).format('YYYY-MM-DD HH:mm')
}


module.exports = {
  formatDict,
  formatDateYY,
  formatDateDD,
  formatDateMM
}
