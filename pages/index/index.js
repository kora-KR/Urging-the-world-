const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1;
const { login_userinfo } = require("../../service/loginService.js");
const { credit_headline } = require("../../service/headline.js");
const boot = require("./boot/boot.js");

Page({
  data: Object.assign({
    adv: [
      { img: base_static + "icon_home_1.png", h1:"服务全球，本地化操作", h2: "服务网络遍布216个国家地区，由熟悉当地的专业人员催收，累计接单108.87亿"},
      { img: base_static + "icon_home_2.png", h1: "免费提供分析报告", h2: "利用3亿+全球企业数据，深挖债务方关联关系和财务线索，免费提供案件分析报告" },
      { img: base_static + "icon_home_3.png", h1: "不成功，不收费", h2: "根据实际催回金额按比率支付佣金，不回款不收费"}
    ],
    // 引导页
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    is_show: "x315-ishide",
    pageHeadImg: base_static + "pic_title_1.png",
    warnImg: base_static + "icon_error.png",
    headLineImg: base_static + "pic_home_news.png",
    headLineIcon: base_static + "icon_home_arrow1.png",
    relationImg: {
      oline: base_static + "icon_home_wechat.png",
      aboutUs: base_static + "icon_home_aboutme.png" 
    },
    btnImg: base_static + "icon_home_writebtn.png",
    autoplay: true,
    interval: 2000,
    duration: 500
    
  }, boot.data),
  onLoad: function (options) {
    if(options.tip == "headline") {
      wx.navigateTo({
        url: '/pages/headline/headline',
      })
    }
    if(options.tip == "headlineItem") {
      wx.navigateTo({
        url: '/pages/headlineItem/headlineItem?url=' + options.url
      })
    }
    var that = this
    var parOne = {
      "data": {
        "type": 64
      }
    }
    credit_headline(this, parOne, that.funOne)
    wx.getStorage({
      key: 'loginKey',
      success: function (res) {
        that.setData({ bootStyle: true, bootWarnStyle: true})
        if (res.errMsg == "getStorage:ok") {
          if (options.tag != undefined) {
            that.judgeLoad(options.tag, options)
          }
        }
      },
    })
    if (options.tag != undefined) {
      this.setData({tag: options.tag, shareOptions: options})
    }
  },
  onReady: function () {
    let that = this;
    setTimeout(function () {
      let is_register = wx.getStorageSync("is_register");
      if (is_register == '1') {
        that.setData({ is_show: "x315-isshow" });
      }
    }, 1000);
  },
  funOne(res) {
    // console.log(res)
    this.setData({headline: res})
  },
  // 判断登录，选择用户分享跳转方向
  judgeLoad(x, options) {
    if (x == "arrears") {wx.navigateTo({url: '/pages/arrears/arrears'})}
    else if (x == "baseNews") {
      wx.navigateTo({url: '/pages/baseNews/baseNews?id=' + options.id + '&index=' + options.index + '&name=' + options.name})
    }
    else if (x == "brief") {wx.navigateTo({url: '/pages/brief/brief?company_name=' + options.company_name + '&brief=' + options.brief})}
    else if (x == "creditLine") { wx.navigateTo({ url: '/pages/creditLine/creditLine' })}
    else if (x == "creditRating") { wx.navigateTo({ url: '/pages/creditRating/creditRating' })}
    else if (x == "dataCustomization") { wx.navigateTo({ url: '/pages/dataCustomization/dataCustomization' }) }
    else if (x == "experian") { wx.navigateTo({ url: '/pages/experian/experian' }) }
    else if (x == "financing") { wx.navigateTo({ url: '/pages/financing/financing' }) }
    else if (x == "grade") { wx.navigateTo({ url: '/pages/grade/grade?gd=' + options.gd + "&index=" + options.index + "&name=" + 
    options.name}) }
    else if (x == "more") { wx.navigateTo({ url: '/pages/more/more' }) }
    else if (x == "overseas") { wx.navigateTo({ url: '/pages/overseas/overseas' }) } 
    else if (x == "require") { wx.navigateTo({ url: '/pages/require/require' }) }
    else if (x == "search") { wx.navigateTo({ url: '/pages/search/search' }) } 
    else if (x == "searchDetail") { wx.navigateTo({ url: '/pages/searchDetail/searchDetail?id=' + options.id + "&name=" + options.name }) }
  },
  bindGetUserInfo(res) {
    if (res.detail.errMsg == "getUserInfo:ok") {
      console.warn('用户接受授权咯~')
      wx.navigateTo({
        url: '/pages/arrearsHome/arrearsHome',
      })
      var user = res.detail.userInfo
      wx.setStorage({
        key: "userInfo",
        data: {
          img: user.avatarUrl,
          name: user.nickName
        },
      })
      wx.setStorage({
        key: "loginKey",
        data: "ok",
      })
      var par = res.detail;
      var that = this;
      login_userinfo(that, par, function (data) {
        wx.removeStorageSync("is_register");
        var parOne = {
          "data": {
            "type": 64
          }
        }
        credit_headline(this, parOne, that.funOne)
      });
    }
    else {console.warn('用户拒绝授权咯~')}
  },
  handleClickProfile() {
    wx.navigateTo({
      url: '/pages/aboutUs/aboutUs'
    })
  },
  handleClickHeadLine() {
    wx.navigateTo({
      url: '/pages/headline/headline',
    })
  },
  onShareAppMessage: function (res) {
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