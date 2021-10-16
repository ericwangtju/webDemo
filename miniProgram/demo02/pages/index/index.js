// index.js
// 获取应用实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: "hello world",
    randomNum: Math.random() * 10,
    randomNum2: Math.random().toFixed(2),
    msg: '你好',
    showView: true,
    array: [1, 2, 3, 4, 56]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRequest()
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
console.log('bottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  inputHandler(e) {
    // console.log(e.detail.value);
    this.setData({
      msg: e.detail.value
    })
  },

  btnTapHandler(e) {
    console.log(e.detail.value);
    this.setData({
      info: this.data.info + 'fuck day',

    })
  },
  getRequest() {
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data: {
        name: 'zs',
        age: 18
      },
      success: (res) => {
        console.log(res);
      }
    })
  },
  postRequest() {
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method: 'POST',
      data: {
        name: 'ls',
        age: 18
      },
      success: (res) => {
        console.log(res.data);
      }
    })
  },
  goMessage() {
    wx.switchTab({
      url: '/pages/logs/logs',
    })
  },
  goInfo() {
    wx.navigateTo({
      url: '/pages/info/info?name=zs&age=20',
    })
  }
})