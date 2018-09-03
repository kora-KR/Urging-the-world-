/**
 * 企业
 */
const { request } = require("../utils/request.js");
const config = require("../utils/config.js");
const base_static = config.static_url.static_base_v1;

/**
 * 企业详细
 */
function enterprise_detial(_this, par, func) {
  var enterprise_detail_param = config.api_method.v1.enterprise_detail;
  enterprise_detail_param.data.id = par.id;
  request(enterprise_detail_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}
/**
 * 企业搜索
 */
function enterprise_search(_this, par, func) {
  var enterprise_search_param = config.api_method.v1.enterprise_search;
  enterprise_search_param.data = par.data
  request(enterprise_search_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}
/**
 * 股东-股东,董监局
 */
function enterprise_stockholder(_this, par, func) {
  var enterprise_stockholder_param = config.api_method.v1.enterprise_stockholder;
  enterprise_stockholder_param.data = par.data
  request(enterprise_stockholder_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}
/**
 * 企业背景
 */
function enterprise_cb(_this, par, func) {
  var enterprise_cb_param = config.api_method.v1.enterprise_cb;
  enterprise_cb_param.data = par.data
  request(enterprise_cb_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}
/**
 * 企业模块icon 详细
 */
function enterprise_moduledetail(_this, par, func) {
  var enterprise_moduledetail_param = config.api_method.v1.enterprise_moduledetail;
  enterprise_moduledetail_param.data = par.data
  request(enterprise_moduledetail_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  }, 1);
}

// 企业因素加载
function enterprise_factor(_this, par, func) {
  var enterprise_factor_param = config.api_method.v1.enterprise_factor;
  enterprise_factor_param.data = par.data
  request(enterprise_factor_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  }, 1);
}

/**
 *  批量获取评分评级
 */
function enterprise_collectionofinformation_batchratingrating(_this, par, func) {
  var enterprise_collectionofinformation_batchratingrating_param = config.api_method.v1.enterprise_collectionofinformation_batchratingrating;
  enterprise_collectionofinformation_batchratingrating_param.data = par.data
  request(enterprise_collectionofinformation_batchratingrating_param, function (data) {
    console.log(data);
    var re_data = data.data;
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    } else {
      if (data.sub_code == "3011") {
        _this.setData({ tipPage: "display: block", tipText: "请输入正确手机格式", loadingTip: false })
      } else if (data.sub_code == "3013") {
        _this.setData({ tipPage: "display: block", tipText: "请输入正确邮箱格式", loadingTip: false })
      } else if (data.sub_code == "3019"){
        _this.setData({ moreRequestPage: "display: block", loadingTip: false })
      }
    }
  });
}
module.exports = {
  enterprise_detial,
  enterprise_search,
  enterprise_stockholder,
  enterprise_cb,
  enterprise_moduledetail,
  enterprise_collectionofinformation_batchratingrating,
  enterprise_factor
}