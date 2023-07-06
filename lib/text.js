/**
 * 替换特殊字符集合
 */
const replaceSpecialCharacters = (str, replacement = '') => {
    const specialCharRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
    return str.replace(specialCharRegex, replacement)
}
module.exports = {
    replaceSpecialCharacters
}
