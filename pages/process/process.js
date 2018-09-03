const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1;

Page({
  data: {
    headerImg: base_static + "pic_title_3.png",
    processItem: [
      { img: base_static + "icon_order_1.png", txt: "提交催款需求"},
      { img: base_static + "icon_order_2.png", txt: "专业顾问一对一沟通,案件评估" },
      { img: base_static + "icon_order_3.png", txt: "案件受理，正式委托" },
      { img: base_static + "icon_order_4.png", txt: "催收执行" },
      { img: base_static + "icon_order_5.png", txt: "收回欠款，案件关闭" },
    ],
    bgInt: base_static + "icon_order_line.png"
  },
  onShareAppMessage: function () {
    return {
      title: '催全球-服务流程',
      path: '/pages/process/process',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})