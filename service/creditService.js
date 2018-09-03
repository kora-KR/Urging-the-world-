/**
 * 数据定制
 */
const { request } = require("../utils/request.js");
const config = require("../utils/config.js");
const base_static = config.static_url.static_base_v1;

// 数据定制显示
function credit_view(_this, par, func) {
  var credit_view_param = config.api_method.v1.credit_view;
  credit_view_param.data = par.data;
  request(credit_view_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}


// 数据定制提交
function credit_raiders(_this, par, func) {
  var credit_raiders_param = config.api_method.v1.credit_raiders;
  credit_raiders_param.data = par.data;
  request(credit_raiders_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}

module.exports = {
  credit_raiders: credit_raiders, 
  credit_view: credit_view
}