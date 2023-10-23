// 加载CryptoJS库
const CryptoJS = require('crypto-js')

// 定义密钥
const key = CryptoJS.enc.Utf8.parse('jy1G1MwB2vJ6Edj3P6YH+Q==')
// 加密方法
 function encryptData(data) {
 return CryptoJS.AES.encrypt(data, key, {
  mode: CryptoJS.mode.ECB, // 加密模式
  padding: CryptoJS.pad.Pkcs7 // 填充方式
 }).toString()
}
 function decryptData(ciphertext) {
 var bytes = CryptoJS.AES.decrypt(ciphertext, key, {
  mode: CryptoJS.mode.ECB, // 加密模式
  padding: CryptoJS.pad.Pkcs7 // 填充方式
 })
 return bytes.toString(CryptoJS.enc.Utf8)
}

