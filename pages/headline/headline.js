const config = require("../../utils/config.js");
const base_static = config.static_url.static_base_v1;
const { credit_headline} = require("../../service/headline.js");

Page({
  data: {
    bgImg: base_static + "pic_nothing1.png",
    left: 0,
    animation: "",
    scrollId: 0,
    key: 0,
    scrollItem: [
      { text: "外贸资讯", id: "0", st: "one" },
      { text: "风险预警", id: "1", st: "two" },
      { text: "行业热点", id: "2", st: "three" },
      { text: "干货工具", id: "3", st: "four" },
    ],
    newItem: [
      { title: "", data: "", img: base_static + "pic_title_1.png"},
      { title: "", data: "", img: "" },
      { title: "", data: "", img: base_static + "pic_title_1.png" }
    ],
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },
  onLoad: function (options) {
    if(options.url) {
      wx.navigateTo({
        url: '/pages/headlineItem/headlineItem?url=' + options.url,
      })
    }
    var that = this
    var parOne = {"data": {"type" : "64"}
    }
    var parTwo = {"data": {"type": "66"}
    }
    var parThree = {"data": {"type": "68"}
    }
    var parFour = {"data": {"type": "67"}
    }
    credit_headline(this, parOne, that.funOne)
    credit_headline(this, parTwo, that.funTwo)
    credit_headline(this, parThree, that.funThree)
    credit_headline(this, parFour, that.funFour)
  },
  funOne(res) {
    console.log(res)
    if(res.length) {
      this.setData({
        newItemOne: res,
        bgShowOne: 1
      })
    }
  },
  funTwo(res) {
    if(res.length) {
      this.setData({
        newItemTwo: res,
        bgShowTwo: 1
      })  
    }
  },
  funThree(res) {
    if(res.length) {
      this.setData({
        newItemThree: res,
        bgShowThree: 1
      }) 
    }
  },
  funFour(res) {
    if(res.length) {
      this.setData({
        newItemFour: res,
        bgShowFour: 1
      })
    }
  },
  onReady() {
    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
      delay: 100,
      transformOrigin: 'left top 0',
      success(res) {
      }
    })
    this.animation.translateX(6).step()
    this.setData({ animation: this.animation.export() })
  },

  move(x) {
    var that = this
    this.animation.translateX(x).step()
    this.setData({ animation: that.animation.export() })
  },
  // dom操作
  queryMultipleNodes(x) {
    var that = this
    var query = wx.createSelectorQuery()//创建节点查询器 query
    query.select(x).boundingClientRect()//这段代码的意思是选择Id=the-id的节点，获取节点位置信息的查询请求
    query.selectViewport().scrollOffset()//这段代码的意思是获取页面滑动位置的查询请求
    query.exec((res) => {
      that.setData({ left: res[0].left })
    })
  },
  // 滑动切换
  bindChange: function (e) {
    console.log(e)
    var that = this
    var i = e.detail.current
    that.setData({ currentTab: i, key: i});
    if (i == 0) { this.queryMultipleNodes("#one")}
    else if(i == 1) {this.queryMultipleNodes("#two")}
    else if (i == 2) {this.queryMultipleNodes("#three")}
    else if (i == 3) {this.queryMultipleNodes("#four")}
    setTimeout(function() {that.move(that.data.left)}, 100)
    console.log(that.data.left)
  },
  // 点击tab切换 
  swichNav(e){
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        key: e.target.dataset.current
      })
    }
  },
  handleClickItem(e) {
    var url = e.target.dataset.url
    console.log(url.split("?")[1].split("="))
      wx.navigateTo({
        url: "/pages/headlineItem/headlineItem?url=" + url.split("?")[0] + "&newsId=" + url.split("?")[1].split("=")[1] + "&pName=" + url.split("?")[1].split("=")[2] + "&uid=" + url.split("?")[1].split("=")[3]
      })
  },
  errorFunction(e) {
    this.setData({ imgBgColor: '#4b69fc' })
  },
  onShareAppMessage: function (res) {
    return {
      title: '催全球-资讯头条',
      path: '/pages/index/index?tip=headline',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})