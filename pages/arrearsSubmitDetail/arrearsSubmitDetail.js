const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1;
const { home } = require("../../service/homeService.js");
const { arrears_detail } = require("../../service/arrearsService.js");
const { delState } = require("../../utils/delState.js")
var app = getApp()

Page({
  data: {
    zzcStyle: true,
    telImg: base_static + "icon_contactus_phon@2x.png",
    qqImg: base_static + "icon_contactus_qq@2x.png",
    emailImg: base_static + "icon_contactus_mail@2x.png",
    wxImg: base_static + "icon_contactus_wechat@2x.png",
  },
  onLoad(options) {
    app.globalData.myFresh = "no_fresh"
    var par = {
      data: {
        "id": options.id
      }
    }
    arrears_detail(this, par, this.fun)
  },
  fun(res) {
    console.log(res)
    var c = delState(res.ztmc)
    var ajzt
    if (res.ajzt == 1) {ajzt = "未起诉"}
    else if (res.ajzt == 2) { ajzt = "已起诉" }
    else if (res.ajzt == 3) { ajzt = "法院执行中" }

    var qkfzt = res.qkfzt.split(",")
    var qkfztAll = " "
    for(let i = 0;i<qkfzt.length;i++) {
      if(qkfzt[i] == "1"){qkfzt[i] = "对方正常营业"}
      else if (qkfzt[i] == "2") { qkfzt[i] = " 对方承认欠款" }
      else if (qkfzt[i] == "3") { qkfzt[i] = " 欠款有纠纷" }
      else if (qkfzt[i] == "4") { qkfzt[i] = " 无法联系上" }
      else if (qkfzt[i] == "5") { qkfzt[i] = " 已倒闭破产" }
      qkfztAll += qkfzt[i]
    }
    if (res.tqsj == 1) { this.setData({ tqTime: "1年内"})}
    else if (res.tqsj == 2) { this.setData({ tqTime: "1-2年内" }) }
    else if (res.tqsj == 3) { this.setData({ tqTime: "2-3年内" }) }
    else if (res.tqsj == 4) { this.setData({ tqTime: "3年以上" }) }

    this.setData({ c: c, myName: res.wfmc, qkName: res.orgmc, coin: res.qkje, state: ajzt, qkState: qkfztAll, subDate: res.cjsj, proState: res.ztmc, gj: res.gj})
  },
  handleClickRel() {
    this.setData({ zzcStyle: false })
  },
  handleClickTel() {
    wx.makePhoneCall({
      phoneNumber: "17685818206"
    })
  },
  handleClickQq() {
    wx.setClipboardData({
      data: '2661175955',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
          }
        })
      }
    })
  },
  handleClickWx() {
    wx.setClipboardData({
      data: 'Daisy06181',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
          }
        })
      }
    })
  },
  handkeClickEmail() {
    wx.setClipboardData({
      data: 'candice@gladtrust.com',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
          }
        })
      }
    })
  },
  handleClickZzc() {
    this.setData({ zzcStyle: true })
  },
  onShareAppMessage: function (res) {
    return {
      title: '信用视界',
      path: '/pages/index/index'
    }
  }
})