/* eslint-disable */
const CryptoJS = require("crypto-js"); // 引用AES源码js

const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); // 十六位十六进制数作为秘钥
const iv = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"); // 十六位十六进制数作为秘钥偏移量

// 解密方法
function Decrypt(word) {
  // let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  // let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  let srcs = word.toString();
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
  // return decryptedStr
}
// 加密方法
function Encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

export default {
  Decrypt,
  Encrypt
};
/* eslint-disable */
