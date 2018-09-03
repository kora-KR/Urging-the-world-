const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1

Page({
  data: {
    zzcStyle: true,
    headerImg: base_static + "pic_title_4.png",
    credientImg: base_static + "pic_aboutme_certificate.png",
    relationIcon: base_static + "icon_aboutme_tel.png",
    telImg: base_static + "icon_contactus_phon@2x.png",
    qqImg: base_static + "icon_contactus_qq@2x.png",
    emailImg: base_static + "icon_contactus_mail@2x.png",
    wxImg: base_static + "icon_contactus_wechat@2x.png",
    creditIImg: [
      { src: base_static + "pic_aboutme_certificate_1.png", txt: "信用安全等级保护证书"},
      { src: base_static + "pic_aboutme_certificate_2.png", txt: "征信业务经营备案证" },
      { src: base_static + "pic_aboutme_certificate_3.png", txt: "涉外调查许可证" },
      { src: base_static + "pic_aboutme_certificate_4.png", txt: "高新技术企业证书" },
      { src: base_static + "pic_aboutme_certificate_5.png", txt: "ACA国际商账联盟会员" },
      { src: base_static + "pic_aboutme_certificate_6.png", txt: "北京信用协会证书" },  
    ] 
  },
  handleClickRel() {
    this.setData({ zzcStyle: false })
  },
  handleClickTel() {
    wx.makePhoneCall({
      phoneNumber: "17685818206"
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
  onShareAppMessage: function () {
    return {
      title: '信用视界',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})