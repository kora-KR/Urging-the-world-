//融资申请
const { request } = require("../utils/request.js");
const config = require("../utils/config.js");
const base_static = config.static_url.static_base_v1;

function financing_demand(_this,par,func){
  var financing_demand_param = config.api_method.v1.financing_demand;
  financing_demand_param.data = par.data
  request(financing_demand_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}
//融资信贷首页
function financing_index(_this, par, func){
  var financing_index_param = config.api_method.v1.financing_index;
  financing_index_param.data = par.data
  request(financing_index_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}

// 融资详细
function financing_detail(_this, func) {
  var financing_detail_param = config.api_method.v1.financing_detail;
  request(financing_detail_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}

module.exports = {
  financing_demand: financing_demand,
  financing_index: financing_index,
  financing_detail: financing_detail
}
