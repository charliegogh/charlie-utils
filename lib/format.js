// 格式化字典项
const formatDict = (value, dict = [], compareValue = 'code', getValue = 'name') => {
  const rs = dict.find(item => item[compareValue] === value)
  return rs ? rs[getValue] : ''
}

// toFixed 转换
const toFixed = (data, fractionDigits = 2) => {
  return Number(data).toFixed(fractionDigits)
}
module.exports = {
  formatDict,
  toFixed
}
