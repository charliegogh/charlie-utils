const CryptoJS = require('crypto-js')
// 加密
function encryptData(data, _key = '2vJ6Edj3P6YH+Q==') {
    const key = CryptoJS.enc.Utf8.parse(_key)
    const jsonString = JSON.stringify(data) // Convert object to JSON string
    return CryptoJS.AES.encrypt(jsonString, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
}

// 解密
function decryptData(ciphertext, _key = '2vJ6Edj3P6YH+Q==') {
    const key = CryptoJS.enc.Utf8.parse(_key)
    const bytes = CryptoJS.AES.decrypt(ciphertext, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decryptedString)
}
module.exports = {
    encryptData,
    decryptData
}
