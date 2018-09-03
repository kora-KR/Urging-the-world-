Page({
  data: {},
  onLoad: function (options) {
    console.log(options)
    this.setData({ url: options.url + "?newsId=" + options.newsId + "&pName=" + options.pName + "&uid=" + options.uid  })
    console.log(this.data.url)
  },
  onShareAppMessage: function (res) {
    return {
      title: '催全球-头条资讯',
      path: '/pages/index/index?tip=headlineItem&url=' + this.data.url,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})