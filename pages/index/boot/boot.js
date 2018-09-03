const config = require("../../../utils/config.js");
const base_static = config.static_url.static_base_v1;

var bootStyle = false,
    headImg = base_static + "pic_welcom.png",
    canIUse = wx.canIUse('button.open-type.getUserInfo'),
    bootStyle = true,
    bootWarnStyle = true,
    warnImg = base_static + "icon_error.png"
    
module.exports = {
  data: {
    bootStyle,
    headImg,
    canIUse,
    bootWarnStyle,
    warnImg
  }
}