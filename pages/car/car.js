Page({
  data: {
    text: "Order Car"
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://taichangtaka.com/wp-json/wp/v2/posts', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          text: JSON.stringify(res.data)
        })
      }
    })
  }
})