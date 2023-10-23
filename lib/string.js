/**
 * 是否为字符串
 * 1.
 * 2. new String('1') + new String('2') = '12'
 * @param str
 * @returns {boolean}
 */
const isString = (str) => {
    return 'string' === typeof str || Object.prototype.toString.call(str) === '[Object String]'
}

module.exports = {
    isString
}
