Page({
  data: {
  
  },
  onLoad(opation) {
    var that = this
    this.setData({
      url: opation.url,
      text: opation.text
    })
    wx.setNavigationBarTitle({
      title: that.data.text
    })
  },
  onShow(res) {
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.text
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '信用视界',
      path: '/pages/index/index?tag=arrears'
    }
  }
})