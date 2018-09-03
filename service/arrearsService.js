const { request } = require("../utils/request.js");
const config = require("../utils/config.js");
const base_static = config.static_url.static_base_v1;


// 催欠款首页
function arrears_index(_this, func) {
  var arrears_index_param = config.api_method.v1.arrears_index;
  request(arrears_index_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}
//  催欠款提交需求
function arrears_demand(_this, par, func) {
  var arrears_demand_param = config.api_method.v1.arrears_demand;
  arrears_demand_param.data = par.data;
  request(arrears_demand_param, function (data) {
    if (data.code == 0) {
      if (data.sub_code == '3019') {
        var loginRegist = _this.selectComponent("#loginRegist");
        loginRegist.setData({ is_show: "x315-isshow" });
      }
      var re_data = data.data;
      func(data);
    }
  });
}

// 催欠款列表
function arrears_list(_this, par, func) {
  var arrears_list_param = config.api_method.v1.arrears_list;
  arrears_list_param.data = par.data;
  request(arrears_list_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}

// 催欠款详细
function arrears_detail(_this, par, func) {
  var arrears_detail_param = config.api_method.v1.arrears_detail;
  arrears_detail_param.data = par.data;
  request(arrears_detail_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}

module.exports = {
  arrears_index: arrears_index,
  arrears_demand: arrears_demand,
  arrears_list: arrears_list,
  arrears_detail
}