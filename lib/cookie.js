/**
 * 添加cookie
 */
const setCookie = (name, value, day, domain) => {
  const exp = new Date();
  exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${exp.toGMTString()};path=/;domain=${domain}`;
};

/**
 * 删除 cookie
 * @param cookieName
 */
const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const getCookie = (name) => {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  return arr ? unescape(arr[2]) : false;
};

module.exports = {
  setCookie,
  deleteCookie,
  getCookie,
};
