const utils = require("util.js");
const config = require("config.js");


//什么都没有的情况下是正式环境
function environment() {
  var env = wx.getStorageSync("env");
  if (utils.isNotEmpty(env)) {
    if (env == 'test') {
      //测试环境
      return config.baseApi_test;
    } else if (env == 'dev') {
      //开发环境
      return config.baseApi_dev;
    } else if (env == 'debug') {
      //调试环境
      return config.baseApi_debug;
    } else {
      return config.baseApi_prod;
    }
  } else {
    return config.baseApi_prod;
  }
}

function get_token() {
  var token = wx.getStorageSync("token");
  if (utils.isNotEmpty(token)) {
    return token;
  }
  return "";
}

const request = function (par, func, x) {
  if(!(x == 1)) {
    wx.showLoading({
      title: '努力加载中...',
    })
  }
  var param = {
    "app_id": config.app_id,
    "method": "",
    "version": '1.0',
    "data": {},
  }
  param.method = par.method;
  param.data = par.data;
  param.version = par.version;
  var url = environment();
  var token = get_token();
  console.log("获取token：" + token)
  loginInterceptor(token, param.method, param, func)
  wx.request({
    url: url,
    data: param,
    method: "POST",
    header: {
      "content-type": "application/json", // 默认值
      "authorization": token,
    },
    success: function (data) {
      if (data.data.code == '1010') {
        login(function () {
          request(param, func);
        });
      }
      func(data.data);
    },
    complete: function (data) {
      wx.hideLoading();
    }
  });
  // console.log(base_img_url)
}

// 拦截器是否登录如果没有登录调用登录接口
function loginInterceptor(token, method, param, func) {
  if (utils.isEmpty(token) && config.no_login.indexOf(method) < 0) {
    login(function () {
      request(param, func);
    });
  }
}

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
          func();
          if (data.sub_code == '3005') {
            wx.setStorageSync("is_register", "1");
          }
        }
      });
    }
  });
}

module.exports = {
  request: request
}
