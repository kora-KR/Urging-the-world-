const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1;
const { login_userinfo } = require("../../service/loginService.js");
const { credit_headline } = require("../../service/headline.js");
const { arrears_list } = require("../../service/arrearsService.js");
const { collection } = require("../../utils/collection.js")
var app = getApp()

Page({
  data: {
    pagI: 2,
    tipi: 1,
    myTipImg: base_static + "pic_nothing1.png",
    showTip: false,
    mainShow: true,
    btnShow: false,
    flag: 1,
    loadImg: base_static + 'pic_nothing1.png'
  },
  onLoad() {
    this.setData({flag: 2})
    var that = this
    wx.getStorage({
      key: 'loginKey',
      success: function(res) {
        that.setData({ pagI: 2, mainShow: false, btnShow: true})
        var par2 = {
          data: {
            "page_no": 1
          }
        }
        arrears_list(that, par2, that.funOut)
      },
      fail() {
        console.log("请先登录哟--KORA SAY")
      }
    })
  },
  onShow() {
    var that = this
    // 判断是否有新订单
    if (app.globalData.myFresh == "fresh") {
      app.globalData.myFresh == ""
      that.setData({ pagI: 2 })
      var par2 = {
        data: {
          "page_no": 1
        }
      }
      wx.pageScrollTo({
        scrollTop: 0,
      })
      arrears_list(that, par2, that.funOut)
    }
    // 判断是否是第一次登陆
    if(this.data.flag == 2) {
      wx.getStorage({
        key: 'loginKey',
        success: function (res) {
          that.setData({flag: 1, pagI: 2, mainShow: false, btnShow: true })
          var par2 = {
            data: {
              "page_no": 1
            }
          }
          arrears_list(that, par2, that.funOut)
        },
        fail() {
          console.warn('来记录溜达溜达~')
        }
      })
    }
  },
  bindGetUserInfo(res) {
    if (res.detail.errMsg == "getUserInfo:ok") {
      console.warn('用户接受授权咯~')
      this.setData({ pagI: 2, mainShow: false, btnShow: true })
      var par2 = {
        data: {
          "page_no": 1
        }
      }
      arrears_list(this, par2, this.funOut)
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
    }
    else { console.warn('用户拒绝授权咯~') }
  },
  loadCity(longitude, latitude) {
    var page = this
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=GQth1iuraGVCimoCdqoAkKQnVWHhob5v&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success  
        console.log(res);
        var city = res.data.result.addressComponent.city;
        var pro = res.data.result.addressComponent.province
        page.setData({ city: city, pro: pro });
      },
      fail: function () {
        page.setData({ currentCity: "获取定位失败" });
      },

    })
  }, 
  funOut(res) {
    if(res.list.length) {
      for (var i = 0; i < res.list.length; i++) {
        var c = collection(res.list[i].appZtRemark)
        res.list[i].c = c
      }
      this.setData({outList: res.list, showTip: true})
    }
  },
  onReachBottom: function () {
    var that = this;
    var par = {
      data: {
        "page_no": this.data.pagI
      }
    }
    arrears_list(this, par, this.funOutAll)
    this.setData({pagI: that.data.pagI + 1})
  },
  funOutAll(res) {
    var that = this
    if (res.list.length) {
      for (var i = 0; i < res.list.length; i++) {
        var c = collection(res.list[i].appZtRemark)
        res.list[i].c = c
      }
      this.setData({ outList: that.data.outList.concat(res.list), showTip: true })
    }
  },
  onShareAppMessage: function (res) {
    return {
      title: '信用视界',
      path: '/pages/index/index'
    }
  }
})