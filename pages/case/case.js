const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1;
const { home } = require("../../service/homeService.js");
const { login_userinfo } = require("../../service/loginService.js");
const { isNotEmpty } = require("../../utils/util.js");

Page({
  data: {
    headerImg: base_static + "pic_title_2.png",
    caseIcon: base_static + "icon_home_arrow1.png",
    caseItem: [
      { img: base_static + "icon_example_1.png", h1: "1: 意大利案件", h2: "随时掌控国外客户经营动态，减少坏账风险！", url: "/pages/caseItem/caseItem?url=" + "https://resource.so315.cn/smarprogram/html/page/v1/Italian_case.html"},
      { img: base_static + "icon_example_2.png", h1: "2: 葡萄牙案件", h2: "这样的国外客户，你还敢货到付款？", url: "/pages/caseItem/caseItem?url=" + "https://resource.so315.cn/smarprogram/html/page/v1/portugal_case.html" },
      { img: base_static + "icon_example_3.png", h1: "3: 摩洛哥案件", h2: "谨慎选择付款方式，从源头上杜绝海外欠款！", url: "/pages/caseItem/caseItem?url=" + "https://resource.so315.cn/smarprogram/html/page/v1/morocco_case.html" },
      { img: base_static + "icon_example_4.png", h1: "4: 马来西亚案件", h2: "海外欠款自行催讨难度大！及时委托专业机构！", url: "/pages/caseItem/caseItem?url=" + "https://resource.so315.cn/smarprogram/html/page/v1/malaysia_case.html" },
      { img: base_static + "icon_example_5.png", h1: "5: 加拿大案件", h2: "海外客户失联，欠款怎么办？", url: "/pages/caseItem/caseItem?url=" + "https://resource.so315.cn/smarprogram/html/page/v1/canadian_case.html" },
      { img: base_static + "icon_example_6.png", h1: "6: 瑞典案件", h2: "海外客户濒临破产，你还发货？", url: "/pages/caseItem/caseItem?url=" + "https://resource.so315.cn/smarprogram/html/page/v1/swedish_case.html" },
    ]
  },
  onLoad(options) {
    if(options.url) {
      wx.navigateTo({
        url: '/pages/caseItem/caseItem?url=' + options.url,
      })
    }
  },
  onShareAppMessage: function () {
    return {
      title: '催全球-服务案例',
      path: '/pages/case/case',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})