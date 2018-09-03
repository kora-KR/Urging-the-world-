Page({
  data: {},
  onLoad: function (options) {
    console.log(options)
    var url = options.url
    this.setData({ url: url })
  },
  onShareAppMessage: function (res) {
    return {
      title: '催全球-经典案例',
      path: '/pages/case/case?url=' + this.data.url,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})