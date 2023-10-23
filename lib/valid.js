/**
 * @param value
 * @returns {boolean}
 * 校验手机号
 */
const validTel = (value) => {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(value)
}

/**
 * @param value
 * @returns {boolean}
 * 8-16位数字字母组合密码
 */
const validPassword = (value) => {
  const reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{8,16}$/
  return reg.test(value)
}

/**
 * @param path
 * @returns {boolean}
 * 是否为外部链接
 */
const validExternal = (value) => {
  return /^(https?:|mailto:|tel:)/.test(value)
}

/**
 * @param email
 * @returns {boolean}
 */
const validEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * @returns {boolean}
 * 汉字、字母、数字、下划线、短横线、括号、书名号
 */
const validFileName = (fileName) => {
  return /^[a-zA-Z0-9_()-（）《》\u4e00-\u9fa5]+$/.test(fileName.split('.')[0])
}

/**
 * @returns {boolean}
 * 校验身份证号码
 */
const validCardNo = (value) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(value)
}

module.exports = {
  validTel,
  validPassword,
  validEmail,
  validFileName,
  validCardNo,
  validExternal
}
