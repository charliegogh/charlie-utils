/* 校验手机号 */
export function validTel (value) {
    const reg = /^1[3456789]\d{9}$/
    return reg.test(value)
}
/* 8-16位数字字母组合密码 */
export function validPassword(value){
    const reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{8,16}$/
    return reg.test(value)
}
// 是否为外部链接
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}
