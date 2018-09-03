const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1;
const { arrears_index } = require("../../service/arrearsService.js");

Page({
  data: {
    autoplay: true,
    interval: 2000,
    intervall: 7500,
    duration: 500,
    centerStyle: "display: none",
    static_img:{
      ehader_img: base_static + "pic_dun_banner1@2x.png",
      pic_dun_newdun_url: base_static + "pic_dun_newdun.png"
    }
  },
  onLoad: function (options){
    this.getData(options);
  },
  onShow: function (options){
    this.getData(options);
  },
  getData: function (data) {
    var _this = this;
    arrears_index(_this, function (res) {
      console.log(res)
      _this.setData({
        auz: res.zxwtList,
        rec: res.zxhkList,
        more: [
          { "text": "客户服务", "src": base_static + "icon_duninfor_1@2x.png", "url": res.fwkhUrl },
          { "text": "服务案例", "src": base_static + "icon_duninfor_2@2x.png", "url": res.fwalUrl },
          { "text": "核心优势", "src": base_static + "icon_duninfor_3@2x.png", "url": res.hxysUrl },
          { "text": "服务流程", "src": base_static + "icon_duninfor_4@2x.png", "url": res.fwlcUrl }
        ]
      });
      if (res.gn_count > 0 || res.gw_count > 0) {
        _this.setData({ centerStyle: "display: block" })
      }
    });
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  handleClickOverSub() {
    wx.navigateTo({
      url: '/pages/arrearsSubmit/arrearsSubmit',
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '信用视界',
      path: '/pages/index/index?tag=arrears'
    }
  }
})