const { request } = require("../utils/request.js");
const config = require("../utils/config.js");
//处理登录信息
function login(func) {
  //登录
  wx.login({
    success(res) {
      var login_param = config.api_method.v1.login;
      login_param.data.app_id = config.wechat_app_id;
      login_param.data.code = res.code;
      //发起登录
      request(login_param, function (data) {
        if (data.code == 0) {
          wx.setStorageSync("token", data.data.token);
          if (data.sub_code == '3005') {
            wx.setStorageSync("is_register", "1");
          }
        }
      });
    }
  });
}

function login_userinfo(_this, par, func) {
  var user_info = config.api_method.v1.getUserInfo;
  user_info.data.raw_data = par.rawData;
  user_info.data.signature = par.signature;
  user_info.data.iv = par.iv;
  user_info.data.encrypted_Data = par.encryptedData;

  request(user_info, function (data) {
    func(data);
  });
}
module.exports = {
  login: login,
  login_userinfo: login_userinfo
}