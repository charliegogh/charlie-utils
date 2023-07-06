// 加载CryptoJS库
var CryptoJS = require('crypto-js')

// 定义密钥
var key = 'test'

// 加密方法
 function encryptData(data) {
  return CryptoJS.AES.encrypt(data, key).toString()
}
// 解密方法
 function decryptData(ciphertext) {
  var bytes = CryptoJS.AES.decrypt(ciphertext, key)
  return bytes.toString(CryptoJS.enc.Utf8)
}

var originalData = 'Hello, World!'
var encryptedData = encryptData(originalData)
console.log('Encrypted Data:', encryptedData)

var decryptedData = decryptData(encryptedData)
console.log('Decrypted Data:', decryptedData)
