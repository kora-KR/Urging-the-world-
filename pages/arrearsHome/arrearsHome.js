const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1;
const utils = require("../../utils/util.js");
const { arrears_demand } = require("../../service/arrearsService.js");
var app = getApp()
Page({
  data: {
    rightIcon: base_static + "icon_check1.png",
    zzcShow: true,
    textKey: "一年内",
    stateKey: "未起诉",
    qkState: "对方正常营业",
    textVal: 1,
    stateVal: 1,
    qkStateVal: 1,
    topTip: "",
    myTime: [{ val: 1, key: "1年内" }, { val: 2, key: "1-2年内" }, { val: 3, key: "2-3年内" }, { val: 4, key: "3年以上" }],
    caseState: [{ val: 1, key: "未起诉" }, { val: 2, key: "已起诉" }, { val: 3, key: "法院执行中" }],
    time: "",
    state: "",
    qkStateAll: "",
    myNewsStyle: "display: none",
    caseStateStyle: "display: none",
    stateStyle: "display: none",
    rightStyle: "display: none",
    color: "#92aff4",
    myNameV: "",
    lationV: "",
    telV: "",
    qkV: "",
    coinV: "",
    stateV: "",
    add: 2,
    static_img_url: {
      icon_arrow1: base_static + "icon_arrow1.png",
      icon_multiplechoice_2: base_static + "icon_multiplechoice_2.png",
      icon_victory: base_static + "icon_victory.png",
    }
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '催收需求提交',
    })
    var that = this
    this.setData({
      stateAll: [
        { text: "对方正常营业 ", opacity: 1, val: 1, iconRatingShow: 0 },
        { text: "对方承认欠款 ", opacity: 0, val: 2, iconRatingShow: 1 },
        { text: "欠款有纠纷 ", opacity: 0, val: 3, iconRatingShow: 1 },
        { text: "无法联系上 ", opacity: 0, val: 4, iconRatingShow: 1 },
        { text: "已倒闭破产 ", opacity: 0, val: 5, iconRatingShow: 1 }],
    })
    if (options.add == "0") {
      this.setData({
        add: 1,
        cStateStyle: "display: none"
      })
      wx.setNavigationBarTitle({
        title: "国内企业催收"
      })
    }
  },

  inputName(e) {
    this.setData({ myNameV: e.detail.value })
    this.btnJudge()
  },
  inputLation(e) {
    this.setData({ lationV: e.detail.value })
    this.btnJudge()
  },
  inputTel(e) {
    this.setData({ telV: e.detail.value, telTip: "#222" })
    this.btnJudge()
  },
  inputQk(e) {
    this.setData({ qkV: e.detail.value})
    this.btnJudge()
  },
  inputState(e) {
    this.setData({stateV: e.detail.value})
    this.btnJudge()
  },
  inputCoin(e) {
    this.setData({ coinV: e.detail.value, coinTip: "#222"})
    this.btnJudge()
  },
  btnJudge() {
    if (this.data.myNameV != "" && this.data.lationV != "" && this.data.telV != "" && this.data.qkV != "" && this.data.coinV != "" && this.data.textKey && this.data.stateKey && this.data.qkState && this.data.stateV) {
      this.setData({ color: "#fff"})
    }
    else {
      this.setData({color: "#92aff4"})
    }
  },
  handleClickChoice(e) {
    var tip = e.target.dataset.tip
    if (tip == "time") { this.setData({ myNewsStyle: "display: block", zzcShow: false }) }
    else if (tip == "state") { this.setData({ caseStateStyle: "display: block", zzcShow: false }) }
    else if (tip == "qk") { this.setData({ stateStyle: "display: block", zzcShow: false }) }
  },
  handleClickMyNews(e) {
    this.setData({ textTip: "#222", zzcShow: true, myNewsStyle: "display: none", "textKey": e.target.dataset.text, "textVal": e.target.dataset.val })
    this.btnJudge()
  },
  handleClickState(e) {
    this.setData({ stateTip: "#222", zzcShow: true, caseStateStyle: "display: none", "stateKey": e.target.dataset.text, "stateVal": e.target.dataset.val})
    this.btnJudge()
  },
  handleClickQkItem(e) {
    var that = this
    var i = e.target.dataset.index
    if (i != 0 && i != 4) {
      if (this.data.stateAll[i].opacity == 1) { this.data.stateAll[i].opacity = 0, this.data.stateAll[i].iconRatingShow = 1 }
      else { this.data.stateAll[i].opacity = 1, this.data.stateAll[i].iconRatingShow = 0 }
    }
    else {
      if (i == 0) {
        if (this.data.stateAll[0].opacity == 1) {
          this.data.stateAll[0].opacity = 0
          this.data.stateAll[0].iconRatingShow = 1
        }
        else {
          this.data.stateAll[0].opacity = 1
          this.data.stateAll[4].opacity = 0
          this.data.stateAll[0].iconRatingShow = 0 
          this.data.stateAll[4].iconRatingShow = 1 
        }
      }
      if (i == 4) {
        if (this.data.stateAll[4].opacity == 0) {
          this.data.stateAll[4].opacity = 1
          this.data.stateAll[0].opacity = 0
          this.data.stateAll[0].iconRatingShow = 1
          this.data.stateAll[4].iconRatingShow = 0
        }
        else {
          this.data.stateAll[4].opacity = 0
          this.data.stateAll[4].iconRatingShow = 1
        }
      }
    }

    this.setData({
      stateAll: [
        { text: "对方正常营业 ", opacity: this.data.stateAll[0].opacity, val: 1, iconRatingShow: this.data.stateAll[0].iconRatingShow },
        { text: "对方承认欠款 ", opacity: this.data.stateAll[1].opacity, val: 2, iconRatingShow: this.data.stateAll[1].iconRatingShow },
        { text: "欠款有纠纷 ", opacity: this.data.stateAll[2].opacity, val: 3, iconRatingShow: this.data.stateAll[2].iconRatingShow },
        { text: "无法联系上 ", opacity: this.data.stateAll[3].opacity, val: 4, iconRatingShow: this.data.stateAll[3].iconRatingShow },
        { text: "已倒闭破产 ", opacity: this.data.stateAll[4].opacity, val: 5, iconRatingShow: this.data.stateAll[4].iconRatingShow }]
    })
  },
  handleClickQk(e) {
    var that = this;
    var qk = "";
    var qkStateVal = "";
    for (var q = 0; q < 5; q++) {
      if (this.data.stateAll[q].opacity == 1) {
        qk += this.data.stateAll[q].text;
        qkStateVal += this.data.stateAll[q].val + ",";
      }
    }
    console.log(qkStateVal)
    if (utils.isNotEmpty(qkStateVal)) {
      qkStateVal = qkStateVal.substring(0, qkStateVal.lastIndexOf(","));
    }
    this.setData({ zzcShow: true, qkTip: "#222", stateStyle: "display: none", qkState: qk, qkStateVal: qkStateVal });
    if (this.data.state != "" && this.data.qkState != "" && this.data.time != "" && this.data.mynameV != "" && this.data.lationV != "" && this.data.telV != "" && this.data.qkV != "" && this.data.coinV != "") {
      this.setData({ color: "#fff" })
    }
    this.btnJudge()
  },
  handleClickSubmit() {
    var that = this;
    if (this.data.stateVal && this.data.qkStateVal && this.data.textVal && this.data.myNameV && this.data.lationV && this.data.telV && this.data.qkV && this.data.coinV && this.data.stateV) {
      var zztel = /^\d{1,11}$/ 
      if (!zztel.test(this.data.telV) || !(this.data.coinV >= 0 && this.data.coinV <= 99999)) {
        if (!zztel.test(this.data.telV)) {
          this.setData({ topTip: "请输入正确电话格式", telTip: "#f55e43" })
        }
        else {
          this.setData({ topTip: "催收金额范围 0~99999万元", coinTip: "#f55e43" })
        }
        setTimeout(() => {
          this.setData({ topTip: "" })
        }, 2000)
      }
      else {
        var par = {
          "data": {
            "wfmc": this.data.myNameV,
            "xm": this.data.lationV,
            "zqrlxdh1": this.data.telV,
            "orgmc": this.data.qkV,
            "qkje": this.data.coinV,
            "tqsj": this.data.textVal,
            "ajzt": this.data.stateVal,
            "qkfzt": this.data.qkStateVal,
            "en_name": this.data.stateV
          }
        }
        that.setData({ loadingTip: true });
        arrears_demand(that, par, function (data) {
          that.setData({ formStyle: "display: none", rightStyle: "display: block" });
          app.globalData.myFresh = "fresh"
          wx.setNavigationBarTitle({
            title: '需求提交成功',
          })
          that.setData({ loadingTip: false });
        });
      }
    }
    else {

    }
  },
  fun(res) {
  },
  handleClickToIndex() {
    setTimeout(() => {
      this.setData({ loadingTip: false, formStyle: "display: block", rightStyle: "display: none" })
      wx.switchTab({
        url: '/pages/index/index',
      })
    }, 500)
  },
  handleClickToMy() {
    wx.switchTab({
      url: '/pages/arrearsSubmit/arrearsSubmit',
    })
  },
  handleClickZzc() {
    this.setData({
      zzcShow: true,
      myNewsStyle: "display: none",
      caseStateStyle: "display: none",
      stateStyle: "display: none",
    })
  },
  handleClickCatch() {
    console.log()
  },
  onShareAppMessage: function (res) {
    return {
      title: '信用视界',
      path: '/pages/index/index'
    }
  }
})