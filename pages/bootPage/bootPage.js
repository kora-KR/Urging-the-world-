const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1;
const { home } = require("../../service/homeService.js");

Page({
  data: {
    headImg: base_static + "pic_authorization_1.png",
    warnImg: base_static + "icon_error.png",
  }
})