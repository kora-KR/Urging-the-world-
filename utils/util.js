const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const isNotEmpty = function (val) {
  if (val != null && val != "" && (typeof (val) != undefined) && val.length > 0) {
    return true;
  }
  return false;
}
const isEmpty = function (val) {
  return !isNotEmpty(val);
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const get_token =  function () {
  var token = wx.getStorageSync("token");
  if (utils.isNotEmpty(token)) {
    return token;
  }
  return "";
}
module.exports = {
  formatTime: formatTime,
  isEmpty: isEmpty,
  isNotEmpty: isNotEmpty,
  get_token: get_token
}
