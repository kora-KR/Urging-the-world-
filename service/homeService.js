const { request } = require("../utils/request.js");
const config = require("../utils/config.js");
const base_static = config.static_url.static_base_v1;
//首页获取数据
function home(_this, func) {
  var homeInfo_param = config.api_method.v1.homeInfo;
  request(homeInfo_param, function (data) {
    if (data.code == 0) {
      var re_data = data.data;
      // menu图片循环判断
      for (var i = 0; i < re_data.menus.length; i++) {
        if (re_data.menus[i].name == "催欠款") {
          re_data.menus[i].sort = base_static + "icon_home_1@2x.png",
            re_data.menus[i].url = "/pages/arrears/arrears"
        }
        else if (re_data.menus[i].name == "信用评估") {
          re_data.menus[i].sort = base_static + "icon_home_2@2x.png",
            re_data.menus[i].url = "/pages/creditRating/creditRating"
        }
        else if (re_data.menus[i].name == "融资信贷") {
          re_data.menus[i].sort = base_static + "icon_home_3@2x.png",
            re_data.menus[i].url = "/pages/financing/financing"
        }
        else if (re_data.menus[i].name == "数据定制") {
          re_data.menus[i].sort = base_static + "icon_home_4@2x.png"
          re_data.menus[i].url = "/pages/dataCustomization/dataCustomization"
        }
      }
      func(re_data);
    
    }
  })
}
//

module.exports = {
  home: home
}