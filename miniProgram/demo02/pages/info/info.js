// pages/info/info.js
Page({

    /**
     * Page initial data
     */
    data: {
        count: 0
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        console.log(options);
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function () {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function () {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function () {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {
        this.setData({
            count: 0
        })
        wx.stopPullDownRefresh()
    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    },
    goback() {
        wx.navigateBack({
            delta: 1,
        })
    },
    add() {
        this.setData({
            count: this.data.count + 1
        })
    }
})