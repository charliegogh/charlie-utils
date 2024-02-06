/**
 * 是否为字符串
 * 1.
 * 2. new String('1') + new String('2') = '12'
 * @param str
 * @returns {boolean}
 */
const isString = (str) => {
  return typeof str === 'string' || Object.prototype.toString.call(str) === '[Object String]'
}

/**
 * 替换特殊字符集合
 */
const replaceSpecialCharacters = (str, replacement = '') => {
  const specialCharRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
  return str.replace(specialCharRegex, replacement)
}
module.exports = {
  isString,
  replaceSpecialCharacters
}
